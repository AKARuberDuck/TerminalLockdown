document.addEventListener("DOMContentLoaded", () => {
  const panels = [
    "asciiSearchPanel", "sandboxPanel", "codexPanel",
    "metricsPanel", "journalPanel"
  ];

  function togglePanel(id) {
    panels.forEach(pid => {
      const el = document.getElementById(pid);
      if (el) el.style.display = pid === id ? "block" : "none";
    });
  }

  document.getElementById("asciiSearchToggle").onclick = () => togglePanel("asciiSearchPanel");
  document.getElementById("sandboxToggle").onclick = () => togglePanel("sandboxPanel");
  document.getElementById("codexToggle").onclick = () => togglePanel("codexPanel");
  document.getElementById("metricsToggle").onclick = () => {
    togglePanel("metricsPanel");
    updateMetrics?.();
  };
  document.getElementById("journalToggle").onclick = () => togglePanel("journalPanel");
});
