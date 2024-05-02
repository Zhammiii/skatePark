import { Router } from "express";
import { handleRegistro } from "../controllers/registro.controller.js";
const router = Router();

router.post("/", handleRegistro);


export default router;
