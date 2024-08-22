import { Router } from "express";
import { create } from "../controllers/invoice.js";
const router = Router();

router.post("/", create);

export default router
