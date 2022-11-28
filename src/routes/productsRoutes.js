import { Router } from "express";
import { createProducts, findProducts } from "../controllers/productsControllers.js";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { typeValidation } from "../middlewares/typeValidationMiddleware.js";

const router = Router();

router.post("/products", productSchemaValidation, createProducts);
router.get("/products",typeValidation, findProducts);

export default router;
