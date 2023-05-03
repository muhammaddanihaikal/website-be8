async function fetchData(id) {
  try {
    const response = await fetch(
      `https://64508d33a3221969114c7374.mockapi.io/artikel/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

function tampilkanData(data) {
  const detailArtikel = document.getElementById("detail-artikel");

  const h2 = document.createElement("h2");
  h2.textContent = data.judul;
  const img = document.createElement("img");
  img.src = data.gambar;
  const p = document.createElement("p");
  p.textContent = data.artikel;

  detailArtikel.appendChild(h2);
  detailArtikel.appendChild(img);
  detailArtikel.appendChild(p);
}

(async function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const data = await fetchData(id);
  tampilkanData(data);
})();
