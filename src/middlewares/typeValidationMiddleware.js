import { productCollection } from "../database/db.js";
import { productSchema, typeSchema } from "../models/productModel.js";

export async function typeValidation(req, res, next) {
  const { type } = req.query;

  const {error} = typeSchema.validate({type})

  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }

  try {
    if (type) {
      const products = await productCollection.find({ type }).toArray();
      res.locals.products = products;
    } else {
      const products = await productCollection.find().toArray();
      res.locals.products = products;
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
