import { Router } from "express";
import registro from "./registro.routes.js";
import  getParticipantes  from "./participantes.routes.js";
const router = Router();

/* localhost:3000/   */
router.get("/", (req, res) => {
    res.send("Desafio skatePark");
});

/*definimos los endpoints en secciones */
router.use("/Registro", registro);
router.use("/index" , getParticipantes )


export default router;