document.getElementById("sandboxToggle").onclick = () => {
  sandboxPanel.style.display = sandboxPanel.style.display === "none" ? "block" : "none";
};

document.getElementById("sandboxInput").oninput = () => {
  const raw = sandboxInput.value.trim();
  const mode = sandboxMode.value;
  let result = "";

  if (mode === "ENC_DEC") result = wordToAscii(raw, "[DEC]");
  else if (mode === "ENC_HEX") result = wordToAscii(raw, "[HX]");
  else if (mode === "ENC_OCT") result = wordToAscii(raw, "[OCT]");
  else if (["DEC", "HEX", "OCT"].includes(mode)) {
    const ascii = raw.split(" ").map(code => {
      try {
        const num = parseInt(code, mode === "DEC" ? 10 : mode === "HEX" ? 16 : 8);
        return String.fromCharCode(num);
      } catch {
        return "?";
      }
    }).join("");
    result = ascii;
  }

  sandboxOutput.textContent = result;
};
