// mutator.js — Mutates riddles at fixed levels

function maybeInjectMutation(riddle, index) {
  if ((index + 1) % 5 === 0) {
    riddle.riddle = null;
    setTimeout(() => {
      riddle.riddle = "⚠️ SYSTEM DISTORTION DETECTED";
      document.getElementById("riddle").textContent = riddle.riddle;
    }, 9000);
    awardBadge("⚠️ MUTATION SURVIVOR");
  }
}

function triggerSandboxEffect(code) {
  if (code === "sandbox://burst") {
    awardBadge("💥 BURST MODE");
    for (let i = 0; i < 3; i++) injectProceduralRiddle();
  }
}
