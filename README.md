# 🖥️ TERMINAL LOCKDOWN

> Decrypt the riddle. Break the system. Escape the loop.

**Terminal Lockdown** is an immersive, offline-first puzzle terminal built as a Progressive Web App (PWA). Inspired by retro cyberpunk terminals and ARG logic puzzles, it fuses classic ASCII decoding, neuroprocedural riddles, and memory-driven recursion — all wrapped in a glitchproof green-on-black interface.

---

## 🔐 FEATURES

- 🧠 AI & Procedural Riddles — Handcrafted, generated, and memory-sensitive challenges
- 🧬 Quantum Logic — Accepts alternate solutions based on timing, logic patterns, and metadata
- 🛠️ Sandbox Tool — Real-time ASCII ↔ HEX ↔ OCT ↔ Text conversion lab
- 📓 Encrypted Journal — Log encrypted agent intel (local-only)
- 🏅 Badge System — Unlock rewards based on performance and behavior
- 📚 Codex & Profile — Stores lore, mission logs, and riddle lineage
- 💾 Fully Offline — PWA-enabled, installable, and cache-resilient

---

## 🧰 INSTALLATION

### ▶ Local Play

1. **Clone or download**  
   [https://github.com/AKARuberDuck/TerminalLockdown](https://github.com/AKARuberDuck/TerminalLockdown)

2. Open `index.html` in any modern browser  
   (Chrome, Firefox, Edge)

3. You're in. Internet not required.

### 🌐 Deploy with GitHub Pages

1. Navigate to **Repo → Settings → Pages**
2. Set Source: `main` branch, `/ (root)` folder
3. GitHub will deploy to:  
   `https://akaruberduck.github.io/TerminalLockdown/`

### 📲 Install as App

Terminal Lockdown is a PWA. After opening the site once, your browser may prompt you to **Install App** — this creates a native-like desktop or mobile experience, completely local.

---

## 🧪 DEV TOOLS

Input these in the terminal field to activate internal flags:

| Command              | Effect                                         |
|----------------------|------------------------------------------------|
| `devMode://true`     | Unlocks all riddles instantly for testing     |
| `sandbox://burst`    | Injects 3 procedural riddles immediately      |
| `banner://night`     | Forces CRT terminal to night-mode splash      |

---

## 📁 FILE STRUCTURE



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

## 🧠 FUTURE MODES & IDEAS

- `SURGE` — Timer-based speed riddles
- `WRAITH` — Invisible input mode
- `ECLIPSE` — Memory crossover with journal/codex fusion
- `RESONATOR` — AI-generated riddles based on Codex lore

These expansion systems are modular and queued for development in future updates.

---

## 🛡️ PRIVACY

Terminal Lockdown was built to be **100% local-first.**

- No remote APIs
- No telemetry or analytics
- All state is saved via `localStorage` on your device
- Play it offline, forever

---

## 🧠 CREDITS

Created by **[AKARuberDuck](https://github.com/AKARuberDuck)**  
Curated with the assistance of Microsoft Copilot  
All logic, content, and visual structure designed for immersive cognitive engagement.

> _"The code cracked you, not the other way around."_

MIT License
