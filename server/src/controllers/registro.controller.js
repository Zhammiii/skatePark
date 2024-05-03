import { pool } from "../dbConfig.js";
import path from "path"; 
const __dirname = path.resolve();

export async function handleRegistro(req, res) {
    try {
        const { email, nombre, password, anos_experiencia, especialidad } = req.body;
        const foto = req.files.foto;
        const { name } = foto;
        let date = new Date();
        let time = date.getTime();
        let newFileName = `${time}-${name}`;
        foto.mv(`${__dirname}/data/${newFileName}`, async (err) => {
            if (err) {
                console.log(err);
                res.send("Ha ocurrido un error inesperado");
            } else {
                try {
                    await pool.query(
                        'INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                        [email, nombre, password, anos_experiencia, especialidad, newFileName, false]
                    );
                    res.send("agregado correctamente")
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error en el servidor' });
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

