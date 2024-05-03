document.addEventListener("DOMContentLoaded", function () {
  const url = "http://localhost:3000";

  async function handleLogin(event) {
    try {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const response = await axios.post(
        `${url}/Login?email=${email}&password=${password}`
      );
      if (response.data.success) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("email", email); 
        location.replace("/client/Datos.html");
      } else {
        alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
    }
  }
  document.getElementById("loginBtn").addEventListener("click", handleLogin);
});
