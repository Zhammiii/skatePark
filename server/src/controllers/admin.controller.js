import { pool } from "../dbConfig.js";

export async function getAdmin(req, res) {
    try {
        const result = await pool.query('SELECT * FROM skaters');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export async function actualizarEstado(req, res) {
    const { id } = req.params;
    const { estado } = req.body;

    try {
        await pool.query('UPDATE skaters SET estado = $1 WHERE id = $2', [estado, id]);
        res.status(200).json({ message: 'Estado actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

