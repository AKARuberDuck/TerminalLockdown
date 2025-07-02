// glitch.js — System lockdown after repeated failure

let wrongCount = 0;

function incrementWrongCount() {
  wrongCount++;
  if (wrongCount >= 3) {
    activateGlitch();
    wrongCount = 0;
  }
}

function glitchPending() {
  return localStorage.getItem("glitchMode") === "1";
}

function activateGlitch() {
  localStorage.setItem("glitchMode", "1");
}

function triggerGlitchScreen() {
  document.getElementById("asciiBanner").textContent = "▒▒▒ SYSTEM COMPROMISED ▒▒▒";
  document.getElementById("riddle").textContent = "YOU BROKE THE ECHO.";
  document.getElementById("asciiInput").disabled = true;
}
