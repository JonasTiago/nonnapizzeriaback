import { ObjectId } from "mongodb";
import { productCollection } from "../database/db.js";

export async function saleValidation(req, res, next) {
  const { products, priceTotal, payment } = req.body;
  const userId = res.locals.user_id;

  products.forEach(async (product) => {
    try {
      const productAvailable = await productCollection.findOne({
        _id: ObjectId(product._id),
      });

      if (!productAvailable) return res.sendStatus(404);

      if (parseInt(product.quantity) > parseInt(productAvailable.quantity)) {
        return res.sendStatus(404);
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  const sale = {
    products,
    priceTotal,
    payment,
    userId,
  };

  res.locals.sale = sale;

  next();
}
