import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().min(5).required(),
  price: joi.number().required(),
  description: joi.string().required(),
  type: joi.string().required().valid("Pizzas", "Sobremesas", "Bebidas"),
  quantity: joi.number().required(),
});
