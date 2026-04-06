import Joi from "joi";

// Register user validation
export const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .required(),

  role: Joi.string()
    .valid("admin", "analyst", "viewer")
    .optional(),
});

// Update user role validation
export const updateRoleSchema = Joi.object({
  role: Joi.string()
    .valid("admin", "analyst", "viewer")
    .required(),
});