import { Router  } from "express";
import { getByName } from "../controllers/user.js";
const router = Router()

router.get('/:name', getByName)

export default router