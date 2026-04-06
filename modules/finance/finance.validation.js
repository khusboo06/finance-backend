import Joi from "joi";

export const createFinanceSchema = Joi.object({
  amount: Joi.number()
    .positive()
    .required(),

  type: Joi.string()
    .valid("income", "expense")
    .required(),

  category: Joi.string()
    .min(2)
    .required(),

  date: Joi.date().optional(),

  note: Joi.string().allow("").optional(),
});

// Query validation (filters + pagination)
export const queryFinanceSchema = Joi.object({
  page: Joi.number().min(1).optional(),
  limit: Joi.number().min(1).max(100).optional(),

  type: Joi.string()
    .valid("income", "expense")
    .optional(),

  category: Joi.string().optional(),
});