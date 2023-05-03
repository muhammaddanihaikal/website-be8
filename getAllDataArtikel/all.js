async function fetchData() {
  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/artikel"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

function tampilkanData(data) {
  const daftarArtikel = document.getElementById("daftar-artikel");
  data.forEach((item) => {
    const id = item.id;
    const judul = item.judul;
    const gambar = item.gambar;
    const artikel = item.artikel;
    const artikelPotong = artikel.split(" ").splice(0, 50).join(" ");

    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.textContent = judul;
    const img = document.createElement("img");
    img.src = gambar;
    const p = document.createElement("p");
    p.textContent = artikelPotong + "...";

    // Tambahkan tombol "Selengkapnya" dengan event listener untuk mengirimkan id ke halaman berikutnya
    const selengkapnyaButton = document.createElement("button");
    selengkapnyaButton.textContent = "Selengkapnya";
    selengkapnyaButton.addEventListener("click", () => {
      window.location.href = `http://127.0.0.1:5500/getSingleDataArtikel/single.html?id=${id}`;
    });

    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(selengkapnyaButton);

    daftarArtikel.appendChild(li);
  });
}

(async function () {
  const data = await fetchData();
  tampilkanData(data);
})();
