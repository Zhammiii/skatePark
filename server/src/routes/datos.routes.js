import express from 'express';
import { obtenerDatos, eliminarCuenta, actualizarDatos } from "../controllers/datos.controller.js";

const router = express.Router();

router.get('/', obtenerDatos);
router.delete('/', eliminarCuenta);
router.put('/', actualizarDatos);

export default router;
