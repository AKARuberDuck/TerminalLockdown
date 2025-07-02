// modifiers.js – Store challenge modifier toggles

let modifierStates = {
  lockBackspace: false,
  hideFormat: false,
  timerLimit: false
};

function getModifiers() {
  return { ...modifierStates };
}

function isModifierActive(key) {
  return !!modifierStates[key];
}

function initModifierListeners() {
  Object.keys(modifierStates).forEach(mod => {
    const el = document.getElementById(mod);
    if (!el) return;
    el.addEventListener("change", () => {
      modifierStates[mod] = el.checked;
      saveModifiers();
    });
    modifierStates[mod] = el.checked;
  });
}

function saveModifiers() {
  localStorage.setItem("lockdown_mods", JSON.stringify(modifierStates));
}

function loadModifiers() {
  const raw = localStorage.getItem("lockdown_mods");
  if (raw) {
    modifierStates = JSON.parse(raw);
    for (const k in modifierStates) {
      const el = document.getElementById(k);
      if (el) el.checked = modifierStates[k];
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadModifiers();
  initModifierListeners();
});
