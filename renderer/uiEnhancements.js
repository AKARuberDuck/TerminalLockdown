function togglePanel(panelId) {
  const panelIds = [
    "asciiSearchPanel",
    "sandboxPanel",
    "codexPanel",
    "metricsPanel",
    "journalPanel"
  ];

  panelIds.forEach(id => {
    const panel = document.getElementById(id);
    if (panel) {
      panel.style.display = id === panelId ? "block" : "none";
    }
  });
}

// Hook up toggle buttons
document.getElementById("asciiSearchToggle").addEventListener("click", () =>
  togglePanel("asciiSearchPanel"));
document.getElementById("sandboxToggle").addEventListener("click", () =>
  togglePanel("sandboxPanel"));
document.getElementById("codexToggle").addEventListener("click", () =>
  togglePanel("codexPanel"));
document.getElementById("metricsToggle").addEventListener("click", () => {
  togglePanel("metricsPanel");
  updateMetrics?.();
});
document.getElementById("journalToggle").addEventListener("click", () =>
  togglePanel("journalPanel"));
