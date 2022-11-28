import { Router } from "express";
import {
  createProducts,
  findProducts,
  saleProducts,
} from "../controllers/productsControllers.js";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { typeValidation } from "../middlewares/typeValidationMiddleware.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";
import { saleValidation } from "../middlewares/saleValidationMiddleware.js";

const router = Router();

router.post("/products", productSchemaValidation, createProducts);
router.get("/products", typeValidation, findProducts);
router.post("/products/sale", tokenValidation, saleValidation, saleProducts);

export default router;
