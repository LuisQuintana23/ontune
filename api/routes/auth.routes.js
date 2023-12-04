import { Router } from "express";
import { login, logout, register, refreshToken, getUser } from "../controllers/auth.controller.js";
import { existsEmailOrUsername } from "../middlewares/verifyRegister.js";
import {authenticated} from "../middlewares/index.js";

const router = Router()

router.post('/login', login);

router.post('/register', [ existsEmailOrUsername ], register);

router.post('/refresh-token', refreshToken)

router.get('/user', authenticated, getUser)

router.delete('/logout', logout);

export default router;
