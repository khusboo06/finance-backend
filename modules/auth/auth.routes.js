import express from "express";
import { register, login } from "./auth.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { registerSchema } from "../user/user.validation.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", login); 

export default router;