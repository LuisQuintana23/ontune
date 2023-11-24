import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js"
import { Router } from "express";
import { authenticated } from "../middlewares/index.js";

const router = Router();

// servicios web
router.get('/', authenticated, getAllUsers)
router.get('/:id', authenticated, getUser)
router.post('/', authenticated, createUser)
router.put('/:id', authenticated, updateUser)
router.delete('/:id', authenticated, deleteUser)

export default router
