// quantum.js — Alternate acceptance logic + delay gates

function isCorrectAnswer(riddle, input) {
  const clean = input.replace(/\s+/g, "").toUpperCase();
  const correct = riddle.answer.replace(/\s+/g, "").toUpperCase();
  return clean === correct;
}

function handleQuantumResponse(isPrimary, riddle) {
  if (isPrimary) return { outcome: "primary", weight: 1.0 };

  if (riddle.quantum && riddle.alternateAnswers) {
    const input = document.getElementById("asciiInput").value.trim().toUpperCase();
    for (let alt of riddle.alternateAnswers) {
      const val = typeof alt === "string" ? alt : alt.value;
      const altCode = wordToAscii(val, riddle.format).replace(/\s+/g, "").toUpperCase();
      const inputCode = input.replace(/\s+/g, "");

      const now = Date.now();
      const since = riddle._startTime || now;
      const delayOK = !alt.unlockAfterMs || now - since > alt.unlockAfterMs;
      const expireOK = !alt.expireAfterMs || now - since < alt.expireAfterMs;

      if (inputCode === altCode && delayOK && expireOK) {
        return { outcome: "alternate", weight: alt.weight || 0.5 };
      }
    }
  }

  return { outcome: "wrong", weight: 0 };
}

function initializeQuantumClock(riddle) {
  riddle._startTime = Date.now();
}
