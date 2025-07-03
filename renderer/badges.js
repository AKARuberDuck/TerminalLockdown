function showBadge(message) {
  const badge = document.getElementById("badgeToast");
  badge.textContent = message;
  badge.classList.remove("hidden");

  setTimeout(() => {
    badge.classList.add("hidden");
  }, 2500);
}
