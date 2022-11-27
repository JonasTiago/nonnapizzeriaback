import { Router } from "express";

const router = Router();

router.post("/products", createProducts);
router.get("/products", findProducts);

export default router;
