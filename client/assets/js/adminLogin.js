document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
  
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        axios.get("../../../server/admin.json")
          .then(function(response) {
            let adminCredentials = response.data.admin;
            if (email === adminCredentials.email && password === adminCredentials.password) {
              location.replace("/client/Admin.html");
            } else {
              alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
            }
          })
          .catch(function(error) {
            console.error("Error al cargar el archivo JSON:", error);
            alert("Error al cargar el archivo JSON. Por favor, inténtelo de nuevo más tarde.");
          });
      });
    } else {
      console.error("No se encontró el formulario de inicio de sesión.");
      alert("Error interno. Por favor, inténtelo de nuevo más tarde.");
    }
  });
  