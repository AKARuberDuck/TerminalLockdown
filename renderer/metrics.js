metricsToggle.onclick = () => {
  metricsPanel.style.display = metricsPanel.style.display === "none" ? "block" : "none";
  const stats = getRiddleStats();
  const agent = users[currentUser].stats;
  metricsLog.textContent = `
RIDDLES SOLVED: ${agent.solved}
FAILURES: ${agent.failures}
CURRENT LEVEL: ${agent.level}
FORMAT DISTRIBUTION:
[DEC]: ${stats.formats["[DEC]"]}
[HX]:  ${stats.formats["[HX]"]}
[OCT]: ${stats.formats["[OCT]"]}
`.trim();
};
