const Joi = require("joi");

const validateBooks = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  author: Joi.string().min(3).max(50).required(),
  quantity: Joi.number().integer().min(1).required(),
  description: Joi.string().max(500).optional(),
  price: Joi.number().precision(2).positive().required(),
  publishedYear: Joi.number()
    .integer()
    .min(1500)
    .max(new Date().getFullYear())
    .required(),
  category: Joi.string().required(),
});

module.exports = validateBooks;
