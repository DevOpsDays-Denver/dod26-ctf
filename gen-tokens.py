#!/usr/bin/env python3
"""
Summit Protocol — flag + crypto generator.

Flag text and trail lines are NEVER stored in this file. They are read from
environment variables, which in CI come from GitHub Secrets.

    Required GitHub Secrets / env vars — see STAGES_SPEC below for the flag and
    line variable names, plus PASSWORD. FINAL_CODE is optional.

"{r}" in a flag template is replaced with a fresh random 5-char suffix.

USAGE
    # print the generated block (local, interactive)
    python3 gen-tokens.py

    # patch the GENERATED CONFIG block of script.js in place (CI)
    python3 gen-tokens.py --write script.js

    # also save the plaintext answer key for printing
    python3 gen-tokens.py --write script.js --answer-key answers.txt

Requires:  pip install cryptography
"""

import argparse
import base64
import hashlib
import os
import re
import secrets
import sys

try:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
except ImportError:
    sys.exit("Missing dependency:  pip install cryptography")

ALPHABET = "ABCDEFGHJKMNPQRSTVWXYZ23456789"  # no I L O U 0 1
ITERATIONS = 150_000

# Stage order, and the GitHub Secret names each stage reads from.
#   id          internal key, must match ORDER/RIDDLES/CRYPTO in script.js
#   flag_var    secret holding the flag template ("{r}" = random suffix)
#   line_var    secret holding that stage's submission-trail line
# The last stage is final and carries no trail line.
STAGES_SPEC = [
    ("ff",    "F_F",    "L_F"),
    ("fb",    "F_B",    "L_B"),
    ("f4",    "F_4",    "L_4"),
    ("fo",    "F_O",    "L_O"),
    ("fe",    "F_E",      None),
]

PASSWORD_VAR = "PASSWORD"
FINAL_CODE_VAR = "FINAL_CODE"

BEGIN = "/* ===== BEGIN GENERATED CONFIG"
END = "/* ===== END GENERATED CONFIG ===== */"


# --------------------------------------------------------------------------
# crypto
# --------------------------------------------------------------------------
def nz(s):
    return "".join(c for c in s.upper() if c.isalnum())


def verifier(flag, salt_hex):
    return hashlib.pbkdf2_hmac(
        "sha256", nz(flag).encode(), bytes.fromhex(salt_hex), ITERATIONS
    ).hex()


def aes_key(flag, salt_hex):
    return hashlib.pbkdf2_hmac(
        "sha256", nz(flag).encode(), bytes.fromhex(salt_hex), ITERATIONS, dklen=32
    )


def encrypt(plaintext, flag):
    salt = secrets.token_hex(16)
    iv = secrets.token_bytes(12)
    ct = AESGCM(aes_key(flag, salt)).encrypt(iv, plaintext.encode(), None)
    return salt, base64.b64encode(iv + ct).decode()


# --------------------------------------------------------------------------
# config from environment
# --------------------------------------------------------------------------
def load_config():
    """Read flags, trail lines, and the password from env. Fails loudly if missing."""
    stages, missing = [], []

    for sid, flag_var, line_var in STAGES_SPEC:
        template = os.environ.get(flag_var)
        if not template:
            missing.append(flag_var)
            continue

        line = None
        if line_var:
            line = os.environ.get(line_var)
            if not line:
                missing.append(line_var)
                continue

        suffix = "".join(secrets.choice(ALPHABET) for _ in range(5))
        flag = template.replace("{r}", suffix)
        stages.append({"id": sid, "flag": flag, "line": line})

    password = os.environ.get(PASSWORD_VAR)
    if not password:
        missing.append(PASSWORD_VAR)

    if missing:
        sys.exit(
            "Missing required environment variables:\n  "
            + "\n  ".join(missing)
            + "\n\nAdd them as GitHub Secrets and expose them in the workflow's\n"
            "`env:` block, or set them locally via .env. See ORGANIZER-KIT.md."
        )

    final = os.environ.get(FINAL_CODE_VAR) or (
        "SUMMIT-"
        + "".join(secrets.choice(ALPHABET) for _ in range(4))
        + "-"
        + "".join(secrets.choice(ALPHABET) for _ in range(4))
    )
    return stages, final, password


