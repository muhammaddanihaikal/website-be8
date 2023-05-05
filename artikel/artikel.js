async function fetchData() {
  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/artikel"
    );
    const data = await response.json();
    const row = document.querySelector(".row.flex-column");
    data.forEach((artikel) => {
      const card = document.createElement("div");
      card.classList.add("card", "h-100");
      card.style.maxWidth = "600px";
      card.style.height = "400px";

      const row2 = document.createElement("div");
      row2.classList.add("row", "g-0", "d-flex", "align-items-center");

      const col8 = document.createElement("div");
      col8.classList.add("col-md-8");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = artikel.judul;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = artikel.artikel;

      const cardLink = document.createElement("a");
      cardLink.href = "#";
      cardLink.classList.add("btn", "btn-danger");
      cardLink.textContent = "Selengkapnya";

      const col4 = document.createElement("div");
      col4.classList.add("col-md-4");

      const cardImg = document.createElement("img");
      cardImg.src = artikel.gambar;
      cardImg.classList.add(
        "img-fluid",
        "rounded-start",
        "mx-auto",
        "d-block",
        "h-100"
      );
      cardImg.style.objectFit = "cover";
      cardImg.alt = "...";

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);

      col8.appendChild(cardBody);

      col4.appendChild(cardImg);

      row2.appendChild(col8);
      row2.appendChild(col4);

      card.appendChild(row2);

      row.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
