import { pool } from "../dbConfig.js";

export async function obtenerDatos(req, res) {
    const userEmail = req.query.email; // Obtener el correo electrónico de la consulta
    try {
        const client = await pool.connect();
        const query = 'SELECT * FROM skaters WHERE email = $1';
        const result = await client.query(query, [userEmail]);
        client.release();
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
}

export async function eliminarCuenta(req, res) {
    const userEmail = req.query.email; // Obtener el correo electrónico de la consulta
    try {
        const client = await pool.connect();
        const query = 'DELETE FROM skaters WHERE email = $1';
        await client.query(query, [userEmail]);
        client.release();
        res.send('Cuenta eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar la cuenta:', error);
        res.status(500).send('Error interno del servidor');
    }
}

export async function actualizarDatos(req, res) {
    const userEmail = req.query.email; // Obtener el correo electrónico de la consulta
    const { nombre, password, anos_experiencia, especialidad } = req.body;
    try {
        const client = await pool.connect();
        const query = 'UPDATE skaters SET nombre = $1, password = $2, anos_experiencia = $3, especialidad = $4 WHERE email = $5';
        await client.query(query, [nombre, password, anos_experiencia, especialidad, userEmail]);
        client.release();
        res.send('Datos actualizados correctamente');
    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
}