# 🖥️ TERMINAL LOCKDOWN

> Decrypt the riddle. Break the system. Escape the loop.

**Terminal Lockdown** is an immersive, offline-first puzzle terminal built as a Progressive Web App (PWA). Inspired by retro cyberpunk terminals and ARG logic puzzles, it fuses classic ASCII decoding, neuroprocedural riddles, and memory-driven recursion — all wrapped in a glitchproof green-on-black interface.

---

## 🔐 FEATURES

- 🧠 **AI & Procedural Riddles** — Handcrafted, generative, and Neurolexicon-synthesized puzzles
- 🧬 **Quantum Logic** — Alternate accepted answers with timing thresholds
- 🛠️ **Sandbox Tool** — Live ASCII↔HEX↔OCT↔Text conversions
- 🧾 **Encrypted Journal** — Optional local encryption of agent thoughts
- 🏅 **Badge System** — Track achievements and unlock behavioral medals
- 🧠 **Memory System** — Riddles and Codex evolve based on past interactions
- 📚 **Codex & Agent Profile** — Live logs of your journey, lore, and intel
- 💾 **Full Offline Support** — 100% PWA compliant, cacheable, installable, and local-first

---

## 🧰 INSTALLATION & SETUP

### ▶ Run Locally

1. **Clone this repo** or [download ZIP](https://github.com/AKARuberDuck/TerminalLockdown)
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge)
3. You're in. No internet connection needed.

### 📲 Install as App (PWA)

Open the site once in Chrome or Edge. A prompt will appear to “Install.” On desktop, you get a standalone app window. On mobile, it behaves like a native app.

---

## 🧪 DEV TOOLS (OPTIONAL)

Use these commands in the terminal input to test special features:

 | Command              | Effect                                         |
 |----------------------|------------------------------------------------|
 | `devMode://true`     | Unlocks all riddles instantly for dev testing  |
 | `banner://night`     | Forces night-mode ASCII splash                 |
 | `sandbox://burst`    | Injects 3 procedural riddles at once           |

---

## 📂 PROJECT STRUCTURE

    TerminalLockdown/ 
    ├── index.html 
    ├── manifest.json 
    ├── sw.js 
    ├── icon-192.png / icon-512.png 
    ├── README.md 
    ├── renderer/ 
    │ ├── style.css 
    │ ├── app.js 
    │ ├── riddles.js 
    │ ├── riddleAI.js 
    │ ├── profiles.js 
    │ ├── utils.js 
    │ ├── generator.js 
    │ ├── quantum.js 
    │ ├── modifiers.js 
    │ ├── fontRenderer.js 
    │ ├── badges.js 
    │ ├── glitch.js 
    │ ├── mutator.js 
    │ ├── banner.js 
    │ ├── codex.js 
    │ ├── metrics.js 
    │ ├── journal.js 
    │ ├── sandbox.js 
    │ └── uiEnhancements.js

---

## 🧠 KNOWN MODES

- `SURGE` — Time attack mode (in progress)
- `WRAITH` — No visible input field (coming soon)
- `ECLIPSE` — Codex interwoven with riddles (prototype)

These experimental protocols can be activated via future dev toggles.

---

## 👤 CREDITS

Created by [AKARuberDuck](https://github.com/AKARuberDuck)  
Thanks to MS Copilot for the - Code architecture and neural engine

         MIT License

---

## 🛡️ PRIVACY NOTICE

Terminal Lockdown is designed for **local-first and offline operation**. All save data resides on your device via localStorage. No cloud storage, tracking, or external APIs are used.

---

        > You don’t play Terminal Lockdown — it plays back.
