import express from "express";
import { createFinance, getFinances } from "./finance.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import {
  createFinanceSchema,
  queryFinanceSchema,
} from "./finance.validation.js";

const router = express.Router();

router.get(
  "/",
  protect,
  authorize("admin", "analyst"),
  validate(queryFinanceSchema, "query"),   
  getFinances
);

router.post(
  "/",
  protect,
  authorize("admin"),
  validate(createFinanceSchema),          
  createFinance
);

export default router;