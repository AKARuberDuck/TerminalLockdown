// badges.js — Badge awards + floating toast notifications

const badges = new Set();
let backspaceUsedThisLevel = false;

function awardBadge(name) {
  if (!badges.has(name)) {
    badges.add(name);
    showBadgeToast(name);
  }
}

function resetBackspaceFlag() {
  backspaceUsedThisLevel = false;
}

function markBackspaceUsed() {
  backspaceUsedThisLevel = true;
}

function evaluateLevelPerformance(riddle, input) {
  const clean = input.replace(/\s+/g, '').toUpperCase();
  const answer = riddle.answer.replace(/\s+/g, '').toUpperCase();

  if (!backspaceUsedThisLevel && clean === answer) awardBadge("👻 GHOST HAND");
  if (riddle.format === "[DEC]" && clean === answer) awardBadge("🎯 ASCII ACE");

  if (riddle.quantum && riddle.alternateAnswers) {
    const match = riddle.alternateAnswers.find(alt => {
      const val = typeof alt === "string" ? alt : alt.value;
      const code = wordToAscii(val, riddle.format).replace(/\s+/g, '').toUpperCase();
      return clean === code;
    });
    if (match) awardBadge("🔍 PATTERN BREAKER");
  }

  if (Object.values(getModifiers()).every(Boolean)) {
    awardBadge("🧠 CIPHER SPARTAN");
  }
}

function renderBadges() {
  const log = Array.from(badges).join("  ") || "No badges yet.";
  document.getElementById("profileData").textContent += `\nBADGES: ${log}`;
}

function getAllBadges() {
  return Array.from(badges);
}

function showBadgeToast(text) {
  const el = document.getElementById("badgeToast");
  el.textContent = `🧬 NEW BADGE UNLOCKED: ${text}`;
  el.classList.remove("hidden");
  el.classList.remove("toast"); // reset animation
  void el.offsetWidth;           // force reflow
  el.classList.add("toast");
  setTimeout(() => el.classList.add("hidden"), 3000);
}
