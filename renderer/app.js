document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const startBtn = document.getElementById("startBtn");
  const asciiInput = document.getElementById("asciiInput");
  const riddleElem = document.getElementById("riddle");
  const formatElem = document.getElementById("format");
  const storyElem = document.getElementById("story");
  const levelLabel = document.getElementById("levelLabel");

  let currentRiddle = null;
  let level = 0;

  function nextRiddle() {
    const useAI = Math.random() > 0.5;
    useAI ? injectNeuroRiddle() : injectProceduralRiddle();
    currentRiddle = riddles[riddles.length - 1];

    riddleElem.textContent = currentRiddle.riddle;
    formatElem.textContent = `FORMAT: ${currentRiddle.format}`;
    levelLabel.textContent = `LEVEL ${level + 1}`;
    storyElem.textContent = currentRiddle.log || "Decrypt the terminal lock.";
    asciiInput.value = "";
    asciiInput.focus();
  }

  startBtn.addEventListener("click", () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    level = 0;
    nextRiddle();
  });

  asciiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!currentRiddle) return;
      const input = asciiInput.value.trim();
      const correct = input === currentRiddle.answer;
      document.getElementById("status").textContent = correct
        ? "✔️ ACCESS GRANTED"
        : "❌ ACCESS DENIED";

      if (correct) {
        level++;
        setTimeout(nextRiddle, 800);
      }
    }
  });
});
