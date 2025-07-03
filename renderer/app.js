document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const asciiInput = document.getElementById("asciiInput");
  const lockBackspace = document.getElementById("lockBackspace");
  const timerDisplay = document.getElementById("timerDisplay");

  let level = 0;
  let currentRiddle = null;
  let countdownInterval;

  function startTimer() {
    let time = 30;
    timerDisplay.textContent = `⏳ TIME: ${time}`;
    countdownInterval = setInterval(() => {
      time--;
      timerDisplay.textContent = `⏳ TIME: ${time}`;
      if (time <= 0) {
        clearInterval(countdownInterval);
        showBadge("❌ TIME'S UP");
        asciiInput.disabled = true;
      }
    }, 1000);
  }

  function nextRiddle() {
    const useAI = Math.random() > 0.5;
    (useAI ? injectNeuroRiddle : injectProceduralRiddle)();
    currentRiddle = riddles[riddles.length - 1];

    document.getElementById("riddle").textContent = currentRiddle.riddle;
    document.getElementById("format").textContent = document.getElementById("hideFormat").checked ? "FORMAT: [???]" : `FORMAT: ${currentRiddle.format}`;
    document.getElementById("story").textContent = currentRiddle.theme;
    asciiInput.value = "";
    asciiInput.disabled = false;
    asciiInput.focus();
    if (document.getElementById("timerLimit").checked) startTimer();
  }

  startBtn.addEventListener("click", () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    level = 0;
    nextRiddle();
  });

  asciiInput.addEventListener("keydown", (e) => {
    if (lockBackspace.checked && e.key === "Backspace") {
      e.preventDefault();
      showBadge("🚫 BACKSPACE LOCKED");
      return;
    }
    if (e.key === "Enter") {
      const val = asciiInput.value.trim();
      if (val === currentRiddle.answer) {
        clearInterval(countdownInterval);
        showBadge("✔️ ACCESS GRANTED");
        level++;
        setTimeout(nextRiddle, 800);
      } else {
        showBadge("❌ ACCESS DENIED");
      }
    }
  });
});
