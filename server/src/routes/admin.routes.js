import { Router } from "express";
import { getAdmin, actualizarEstado } from "../controllers/admin.controller.js";

const router = Router();

router.get("/", getAdmin);
router.put("/:id", actualizarEstado);

export default router;
