import { Router } from "express";
import { getAll, getById, create } from "../controllers/product.js";
const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create)

export default router;
