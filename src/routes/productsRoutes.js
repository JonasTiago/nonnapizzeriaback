import { Router } from "express";
import { createProducts, findProducts, saleProducts } from "../controllers/productsControllers.js";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { typeValidation } from "../middlewares/typeValidationMiddleware.js";

const router = Router();

router.post("/products", productSchemaValidation, createProducts);
router.get("/products",typeValidation, findProducts);
router.put("/products/sale",saleProducts)

export default router;
