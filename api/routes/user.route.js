import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test);

export default router; //exports anywhere when required (we will use in index.js)- as its default it can be linked