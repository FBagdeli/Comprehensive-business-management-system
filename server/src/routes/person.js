import { Router } from "express";
import { create, getAllCustomers, getAllSuppliers, getById } from "../controllers/person.js";
const router = Router();

router.post("/", create);
router.get("/customers", getAllCustomers);
router.get("/suppliers", getAllSuppliers);
router.get("/:id", getById);

export default router;
