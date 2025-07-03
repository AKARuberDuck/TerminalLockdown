journalToggle.onclick = () => {
  journalPanel.style.display = journalPanel.style.display === "none" ? "block" : "none";
  journalTextarea.value = users[currentUser].journal || "";
};

saveJournalBtn.onclick = () => {
  let content = journalTextarea.value;
  if (encryptJournal.checked) {
    content = btoa(unescape(encodeURIComponent(content))); // Base64 encode
  }
  users[currentUser].journal = content;
  localStorage.setItem("lockdownUsers", JSON.stringify(users));
  showBadge("📝 Log saved");
};

decryptJournalBtn.onclick = () => {
  try {
    const raw = users[currentUser].journal;
    const decoded = decodeURIComponent(escape(atob(raw)));
    journalTextarea.value = decoded;
  } catch {
    showBadge("⚠️ Decryption failed");
  }
};
