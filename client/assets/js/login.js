document.addEventListener("DOMContentLoaded", function () {
  const url = "http://localhost:3000";

  async function handleLogin(event) {
    try {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Validar que el correo electrónico tenga al menos 10 caracteres
      if (email.length < 10) {
        alert("El correo electrónico debe tener al menos 10 caracteres.");
        return;
      }

      // Validar que la contraseña tenga al menos 5 caracteres
      if (password.length < 3) {
        alert("La contraseña debe tener al menos 5 caracteres.");
        return;
      }

      // Validar que el correo electrónico no supere los 50 caracteres
      if (email.length > 50) {
        alert("El correo electrónico no puede tener más de 50 caracteres.");
        return;
      }

      // Validar que la contraseña no supere los 25 caracteres
      if (password.length > 25) {
        alert("La contraseña no puede tener más de 25 caracteres.");
        return;
      }

      if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, ingresa tanto el correo electrónico como la contraseña.");
        return;
      }

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
