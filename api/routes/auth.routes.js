import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { existsEmailOrUsername } from "../middlewares/verifyRegister.js";

const router = Router()

router.post('/login', login);

router.post('/register', [ existsEmailOrUsername ], register);

router.get('/logout', logout);

export default router;
