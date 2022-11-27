import dayjs from "dayjs";
import { productSchema } from "../models/productModel.js";

export function productSchemaValidation(req, res, next) {
  const { name, price, description, type, quantity } = res.body;

  const product = {
    name,
    price,
    description,
    type,
    quantity,
    createDate: dayjs().format("DD/MM/YYYY"),
  };

  const { error } = productSchema.validate(product, { abortEarly: false });

  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }

  res.locals.product = product;

  next();
}
