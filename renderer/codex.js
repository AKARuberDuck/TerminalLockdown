// codex.js — Filterable lore entry log

const codexEntries = [
  { id: "entry01", unlocked: true, difficulty: "easy", theme: "paradox", origin: "handwritten", text: "ENTRY 01: The cipher is older than thought." },
  { id: "entry02", unlocked: false, difficulty: "medium", theme: "memory", origin: "neurolexicon", text: "ENTRY 02: Fracture seen at level 13. Glitch was not silent." },
  { id: "entry03", unlocked: false, difficulty: "quantum", theme: "time", origin: "procedural", text: "ENTRY 03: Journal sync anomaly. Someone else is writing." }
];

function renderCodex() {
  const q = document.getElementById("codexSearch").value.trim().toLowerCase();
  const diff = document.getElementById("codexFilterDifficulty").value;
  const theme = document.getElementById("codexFilterTheme").value;
  const origin = document.getElementById("codexFilterOrigin").value;

  const filtered = codexEntries.filter(e =>
    e.unlocked &&
    (!q || e.text.toLowerCase().includes(q)) &&
    (!diff || e.difficulty === diff) &&
    (!theme || e.theme === theme) &&
    (!origin || e.origin === origin)
  );

  document.getElementById("codexContent").textContent =
    filtered.map(e => e.text).join("\n\n---\n\n") || "No unlocked entries.";
}

function initCodexFilters() {
  const difficultySet = new Set(), themeSet = new Set(), originSet = new Set();
  codexEntries.forEach(e => {
    difficultySet.add(e.difficulty); themeSet.add(e.theme); originSet.add(e.origin);
  });

  populateSelect("codexFilterDifficulty", difficultySet);
  populateSelect("codexFilterTheme", themeSet);
  populateSelect("codexFilterOrigin", originSet);

  ["codexSearch", "codexFilterDifficulty", "codexFilterTheme", "codexFilterOrigin"]
    .forEach(id => document.getElementById(id).addEventListener("input", renderCodex));
}

function populateSelect(id, set) {
  const el = document.getElementById(id);
  el.innerHTML = '<option value="">(Any)</option>';
  [...set].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = val.toUpperCase();
    el.appendChild(opt);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initCodexFilters();
  renderCodex();
});
