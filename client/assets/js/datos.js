document.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:3000";
  const token = localStorage.getItem("token");

  // Verificar si el token está presente en el localStorage
  if (!token) {
    location.replace("/client/index.html");
    return;
  }

  const response = await axios.get(
    `${url}/Datos?email=${localStorage.getItem(
      "email"
    )}&token=${localStorage.getItem("token")}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 204) {
    location.replace("/client/index.html");
    return;
  }
  console.log(response);
  const data = response.data;
  // Rellenar los campos del formulario con los datos del usuario
  document.getElementById("email").value = data.base.email;
  document.getElementById("name").value = data.base.nombre;
  document.getElementById("password").value = data.base.password;
  document.getElementById("repite_password").value = data.base.password;
  document.getElementById("anos_experiencia").value =
    data.base.anos_experiencia;
  document.getElementById("especialidad").value = data.base.especialidad;

  // Evento para el botón de actualizar
  document
    .getElementById("updatebtn")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const nombre = document.getElementById("name").value;
      const password = document.getElementById("password").value;
      const anos_experiencia =
        document.getElementById("anos_experiencia").value;
      const especialidad = document.getElementById("especialidad").value;

      try {
        await axios.put(
          `${url}/Datos?email=${localStorage.getItem("email")}`,
          { nombre, password, anos_experiencia, especialidad },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Perfil actualizado correctamente.");
      } catch (error) {
        if (error.response.status === 204) {
          location.replace("/client/index.html");
        } else {
          console.error("Error al actualizar el perfil:", error);
          alert(
            "Ha ocurrido un error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde."
          );
        }
      }
    });

  // Evento para el botón de eliminar cuenta
  document
    .getElementById("deletebtn")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        await axios.delete(
          `${url}/Datos?email=${localStorage.getItem("email")}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        alert("Tu cuenta ha sido eliminada.");
      } catch (error) {
        if (error.response.status === 204) {
          location.replace("/client/index.html");
        } else {
          console.error("Error al eliminar la cuenta:", error);
          alert(
            "Ha ocurrido un error al eliminar la cuenta. Por favor, inténtalo de nuevo más tarde."
          );
        }
      }
    });

  // Evento para el botón de cerrar sesión
  const logoutButton = document.getElementById("logoutbtn");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    location.replace("/client/index.html");
  });
});

