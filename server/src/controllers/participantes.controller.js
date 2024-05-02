import { pool } from "../dbConfig.js";

export async function getParticipantes(req, res) {
    try {
        const result = await pool.query('SELECT * FROM skaters');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

