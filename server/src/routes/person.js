import { Router } from "express";
import { create, getAllCustomers, getById } from "../controllers/person.js";
const router = Router();

router.post("/", create);
router.get("/customers", getAllCustomers);
router.get("/:id", getById);

export default router;
