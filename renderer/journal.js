const journalArea = document.getElementById("journalTextarea");
const saveBtn = document.querySelector("#journalPanel button");
const encryptToggle = document.getElementById("encryptJournal");

function saveJournal() {
  let text = journalArea.value;
  if (encryptToggle.checked) {
    text = wordToAscii(text, "[DEC]");
  }
  localStorage.setItem("agentJournal", text);
  alert("📓 Entry saved.");
}
