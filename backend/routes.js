import express from "express";
import { adminPostAdd, adminVidPostAdd, approveNewsVid,approveNews, loginAdmin } from "./Controllers/Admin.js";
import { loginReporter } from "./Controllers/Reporter.js";
import { getNewsData, UserLogin, UserSignup } from "./Controllers/User.js";
import { addComment, getComments } from "./Controllers/Comments.js";
const router = express.Router();
router.post("/loginAdmin", loginAdmin);
router.post("/loginReporter", loginReporter);
router.post("/adminPostAdd",adminPostAdd);
router.post("/adminVidPostAdd",adminVidPostAdd);
router.post("/approveNews",approveNews);
router.post("/approveNewsVid",approveNewsVid);
router.post("/getNewsData",getNewsData);
router.post("/addComment", addComment);
router.post("/UserLogin", UserLogin);
router.post("/UserSignup", UserSignup);
router.get("/getComments/:newsId", getComments);

export default router;
