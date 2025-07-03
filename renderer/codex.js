codexToggle.onclick = () => {
  codexPanel.style.display = codexPanel.style.display === "none" ? "block" : "none";
  codexContent.textContent = "";
};

codexSearch.oninput = () => {
  const query = codexSearch.value.trim().toLowerCase();
  const matched = riddles.filter(r =>
    r.riddle.toLowerCase().includes(query) ||
    r.answers.some(a => a.toLowerCase().includes(query))
  );

  codexContent.textContent = matched.map(r =>
    `${r.riddle}\n→ Format: ${r.format}, Difficulty: ${r.difficulty}\n`
  ).join("\n\n");
};
