import { Router } from "express";
import registro from "./registro.routes.js";
import getParticipantes  from "./participantes.routes.js";
import getLogin from "./login.routes.js"
import getAdmin from "./admin.routes.js"
const router = Router();

/* localhost:3000/   */
router.get("/", (req, res) => {
    res.send("Desafio skatePark");
});

/*definimos los endpoints en secciones */
router.use("/Registro", registro);
router.use("/index" , getParticipantes )
router.use("/Login" , getLogin )
router.use("/Admin" , getAdmin)


export default router;