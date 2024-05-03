const url = "http://localhost:3000/Admin";

async function getAdmin() {
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        const tablaParticipantes = document.getElementById('tabla-participantes');
        const tbody = tablaParticipantes.querySelector('tbody');
        data.forEach((participante, index) => {
            const estadoCheckbox = participante.estado ? 'checked' : '';
            const fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="../../../server/data/${participante.foto}" alt="${participante.nombre}" style="width: 100px;"></td>
                    <td>${participante.nombre}</td>
                    <td>${participante.anos_experiencia}</td>
                    <td>${participante.especialidad}</td>
                    <td><input type="checkbox" data-id="${participante.id}" ${estadoCheckbox}></td>
                </tr>
            `;
            tbody.innerHTML += fila;
        });

        const checkboxes = document.querySelectorAll('#tabla-participantes input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', async () => {
                const id = checkbox.dataset.id;
                const estado = checkbox.checked;
                await axios.put(`${url}/${id}`, { estado });
            });
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

getAdmin();
