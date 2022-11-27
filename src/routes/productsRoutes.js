import { Router } from "express";
import { createProducts } from "../controllers/productsControllers.js";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";

const router = Router();

router.post("/products", productSchemaValidation, createProducts);
// router.get("/products", findProducts);

export default router;
