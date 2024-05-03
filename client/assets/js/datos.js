document.addEventListener('DOMContentLoaded', async () => {
    const url = "http://localhost:3000";
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get(`${url}/Datos?email=${localStorage.getItem('email')}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.data;

        // Rellenar los campos del formulario con los datos del usuario
        document.getElementById('email').value = data.email;
        document.getElementById('name').value = data.nombre;
        document.getElementById('password').value = data.password;
        document.getElementById('repite_password').value = data.password;
        document.getElementById('anos_experiencia').value = data.anos_experiencia;
        document.getElementById('especialidad').value = data.especialidad;

        // Evento para el botón de actualizar
        document.getElementById('updatebtn').addEventListener('click', async (event) => {
            event.preventDefault();
            const nombre = document.getElementById('name').value;
            const password = document.getElementById('password').value;
            const anos_experiencia = document.getElementById('anos_experiencia').value;
            const especialidad = document.getElementById('especialidad').value;

            try {
                await axios.put(`${url}/Datos?email=${localStorage.getItem('email')}`, { nombre, password, anos_experiencia, especialidad }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                alert('Perfil actualizado correctamente.');
                
            } catch (error) {
                console.error('Error al actualizar el perfil:', error);
                alert('Ha ocurrido un error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde.');
            }
        });

        // Evento para el botón de eliminar cuenta
        document.getElementById('deletebtn').addEventListener('click', async (event) => {
            event.preventDefault();

            try {
                await axios.delete(`${url}/Datos?email=${localStorage.getItem('email')}`, {
                    headers: { 
                        Authorization: `Bearer ${token}` 
                    }
                });
                alert('Tu cuenta ha sido eliminada.');
            } catch (error) {
                console.error('Error al eliminar la cuenta:', error);
                alert('Ha ocurrido un error al eliminar la cuenta. Por favor, inténtalo de nuevo más tarde.');
            }
        });
    } catch (error) {
        console.error('Error al obtener los datos del perfil:', error);
    }
});