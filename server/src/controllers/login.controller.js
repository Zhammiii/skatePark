import jwt from 'jsonwebtoken';
import { pool } from "../dbConfig.js";

const secretKey = 'credenciales';
const tokenOptions = { expiresIn: '120s' }; 

async function verificarCredenciales(email, password) {
    const client = await pool.connect();
    try {
        const query = 'SELECT * FROM skaters WHERE email = $1 AND password = $2';
        const result = await client.query(query, [email, password]);
        return result.rows.length > 0; 
    } finally {
        client.release(); 
    }
}

export async function login(req, res) {
    const { email, password } = req.query;
    try {
        const credencialesValidas = await verificarCredenciales(email, password);
        if (credencialesValidas) {
            const token = jwt.sign({ email }, secretKey, tokenOptions);
            res.status(200).json({ success: true, message: "Inicio de sesión exitoso", token });
        } else {
            res.status(204).json({ success: false, message: "Credenciales inválidas" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor" });
    }
}
