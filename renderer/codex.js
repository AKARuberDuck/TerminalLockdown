const codexSearch = document.getElementById("codexSearch");
const codexTheme = document.getElementById("codexFilterTheme");
const codexDifficulty = document.getElementById("codexFilterDifficulty");
const codexOrigin = document.getElementById("codexFilterOrigin");
const codexOutput = document.getElementById("codexContent");

codexSearch.addEventListener("input", filterCodex);
codexTheme.addEventListener("change", filterCodex);
codexDifficulty.addEventListener("change", filterCodex);
codexOrigin.addEventListener("change", filterCodex);

function filterCodex() {
  const query = codexSearch.value.toLowerCase();
  const theme = codexTheme.value;
  const level = codexDifficulty.value;
  const origin = codexOrigin.value;

  const matched = riddles.filter(r =>
    (!query || r.riddle.toLowerCase().includes(query)) &&
    (!theme || r.theme === theme) &&
    (!level || r.difficulty === level) &&
    (!origin || r.origin === origin)
  );

  const display = matched.length
    ? matched.map(r => `→ ${r.riddle} (${r.format})`).join("\n")
    : "No matching riddles found.";

  codexOutput.textContent = display;
}
