import { Router } from "express";
import {
  createProducts,
  findProducts,
} from "../controllers/productsControllers";

const router = Router();

router.post("/products", createProducts);
router.get("/products", findProducts);

export default router;
