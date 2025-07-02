// sandbox.js – Encrypt/decrypt converter lab

document.getElementById("sandboxInput").addEventListener("input", updateSandbox);
document.getElementById("sandboxMode").addEventListener("change", updateSandbox);

function updateSandbox() {
  const input = document.getElementById("sandboxInput").value.trim();
  const mode = document.getElementById("sandboxMode").value;
  let output = "";

  if (!input) {
    document.getElementById("sandboxOutput").textContent = "[ Awaiting input... ]";
    return;
  }

  switch (mode) {
    case "ENC_DEC": output = wordToAscii(input, "[DEC]"); break;
    case "ENC_HEX": output = wordToAscii(input, "[HX]"); break;
    case "ENC_OCT": output = wordToAscii(input, "[OCT]"); break;
    case "DEC":     output = asciiToWord(input, "[DEC]"); break;
    case "HEX":     output = asciiToWord(input, "[HX]"); break;
    case "OCT":     output = asciiToWord(input, "[OCT]"); break;
  }

  document.getElementById("sandboxOutput").textContent = output;
}
