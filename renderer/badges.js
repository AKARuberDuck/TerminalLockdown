const badgeToast = document.getElementById("badgeToast");

function showBadge(msg) {
  if (!badgeToast) return;
  badgeToast.textContent = msg;
  badgeToast.classList.remove("hidden");

  clearTimeout(badgeToast._timeout);
  badgeToast._timeout = setTimeout(() => {
    badgeToast.classList.add("hidden");
  }, 3000);
}
