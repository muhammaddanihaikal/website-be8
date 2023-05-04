const registerButton = document.querySelector(".submit");
registerButton.addEventListener("click", registerUser);

const linkLogin = document.getElementById("linkLogin");
linkLogin.setAttribute("href", window.location.origin + "/login/login.html");

async function registerUser() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // validasi: semua inputan harus diisi
  if (!nama || !email || !password || !confirmPassword) {
    alert("Tolong isi semua inputan!");
    return;
  }

  // validasi: password dan confirm password tidak sama
  if (password !== confirmPassword) {
    alert("Password dan Confirm Password harus sama!");
    return;
  }

  const user = {
    nama,
    email,
    password,
  };

  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const result = await response.json();
    alert("Berhasil melakukan registrasi!");
    console.log(result);
  } catch (error) {
    alert("Gagal melakukan registrasi!");
    console.error(error);
  }
}