# --------------------------------------------------------------------------
# emit
# --------------------------------------------------------------------------
def build(stages, final_code, password):
    """Return (generated_js_block, answer_key_text, placeholder_map)."""
    js = [
        BEGIN + " — do not hand-edit =====",
        "   Written by: python3 tools/gen-tokens.py --write script.js",
        "   Source of truth for flag text: GitHub Secrets (see ORGANIZER-KIT.md).",
        "   ===================================================== */",
        "const CRYPTO = {",
    ]
    key = ["SUMMIT PROTOCOL — ANSWER KEY (CONFIDENTIAL)", "=" * 46, ""]

    for st in stages:
        salt = secrets.token_hex(16)
        js.append(f"  {st['id']}: {{")
        js.append(f'    salt: "{salt}",')
        js.append(f'    hash: "{verifier(st["flag"], salt)}",')
        if st["line"]:
            esalt, blob = encrypt(st["line"], st["flag"])
            js.append("    hasFragment: true,")
            js.append(f'    encSalt: "{esalt}",')
            js.append(f'    encFrag: "{blob}",')
        else:
            js.append("    hasFragment: false,")
        js.append("  },")

        key.append(f"{st['id']}")
        key.append(f"  flag : {st['flag']}")
        if st["line"]:
            key.append(f"  line : {st['line']}")
        key.append("")

    js.append("};")

    last_flag = stages[-1]["flag"]
    fsalt, fblob = encrypt(final_code, last_flag)
    js.append(f'const FINAL_ENC_SALT = "{fsalt}";')
    js.append(f'const FINAL_ENC = "{fblob}";')
    js.append(END)

    key.append(f"COMPLETION CODE : {final_code}")
    key.append("  (encrypted under the final flag; never appears in script.js)")
    key.append(f"PAGE PASSWORD   : {password}")

    by_id = {sid: (flag_var, line_var) for sid, flag_var, line_var in STAGES_SPEC}
    subs = {"{{CODE}}": final_code, "{{PASSWORD}}": password}
    for st in stages:
        flag_var, line_var = by_id[st["id"]]
        subs["{{" + flag_var + "}}"] = st["flag"]
        if st["line"] and line_var:
            subs["{{" + line_var + "}}"] = st["line"]

    return "\n".join(js), "\n".join(key), subs


PUBLISHED = ["index.html", "script.js", "style.css", "README.md"]


def verify_clean(stages, final_code, password, files=None):
    """Fail if any secret we just generated appears in plaintext in a published file.

    Uses the in-memory values, so nothing sensitive is hardcoded anywhere and
    nothing is echoed to stdout on failure — only the file and what kind of
    secret leaked.
    """
    targets = files or PUBLISHED
    problems = []

    needles = [("completion code", final_code), ("page password", password)]
    for st in stages:
        needles.append((f"flag ({st['id']})", st["flag"]))
        if st["line"]:
            needles.append((f"trail line ({st['id']})", st["line"]))

    for path in targets:
        if not os.path.exists(path):
            continue
        body = open(path, encoding="utf-8", errors="replace").read()
        low = body.lower()
        for kind, value in needles:
            if value and value.lower() in low:
                problems.append(f"{path}: {kind} appears in plaintext")

    if problems:
        print("LEAK CHECK FAILED", file=sys.stderr)
        for p in problems:
            print(f"  {p}", file=sys.stderr)
        sys.exit(1)

    print(f"Leak check passed — no secret found in {', '.join(targets)}")


TEMPLATES = {
    "print/placards.template.html": "placards.html",
    "print/main-site-snippets.template.html": "main-site-snippets.html",
}


def render(out_dir, subs):
    """Fill {{PLACEHOLDER}} tokens in the print templates into out_dir."""
    os.makedirs(out_dir, exist_ok=True)
    written = []
    for tpl, out_name in TEMPLATES.items():
        if not os.path.exists(tpl):
            print(f"  (skipping missing template {tpl})")
            continue
        body = open(tpl, encoding="utf-8").read()
        for token, value in subs.items():
            body = body.replace(token, value)
        leftover = sorted(set(re.findall(r"\{\{[A-Z_]+\}\}", body)))
        if leftover:
            sys.exit(f"{tpl}: unfilled placeholders {leftover} — check your secrets.")
        dest = os.path.join(out_dir, out_name)
        with open(dest, "w", encoding="utf-8") as f:
            f.write(body)
        os.chmod(dest, 0o600)
        written.append(dest)
    for d in written:
        print(f"Rendered {d} (mode 600). CONFIDENTIAL — do not commit.")
    return written


def patch(path, block):
    src = open(path).read()
    try:
        i = src.index(BEGIN)
        j = src.index(END) + len(END)
    except ValueError:
        sys.exit(f"Could not find the GENERATED CONFIG markers in {path}.")
    open(path, "w").write(src[:i] + block + src[j:])


# --------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", metavar="SCRIPT_JS",
                    help="patch the generated block of this file in place")
    ap.add_argument("--answer-key", metavar="PATH",
                    help="write plaintext flags here (CONFIDENTIAL — never commit)")
    ap.add_argument("--render", metavar="DIR",
                    help="render the print templates into DIR (CONFIDENTIAL output)")
    ap.add_argument("--no-verify", action="store_true",
                    help="skip the post-write leak check (not recommended)")
    args = ap.parse_args()

    stages, final_code, password = load_config()
    block, key, subs = build(stages, final_code, password)

    if args.write:
        patch(args.write, block)
        print(f"Patched generated config in {args.write}")
        if not args.no_verify:
            verify_clean(stages, final_code, password)
    else:
        print(block)

    if args.render:
        render(args.render, subs)

    if args.answer_key:
        with open(args.answer_key, "w") as f:
            f.write(key + "\n")
        os.chmod(args.answer_key, 0o600)
        print(f"Answer key written to {args.answer_key} (mode 600). Do not commit.")
    elif args.write:
        print("\nNOTE: no --answer-key given, so the plaintext flags were not saved.")
        print("Re-run with --answer-key if you still need them for printing.")


if __name__ == "__main__":
    main()
