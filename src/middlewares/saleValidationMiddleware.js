export async function saleValidation(req, res, next) {
  const { products, priceTotal } = req.body;
  const user_id = res.locals.user_id;

  const sale = {
    products: {
      id,
      quantity,
    },
    priceTotal,
    user_id,
  };
}
