const metricsLog = document.getElementById("metricsLog");

function updateMetrics() {
  const stats = getRiddleStats();
  metricsLog.textContent = `
RIDDLES SOLVED: ${stats.total}
 - Procedural: ${stats.procedural}
 - Neurolexicon: ${stats.neurolexicon}
FORMATS:
 - DEC: ${stats.formats.dec}
 - HEX: ${stats.formats.hex}
 - OCT: ${stats.formats.oct}
`.trim();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "M" && e.altKey) updateMetrics();
});
