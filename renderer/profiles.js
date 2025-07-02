// profiles.js — Save/load agent state + export progress

function calculateRank(solved, total) {
  if (solved >= total) return "👑 OMEGA";
  if (solved >= total * 0.75) return "🧠 GHOST PROTOCOL";
  if (solved >= total * 0.5) return "🎯 CIPHER HACKER";
  return "🕵️ AGENT";
}

function saveProgress(agent, level) {
  localStorage.setItem(`agent_${agent}_level`, level);
}

function loadProgress(agent) {
  return parseInt(localStorage.getItem(`agent_${agent}_level`)) || 0;
}

function renderAgentProfile(agent, level, riddles) {
  const rank = calculateRank(level, riddles.length);
  const log = riddles.slice(0, level).map((r, i) => {
    const ascii = wordToAscii(r.plain, r.format);
    return `L${i + 1}: ${r.plain.toUpperCase()} → ${r.format} → ${ascii}`;
  }).join("\n");

  const profile = `
AGENT: ${agent}
CLEARANCE RANK: ${rank}
LEVELS COMPLETED: ${level}/${riddles.length}
--------------------------
${log || "No logs yet."}
--------------------------
SYSTEM LOG: INTEGRITY GREEN`.trim();

  document.getElementById("profileData").textContent = profile;
}

function exportProgress() {
  const data = {
    agent,
    level,
    badges: getAllBadges(),
    riddlesCompleted: riddles.slice(0, level).map(r => r.plain)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${agent}_progress.json`;
  link.click();
}
