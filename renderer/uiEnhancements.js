// 🔔 Show Feedback Badge
function showBadge(message, duration = 2500) {
  const badge = document.getElementById("badgeToast");
  badge.textContent = message;
  badge.classList.remove("hidden");
  setTimeout(() => {
    badge.classList.add("hidden");
  }, duration);
}

// 🔊 Tier Transition Alert
function tierAlert(tier) {
  showBadge(`✦ DIFFICULTY UPGRADE: ${tier.toUpperCase()} ✦`, 3000);
}

// ⚠️ Emergency Flash (Blackout Protocol Failure)
function triggerEmergencyFlash() {
  const terminal = document.getElementById("terminal");
  terminal.classList.add("emergency-flash");
  setTimeout(() => terminal.classList.remove("emergency-flash"), 400);
}

// 🧠 Animate ASCII Banner Boot Text
window.addEventListener("load", () => {
  const banner = document.getElementById("asciiBanner");
  const text = "BOOTING SYSTEM...";
  banner.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    banner.textContent += text[i++];
    if (i >= text.length) clearInterval(interval);
  }, 50);
});

// 🧪 Highlight Invalid Fields
function highlightField(field) {
  field.style.borderColor = "#ff0044";
  setTimeout(() => {
    field.style.borderColor = "#00ff88";
  }, 1000);
}

// 🔁 Toggle Panels Smoothly
function togglePanel(panelId) {
  const panel = document.getElementById(panelId);
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// ⏱️ Backspace Lock Feedback (Optional)
asciiInput.addEventListener("keydown", e => {
  if (lockBackspace && e.key === "Backspace") {
    e.preventDefault();
    showBadge("⛔ BACKSPACE LOCKED", 1500);
  }
});
