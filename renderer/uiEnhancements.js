// uiEnhancements.js — CRT overlays, badge toasts, startup polish

function initBadgeToast() {
  const el = document.createElement("div");
  el.id = "badgeToast";
  el.className = "toast hidden";
  document.body.appendChild(el);
}

function initCRTFX() {
  const overlay = document.createElement("div");
  overlay.style.pointerEvents = "none";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "999";
  overlay.style.backgroundImage = `
    repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 0, 0.03),
      rgba(0, 255, 0, 0.03) 1px,
      transparent 1px,
      transparent 2px
    )
  `;
  overlay.style.mixBlendMode = "overlay";
  document.body.appendChild(overlay);
}

function animateCRT() {
  const el = document.getElementById("asciiBanner");
  if (el) {
    el.style.animation = "flicker 2s infinite alternate";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBadgeToast();
  initCRTFX();
  animateCRT();
});
