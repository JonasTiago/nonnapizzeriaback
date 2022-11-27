import { productCollection } from "../database/db";

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

// export async function findProducts(req, res) {}
