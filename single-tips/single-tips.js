const getData = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const response = await fetch(
      `https://64508d33a3221969114c7374.mockapi.io/artikel/${id}`
    );
    const data = await response.json();

    const artikelDiv = document.querySelector(".card.p-4");

    artikelDiv.querySelector("h2").textContent = data.judul;
    artikelDiv.querySelector("img").src = data.gambar;
    artikelDiv.querySelector("p").textContent = data.artikel;
  } catch (error) {
    console.error(error);
  }
};

getData();

// ketika tombol logout di klik
const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function () {
  const confirmLogout = confirm("Apakah anda ingin keluar?");
  if (confirmLogout) {
    window.location.href = window.location.origin + "/index.html";
  }
});
