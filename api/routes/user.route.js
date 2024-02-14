import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser)

export default router; //exports anywhere when required (we will use in index.js)- as its default it can be linked