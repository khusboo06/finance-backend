import express from "express";
import { dashboard } from "./dashboard.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { authorize } from "../../middleware/role.middleware.js";

const router = express.Router();

router.get("/", protect, authorize("admin", "analyst","viewer"), dashboard);

export default router;