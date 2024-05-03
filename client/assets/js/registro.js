const url = "http://localhost:3000";

async function handleRegistro(event) {
    try {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const nombre = document.getElementById("nombre").value;
        const password = document.getElementById("password").value;
        const anos_experiencia = document.getElementById("anos_experiencia").value;
        const especialidad = document.getElementById("especialidad").value;
        const foto = document.querySelector('input[type="file"]').files[0];

        const formData = new FormData();
        formData.append('email', email);
        formData.append('nombre', nombre);
        formData.append('password', password);
        formData.append('anos_experiencia', anos_experiencia);
        formData.append('especialidad', especialidad);
        formData.append('foto', foto);

        const response = await axios.post(`${url}/Registro`, formData);
        console.log(response.data);
        location.replace("/client/Login.html")
        
        
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("registroBtn").addEventListener("click", handleRegistro);
