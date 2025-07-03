document.addEventListener("DOMContentLoaded", () => {
  const journal = document.getElementById("journalTextarea");
  const saveBtn = document.getElementById("saveJournalBtn");
  const decryptBtn = document.getElementById("decryptJournalBtn");
  const encryptToggle = document.getElementById("encryptJournal");

  const stored = localStorage.getItem("agentJournal");
  if (stored) journal.value = stored;

  saveBtn.addEventListener("click", () => {
    let entry = journal.value;
    if (encryptToggle.checked) {
      entry = wordToAscii(entry, "[DEC]");
    }
    localStorage.setItem("agentJournal", entry);
    showBadge("📓 Journal saved.");
  });

  decryptBtn.addEventListener("click", () => {
    const content = journal.value.trim();
    const codes = content.split(/\s+/);
    if (codes.every(c => /^\d+$/.test(c))) {
      try {
        journal.value = codes.map(c => String.fromCharCode(parseInt(c))).join("");
        showBadge("🔓 Decrypted.");
      } catch {
        showBadge("⚠️ Failed to decode.");
      }
    } else {
      showBadge("ℹ️ Not encrypted.");
    }
  });
});
