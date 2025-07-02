// app.js — Mission Engine & Input Dispatch

let agent = "";
let level = 0;
let currentRiddle;
let hardModes = {};
let timer;
let inputHistory = [];
let inputIndex = -1;

document.getElementById("startBtn").onclick = () => {
  agent = document.getElementById("usernameInput").value.trim().toUpperCase();
  if (!agent) return;

  level = loadProgress(agent);
  hardModes = getModifiers();

  document.getElementById("intro").style.display = "none";
  document.getElementById("game").style.display = "block";
  renderFont("AGENT " + agent, "mini");
  nextLevel();
};

document.getElementById("asciiInput").addEventListener("keydown", e => {
  if (hardModes.lockBackspace && e.key === "Backspace") {
    e.preventDefault();
    markBackspaceUsed();
    return;
  }

  if (e.key === "Enter") {
    const input = e.target.value.trim();
    if (input) {
      inputHistory.unshift(input);
      inputIndex = -1;
      checkAnswer(input);
    }
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (inputHistory.length && inputIndex < inputHistory.length - 1) {
      inputIndex++;
      e.target.value = inputHistory[inputIndex];
    }
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (inputIndex > 0) {
      inputIndex--;
      e.target.value = inputHistory[inputIndex];
    } else {
      inputIndex = -1;
      e.target.value = "";
    }
  }
});

function nextLevel() {
  if (glitchPending()) return triggerGlitchScreen();

  if (level >= riddles.length) {
    level % 5 === 0 ? injectNeuroRiddle() : injectProceduralRiddle();
  }

  currentRiddle = riddles[level];
  currentRiddle._startTime = Date.now();

  initializeQuantumClock(currentRiddle);
  resetBackspaceFlag();
  maybeInjectMutation(currentRiddle, level);

  document.getElementById("asciiInput").value = "";
  document.getElementById("levelLabel").textContent = `LEVEL ${level + 1}`;
  document.getElementById("riddle").textContent = currentRiddle.riddle || "[REDACTED]";
  document.getElementById("format").textContent = hardModes.hideFormat ? "[ ??? ]" : currentRiddle.format;
  document.getElementById("envLabel").textContent = currentRiddle.log || "";
  document.getElementById("status").textContent = "";
}

function checkAnswer(input) {
  if (input.startsWith("banner://")) {
    window.location.hash = input;
    location.reload();
    return;
  }

  if (input.startsWith("sandbox://")) {
    triggerSandboxEffect(input);
    return;
  }

  if (input === "devMode://true") {
    level = riddles.length;
    renderAgentProfile(agent, level, riddles);
    nextLevel();
    return;
  }

  const isPrimary = isCorrectAnswer(currentRiddle, input);
  const quantumResult = handleQuantumResponse(isPrimary, currentRiddle);

  if (quantumResult.outcome === "primary") {
    level++;
    saveProgress(agent, level);
    evaluateLevelPerformance(currentRiddle, input);
    renderAgentProfile(agent, level, riddles);
    renderBadges();
    nextLevel();
  } else if (quantumResult.outcome === "alternate") {
    awardBadge("🔍 PATTERN BREAKER");
    document.getElementById("status").textContent = `✅ ALT PATH ACCEPTED (w: ${quantumResult.weight})`;
  } else {
    incrementWrongCount();
    document.getElementById("status").textContent = "❌ Incorrect input";
  }
}

["asciiSearchToggle", "sandboxToggle", "codexToggle", "metricsToggle", "journalToggle"].forEach(id => {
  const btn = document.getElementById(id);
  const panel = document.getElementById(btn.id.replace("Toggle", "Panel"));
  btn.onclick = () => {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  };
});
