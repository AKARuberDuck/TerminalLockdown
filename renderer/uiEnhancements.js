toggleStatsBtn.onclick = () => {
  agentStatsPanel.style.display = agentStatsPanel.style.display === "none" ? "block" : "none";

  agentSelect.innerHTML = "";
  Object.keys(users).forEach(u => {
    if (u !== currentUser) {
      const opt = document.createElement("option");
      opt.value = u;
      opt.textContent = u;
      agentSelect.appendChild(opt);
    }
  });

  agentSelect.onchange = () => {
    const agent = users[agentSelect.value];
    const stats = agent.stats;
    agentStatsDisplay.textContent = `
NAME: ${agentSelect.value}
SOLVED: ${stats.solved}
FAILED: ${stats.failures}
LEVEL: ${stats.level}
`.trim();
  };
};
