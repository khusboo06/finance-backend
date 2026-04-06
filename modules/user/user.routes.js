import express from "express";
import { getUsers, updateRole } from "./user.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import { updateRoleSchema } from "./user.validation.js";

const router = express.Router();

router.get("/", protect, authorize("admin"), getUsers);

router.put(
  "/:id/role",
  protect,
  authorize("admin"),
  validate(updateRoleSchema),   
  updateRole
);

export default router;