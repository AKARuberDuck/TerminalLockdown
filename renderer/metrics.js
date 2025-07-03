document.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("metricsLog");

  function updateMetrics() {
    const stats = getRiddleStats();
    log.textContent = `
SOLVED: ${stats.total}
Procedural: ${stats.procedural}
Neurolexicon: ${stats.neurolexicon}
Formats:
 - DEC: ${stats.formats["[DEC]"]}
 - HEX: ${stats.formats["[HX]"]}
 - OCT: ${stats.formats["[OCT]"]}
`.trim();
  }

  updateMetrics();
});
