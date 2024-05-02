import {app, PORT} from "./src/app.js";

// Levantando el Servidor
app.listen (PORT, () => {
    console.log (`Conectado al servidor en el puesto ${PORT}`)
});