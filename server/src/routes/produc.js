import { Router } from "express";
import { getAll } from "../controllers/product.js";
const router = Router();

router.get("/", getAll);

export default  router ;
