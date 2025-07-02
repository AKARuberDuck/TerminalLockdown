// metrics.js — Real-time status readout

setInterval(() => {
  if (typeof level === "undefined" || typeof agent === "undefined") return;

  const percent = ((level / riddles.length) * 100).toFixed(1);
  const mods = Object.entries(getModifiers()).filter(e => e[1]).map(e => e[0].toUpperCase()).join(", ") || "NONE";
  const badgeList = getAllBadges().join(", ") || "NONE";

  document.getElementById("metricsLog").textContent = `
AGENT: ${agent}
LEVEL: ${level}/${riddles.length} (${percent}%)
MODIFIERS: ${mods}
BADGES: ${badgeList}
BACKSPACE USED: ${backspaceUsedThisLevel ? "YES" : "NO"}
`.trim();
}, 1500);
