const loginButton = document.querySelector(".submit");
loginButton.addEventListener("click", loginUser);

const linkRegister = document.getElementById("linkRegister");
linkRegister.setAttribute(
  "href",
  window.location.origin + "/register/register.html"
);

async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // validasi: inputan email dan password
  if (!email || !password) {
    alert("Email dan Password harus diisi!");
    return;
  }

  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/users"
    );
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      alert("Email atau password salah!");
      return;
    }

    alert("Anda berhasil login!");
    window.location.href = window.location.origin + "/artikel/artikel.html";
  } catch (error) {
    console.error("Error: " + error);
    alert("Terjadi kesalahan pada server, coba lagi nanti!");
  }
}
