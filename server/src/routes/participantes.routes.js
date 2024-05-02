import { Router } from "express";
import { getParticipantes } from "../controllers/participantes.controller.js";
const router = Router();

router.get("/", getParticipantes);

export default router;
