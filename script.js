/* ============================================================================
   SUMMIT PROTOCOL — DevOpsDays Rockies 2026 CTF
   ----------------------------------------------------------------------------
   This file contains riddles, salts, PBKDF2 verifiers, and AES-GCM ciphertext.
   no flags, no trail lines, no completion code, and no password. Sorry!

   TWO HALVES:
     RIDDLES  — public, hand-edited. Change freely.
     GENERATED CONFIG — produced by gen-tokens.py from GitHub Secrets.
                        Never hand-edit; it will be overwritten.
   ============================================================================ */

   const PBKDF2_ITERATIONS = 150000;
   const STORAGE_KEY = "ddr-summit-2026-v3";

   const ORDER = ["ff", "fb", "f4", "fo", "fe"];

   const CRYPTO = {
     ff: {
       salt: "db6bae3d13c44239f4c82c5212f492c6",
       hash: "ece88272db59c26faa9f579b2673241d2a22e998c50a20fe1fa2b71147f983f8",
       hasFragment: true,
       encSalt: "3eaea9a6019c1a9978b64ce83e4ebd46",
       encFrag: "d6dhvRlWdvYNZj6AGQTCgW4PhQ3HfEUe7TvnccEysVzWH60IgqHde9xhIPCk6Q==",
       nextId: "fb",
       nextSalt: "cd7f06f72e1b2858b87604b344bd79e4",
       nextMeta: "CVyf+Ba0RMU7NED+gvL4Ojh59b9oEkYg4I/I27KUzhkZPHuUpCGeZIc6fzg9Ogr1plq6XCTi2OWilWEdO2q5iGsmB3aZoNnFsy3X/DO0H1rusoTdy6cDwnUW9U/W4Iqvdw/CqIhE3y/P3ovqlzyInMJnzB+SVdq0yTF/xp5Ja07lRhCwV37zCoZwJbu5iPDV4aZr1JSQzIy7XSAXeALOlnF8kZhUM9lU4GcTKSfrzDUyOfzZuM1X3I8Gdft4X8B2TKnwZP5jWr0/58AXQ8T2wnIW5YDSDrnF",
     },
     fb: {
       salt: "5b4f1e009ba0930b3e825df33276c888",
       hash: "40ff15411a12b9c8a7688597407c520d37c3f1c32a2ff367db6515339c47a9fe",
       hasFragment: true,
       encSalt: "2fa2627923a2be9cb5dba7e7419d7229",
       encFrag: "H6pcUZ3V67VA961fspz/8CWqQeazn8n1VoXRpP6f5IX1mpsHy2ZujT5tBYJj",
       nextId: "f4",
       nextSalt: "1fa871bc430c5b2bf59f2c188f69098c",
       nextMeta: "tO2uzUAcnAJe4d+xQxWC0ELQCiZboJb2Hofr69cN2gsZUvzpUlsdiGrHWUEgXAx57ZSL6lfy5LF4lqsg+qi4heoXw6zL+yGQa61j0k5Zl9V2iX/97qIMQAdc3pBGPwmNZ1lUHGTBDxXFMX+xYrFNd/FoHHZRKD6Al7JDunDLuhQTo+T7E4Zc0t8sW9geZcA9AjCWUoKKbtGIpaIIWC/78+Yxfrh/3gdK4P1eOTa7NHJNrpUbmgBVGfD95yxeNzkChI379trLlS04Rg2AwetsfCGvHJxkUsF1TPtFNl24E/vDjFi5tld3xZweZnxMf1kesc6m6OiuyRPHKKOQs4uozzYZFyWN/Mk=",
     },
     f4: {
       salt: "b1a3e2060b48333a294716e746b7175f",
       hash: "6d7af68ad5b9ca4848a533c49a002acca9bb07f5d0df600ef669cbce8344e314",
       hasFragment: true,
       encSalt: "c31b5e818b8034e697abc51343a45c06",
       encFrag: "fZGtwK7DTJL5IxsWPrvy2chVqVfbrWBe37GXjkCfx347oNVixLpF42fKJEgakYfMRrDTaDucEWENcQ==",
       nextId: "fo",
       nextSalt: "74daee49ea6f09baae684ff2ad0292f9",
       nextMeta: "8M0NWQNPjr/ou4MoEUH23LAb/nUPEUk6Ml9SU8urLki1AZdIBhfx8PaI8J7HUiVAv3B0Ul5Iyvs63qcz+S6RZsjkUTs0fyp6EoD4btIcXsociU/ZFdLdKZF3gw0WsbSLRpE47Jd9zwgdtGmGcWN/JJEnlYMKIwJ7nB/UFO5LMJNG/UpFo100KXTC7HnDmto6hTxyM013HScCdqke4CAEMUmfqM6pqhJkipjBSd/ASVVxAsYL0smk7WiFUoXf5XZx/zlM25tqPu/j6BHhXcLXk/ZNs9Djq5ZoSt0dX9Smgtm6EeOyrTthV3aq8oiHF2/7x+EuuZiM+Z+iwPo=",
     },
     fo: {
       salt: "0ad43a841557bfb4a0967dfda6fd72f4",
       hash: "6b4aea317e1b6c5ec34e5d5e09c7dd6313c20a2d72bacade385c22c596cf29b6",
       hasFragment: true,
       encSalt: "b0ac67631f1309332bdf9cd43f4c2d71",
       encFrag: "Sbyp+IIWacGFCXtCxd44Isdkmc1QZ804czH8cZW8UvoBnf6gyaO7Vel2ZFzK4rYd2p0HeRs=",
       nextId: "fe",
       nextSalt: "c0198b0520aef829c68bab04ad554a51",
       nextMeta: "x5gC20PQEeKaJM7C+MUFl9EjwZz5EP5NlTLlYmkY2JtiQplJH3uyITKk8cVmtQoWY3NUVbq0qPZG9JWVhIjO7uU/FI0pRWPnO5Wgd5721dle0U8aMdZOYJnQu+EWq6O+ppIIXdFIDDJtkSL9PgLUbkWywjwW5wHpcBDczsjvawhjFbLp3QXEwzPisBCl5hlJ0CovSHo+zG8+e/OlCJMuHdtXRrlGpwEK5oUOu3JQUxau7/oqUbf9mFen9i3e4VVHlfS1l+vJuwdfNIi+/HBh0AxY9Gk09qRtQZjOdeVAxvY2uc+Z7rSLvXBjcBumJACbco03",
     },
     fe: {
       salt: "c244ce2aa17245bfedb3f86e53f48c72",
       hash: "24bdedad60ba012bd351673a99c563e5e09dc6d3565c2dc854887d6e1e6659fa",
       hasFragment: false,
     },
   };
   const FIRST_RIDDLE = {
     "label": "Everything Is Fine",
     "kind": "Physical · Warm-up",
     "riddle": "Start where you started. Somebody is having a much worse morning than you are, and they are being very calm about it.\n\nWhat's playing on the radio, you ask? Barry Manilow."
   };
   const FINAL_ENC_SALT = "841f74d8b76e540681c94e3126fd3dec";
   const FINAL_ENC = "q6S1prL20rc2+Y2yj2T3BWHTTC1h/TcV6SCKxUtOu2ppyT+HsxFPP5W1rjI=";
   /* ===== END GENERATED CONFIG ===== */

   /* Stage list. Riddle text is attached at runtime as each stage unlocks. */
   const STAGES = ORDER.map((id, i) => Object.assign({ id, n: i + 1 }, CRYPTO[id]));


   /* ---------------------------------------------------------------------------
      Storage
      --------------------------------------------------------------------------- */
   function getProgress() {
     try {
       return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
     } catch {
       return {};
     }
   }

   function setSolved(id, fragText, finalCode) {
     const p = getProgress();
     p[id] = { solved: true };
     if (fragText) p[id].frag = fragText;
     if (finalCode) p.__final = finalCode;
     try {
       localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
     } catch {
       /* private browsing — progress just won't persist */
     }
   }

   function getFragment(id) {
     const e = getProgress()[id];
     return e && e.frag ? e.frag : null;
   }

   function getFinalCode() {
     return getProgress().__final || null;
   }

   function getMeta(id) {
     if (id === ORDER[0]) return FIRST_RIDDLE;
     const m = getProgress().__meta;
     return m && m[id] ? m[id] : null;
   }

   function saveMeta(id, meta) {
     const p = getProgress();
     p.__meta = p.__meta || {};
     p.__meta[id] = meta;
     try {
       localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
     } catch {
       /* private browsing */
     }
   }

   function isSolved(id) {
     return !!getProgress()[id];
   }

   function solvedCount() {
     const p = getProgress();
     return STAGES.filter(s => p[s.id]).length;
   }

   /** Index of the first unsolved stage — the only one we reveal. */
   function currentIndex() {
     const p = getProgress();
     for (let i = 0; i < STAGES.length; i++) {
       if (!p[STAGES[i].id]) return i;
     }
     return STAGES.length;
   }

   /* ---------------------------------------------------------------------------
      Verification — PBKDF2-SHA256, 150k iterations.
      Tokens are ~10 chars from a 30-char alphabet (~6e14 space); the iteration
      count pushes offline brute force out of reach for a 2-day event.
      --------------------------------------------------------------------------- */
   function normalize(s) {
     return s.toUpperCase().replace(/[^A-Z0-9]/g, "");
   }

   function hexToBytes(hex) {
     return Uint8Array.from(hex.match(/../g).map(h => parseInt(h, 16)));
   }

   async function deriveHex(token, saltHex) {
     const key = await crypto.subtle.importKey(
       "raw",
       new TextEncoder().encode(normalize(token)),
       "PBKDF2",
       false,
       ["deriveBits"]
     );
     const bits = await crypto.subtle.deriveBits(
       {
         name: "PBKDF2",
         salt: hexToBytes(saltHex),
         iterations: PBKDF2_ITERATIONS,
         hash: "SHA-256",
       },
       key,
       256
     );
     return Array.from(new Uint8Array(bits))
       .map(b => b.toString(16).padStart(2, "0"))
       .join("");
   }

   /** Derive a 256-bit AES key from the flag itself. */
   async function deriveAesKey(token, saltHex) {
     const base = await crypto.subtle.importKey(
       "raw",
       new TextEncoder().encode(normalize(token)),
       "PBKDF2",
       false,
       ["deriveKey"]
     );
     return crypto.subtle.deriveKey(
       {
         name: "PBKDF2",
         salt: hexToBytes(saltHex),
         iterations: PBKDF2_ITERATIONS,
         hash: "SHA-256",
       },
       base,
       { name: "AES-GCM", length: 256 },
       false,
       ["decrypt"]
     );
   }

   /** Decrypt a base64 iv||ciphertext blob using a key derived from `token`. */
   async function decryptWith(token, saltHex, blobB64) {
     try {
       const raw = Uint8Array.from(atob(blobB64), c => c.charCodeAt(0));
       const iv = raw.slice(0, 12);
       const ct = raw.slice(12);
       const key = await deriveAesKey(token, saltHex);
       const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
       return new TextDecoder().decode(pt);
     } catch {
       return null;
     }
   }

   async function verify(stage, token) {
     const candidates = [{ salt: stage.salt, hash: stage.hash }].concat(
       stage.accepts || []
     );
     for (const c of candidates) {
       const got = await deriveHex(token, c.salt);
       if (got === c.hash) return true;
     }
     return false;
   }

   /* ---------------------------------------------------------------------------
      Rendering
      --------------------------------------------------------------------------- */
   function renderProgress() {
     const wrap = document.getElementById("progress-rail");
     if (!wrap) return;
     const cur = currentIndex();
     wrap.innerHTML = STAGES.map((s, i) => {
       const done = isSolved(s.id);
       const active = !done && i === cur;
       const cls = done ? "done" : active ? "active" : "locked";
       return `<div class="rail-node ${cls}">
           <div class="rail-dot">${done ? "✓" : s.n}</div>
           <div class="rail-label">${(done || active) && getMeta(s.id) ? getMeta(s.id).label : "— — —"}</div>
         </div>`;
     }).join("");

     const counter = document.getElementById("solved-count");
     if (counter) counter.textContent = `${solvedCount()} / ${STAGES.length}`;
   }

   function renderFragments() {
     const box = document.getElementById("fragments");
     if (!box) return;
     const lines = STAGES.filter(s => s.hasFragment && isSolved(s.id))
       .map(s => getFragment(s.id))
       .filter(Boolean);
     if (!lines.length) {
       box.innerHTML = `<div class="frag-empty">No directions yet. Capture a flag.</div>`;
       return;
     }
     box.innerHTML = lines.map(l => `<div class="frag-line">${l}</div>`).join("");
   }

   function renderStage() {
     const host = document.getElementById("stage-host");
     if (!host) return;

     const cur = currentIndex();

     if (cur >= STAGES.length) {
       host.innerHTML = `
         <div class="stage-card complete">
           <div class="stage-kind">Complete</div>
           <h2>You reached the summit.</h2>
           <p>All five flags captured. Here is your completion code:</p>

           <div class="final-code" id="final-code">${getFinalCode() || "—"}</div>
           <button type="button" class="copy-btn" id="copy-code">Copy code</button>

           <p><strong>One last tip, adventurer:</strong> The submission form is gated
           by the four additional clues you collected. They tell you how to reach it
           and how to get in.</p>

           <div class="frag-recap">${STAGES.filter(s => s.hasFragment)
             .map(s => getFragment(s.id))
             .filter(Boolean)
             .map(l => `<div class="frag-line">${l}</div>`)
             .join("")}</div>

           <p>Submit your name, email, and this code. <strong>The first three
              submissions take a $150 credit to the DevOpsDays Rockies swag shop.</strong></p>
           <p class="muted">Celebrate ten years of DevOpsDays Rockies! Thanks for playing.</p>
         </div>`;

       const copyBtn = document.getElementById("copy-code");
       if (copyBtn) {
         copyBtn.addEventListener("click", async () => {
           try {
             await navigator.clipboard.writeText(getFinalCode() || "");
             copyBtn.textContent = "Copied ✓";
           } catch {
             copyBtn.textContent = "Select it manually";
           }
           setTimeout(() => (copyBtn.textContent = "Copy code"), 2000);
         });
       }
       return;
     }

     const s = STAGES[cur];
     const meta = getMeta(s.id);
     if (!meta) {
       host.innerHTML = `
         <div class="stage-card">
           <div class="stage-kind">Stage ${s.n} of ${STAGES.length}</div>
           <h2>Locked</h2>
           <p class="muted">This riddle unlocks when you capture the previous flag.</p>
         </div>`;
       return;
     }
     host.innerHTML = `
       <div class="stage-card">
         <div class="stage-kind">Stage ${s.n} of ${STAGES.length} · ${meta.kind}</div>
         <h2>${meta.label}</h2>
         <div class="riddle">${meta.riddle
           .split("\n\n")
           .map(p => `<p>${p}</p>`)
           .join("")}</div>

         <div class="submit-row">
           <input type="text" id="token-input" placeholder="Enter the token you found"
                  autocomplete="off" autocapitalize="characters" spellcheck="false" />
           <button type="button" id="token-submit">Submit</button>
         </div>
         <div class="feedback" id="feedback"></div>
       </div>`;

     const input = document.getElementById("token-input");
     const btn = document.getElementById("token-submit");
     const fb = document.getElementById("feedback");

     async function attempt() {
       const val = input.value;
       if (!normalize(val)) return;
       btn.disabled = true;
       fb.className = "feedback";
       fb.textContent = "Checking…";
       const ok = await verify(s, val);
       if (ok) {
         // The flag itself is the decryption key — unlock what it was hiding.
         const frag = s.hasFragment
           ? await decryptWith(val, s.encSalt, s.encFrag)
           : null;
         const isLast = s.n === STAGES.length;
         const final = isLast
           ? await decryptWith(val, FINAL_ENC_SALT, FINAL_ENC)
           : null;
         setSolved(s.id, frag, final);

         // This flag is also the key to the NEXT riddle.
         if (s.nextId && s.nextMeta) {
           const raw = await decryptWith(val, s.nextSalt, s.nextMeta);
           if (raw) {
             try {
               saveMeta(s.nextId, JSON.parse(raw));
             } catch {
               /* malformed payload — leave locked rather than render junk */
             }
           }
         }
         fb.className = "feedback ok";
         fb.textContent = "✔ Verified.";
         setTimeout(() => {
           renderAll();
           document
             .getElementById("stage-host")
             .scrollIntoView({ behavior: "smooth", block: "center" });
         }, 550);
       } else {
         btn.disabled = false;
         fb.className = "feedback no";
         fb.textContent = "✘ Not it. Check your transcription and try again.";
       }
     }

     btn.addEventListener("click", attempt);
     input.addEventListener("keydown", e => {
       if (e.key === "Enter") attempt();
     });
   }

   function renderAll() {
     renderProgress();
     renderStage();
     renderFragments();
   }

   document.addEventListener("DOMContentLoaded", () => {
     renderAll();

     const reset = document.getElementById("reset-progress");
     if (reset) {
       reset.addEventListener("click", () => {
         if (confirm("Clear your progress on this device? This cannot be undone.")) {
           localStorage.removeItem(STORAGE_KEY);
           renderAll();
         }
       });
     }
   });