document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("codexSearch");
  const theme = document.getElementById("codexFilterTheme");
  const difficulty = document.getElementById("codexFilterDifficulty");
  const origin = document.getElementById("codexFilterOrigin");
  const display = document.getElementById("codexContent");

  function filter() {
    const query = search.value.toLowerCase();
    const matches = riddles.filter(r =>
      (!query || r.riddle.toLowerCase().includes(query)) &&
      (!theme.value || r.theme === theme.value) &&
      (!difficulty.value || r.difficulty === difficulty.value) &&
      (!origin.value || r.origin === origin.value)
    );
    display.textContent = matches.length
      ? matches.map(r => `→ ${r.riddle} (${r.format})`).join("\n")
      : "No matches.";
  }

  [search, theme, difficulty, origin].forEach(el =>
    el.addEventListener("input", filter)
  );
});
