const url = "http://localhost:3000";
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const repitePassword = document.getElementById("repeat_password");
const anos_experiencia = document.getElementById("anos_experiencia");
const especialidad = document.getElementById("especialidad");
const foto = document.querySelector('input[type="file"]');

async function handleRegistro(event) {
    try {
        event.preventDefault();

        const nombreRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
        if (!nombreRegex.test(nombre.value)) {
            alert("El nombre solo debe contener letras y espacios.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password.value !== repitePassword.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('nombre', nombre.value);
        formData.append('password', password.value);
        formData.append('anos_experiencia', anos_experiencia.value);
        formData.append('especialidad', especialidad.value);
        formData.append('foto', foto.files[0]);

        const response = await axios.post(`${url}/Registro`, formData);
        console.log(response.data);
        location.replace("/client/Login.html")
        
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("registroBtn").addEventListener("click", handleRegistro);
