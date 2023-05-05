// ketika tombol logout di klik
const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function () {
  const confirmLogout = confirm("Apakah anda ingin keluar?");
  if (confirmLogout) {
    window.location.href = window.location.origin + "/index.html";
  }
});
