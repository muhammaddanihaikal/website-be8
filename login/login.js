const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  //   ambil value dari email dan password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //   prosess get data
  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/users"
    );
    const users = await response.json();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login Berhasil!");
      window.location.href =
        "http://127.0.0.1:5500/form-artikel/form-artikel.html";
    } else {
      alert("email atau password salah!");
    }
  } catch (error) {
    console.error("Error : ", error);
    alert("Terjadi kesalahan pada server. Silahkan coba lagi nanti!");
  }
});
