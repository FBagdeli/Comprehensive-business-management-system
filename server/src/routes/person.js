import { Router } from "express";
import { create, getById } from "../controllers/person.js";
const router = Router()

router.post('/', create)
router.get('/', getById)


export default router