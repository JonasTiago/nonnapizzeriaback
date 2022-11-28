import { productCollection } from "../database/db";

export async function saleValidation(req, res, next) {
  const { products, priceTotal } = req.body;
  const user_id = res.locals.user_id;

  products.forEach( async (product) => {
    try {
        const productAvailable = await productCollection.find({id:product.id}).toArray()
        
        if(!productAvailable) return res.sendStatus(404)

        if(product.quantity > productAvailable.quantity) return res.sendStatus(404)

        const sale = {
            products: [
              {
                id,
                quantity,
              },
              {
                id,
                quantity,
              },
            ],
            priceTotal,
            user_id,
          };

        res.locals.sale = sale

    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  next()
}
