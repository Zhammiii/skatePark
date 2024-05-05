import express from "express";
import cors from "cors";
import expressFileUpload from "express-fileupload";
import path from "path";
const app = express();
const PORT = 3000;
import routes from "./routes/index.routes.js";

// Middleware para servir archivos estáticos
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'data')));

// Configuración de middleware para carga de archivos
let filesConfig = {
    limits: { fileSize: 5000000 }, // Tamaño máximo de archivo: 5MB
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo que intentas subir supera el límite permitido.",
};
app.use(expressFileUpload(filesConfig));

// Middleware de análisis de solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para permitir solicitudes de otros dominios
app.use(cors());

// Rutas
app.use("/", routes);

// Ruta Genérica
app.get("*", (req, res) => {
    res.status(404).send("Esta página No Existe");
});

export { app, PORT };
