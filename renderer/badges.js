function showBadge(msg) {
  const toast = document.getElementById("badgeToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
