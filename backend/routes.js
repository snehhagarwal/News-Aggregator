import express from "express";
import { adminPostAdd, adminVidPostAdd, approveNewsVid,approveNews, loginAdmin } from "./Controllers/Admin.js";
import { loginReporter } from "./Controllers/Reporter.js";
const router = express.Router();
router.post("/loginAdmin", loginAdmin);
router.post("/loginReporter", loginReporter);
router.post("/adminPostAdd",adminPostAdd);
router.post("/adminVidPostAdd",adminVidPostAdd);
router.post("/approveNews",approveNews);
router.post("/approveNewsVid",approveNewsVid);

export default router;
