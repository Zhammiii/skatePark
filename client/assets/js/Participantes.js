const url = "http://localhost:3000";

async function obtenerParticipantes() {
    try {
        const response = await axios.get(`${url}/index`);
        const data = response.data;
        console.log(data);
        const tablaParticipantes = document.getElementById('tabla-participantes');
        const tbody = tablaParticipantes.querySelector('tbody');
        data.forEach((participante, index) => {
            const fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="../../../server/data/${participante.foto}" alt="${participante.nombre}" style="width: 100px;"></td>
                    <td>${participante.nombre}</td>
                    <td>${participante.anos_experiencia}</td>
                    <td>${participante.especialidad}</td>
                    <td class="${participante.estado ? 'text-success' : 'text-warning'} font-weight-bold">${participante.estado ? 'Aprobado' : 'En revisión'}</td>
                </tr>
            `;
            tbody.innerHTML += fila;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerParticipantes();
