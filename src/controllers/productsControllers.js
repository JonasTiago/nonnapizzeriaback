import { ObjectId } from "mongodb";
import { productCollection, saleCollection } from "../database/db.js";

export async function createProducts(req, res) {
  const product = res.locals.product;

  try {
    await productCollection.insertOne(product);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findProducts(req, res) {
  const { products } = res.locals;
  res.status(200).send(products);
}

export async function saleProducts(req, res) {
  const sale = res.locals.sale;

  try {
    await saleCollection.insertOne(sale);
    sale.products.forEach(async (product) => {
      await productCollection.updateOne(
        { _id: ObjectId(product.id) },
        { $inc: { quantity: -product.quantity } }
      );

      res.sendStatus(201);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
