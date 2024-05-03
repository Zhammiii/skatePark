const url = "http://localhost:3000";

async function getAdmin() {
    try {
        const response = await axios.get(`${url}/Admin`);
        const data = response.data;
        console.log(data);
        const tablaParticipantes = document.getElementById('tabla-participantes');
        const tbody = tablaParticipantes.querySelector('tbody');
        data.forEach((participante, index) => {
            const estadoCheckbox = participante.estado ? 'checked' : ''; // Determina si el checkbox debe estar marcado o no

            const fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="../../../server/data/${participante.foto}" alt="${participante.nombre}" style="width: 100px;"></td>
                    <td>${participante.nombre}</td>
                    <td>${participante.anos_experiencia}</td>
                    <td>${participante.especialidad}</td>
                    <td><input type="checkbox" ${estadoCheckbox}></td>
                </tr>
            `;
            tbody.innerHTML += fila;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

getAdmin();
