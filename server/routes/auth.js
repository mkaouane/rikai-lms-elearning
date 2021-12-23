import express from "express";

const router = express.Router();

// controllers
import { register,login, logout, currentUser, forgotPassword, resetPassword } from "../controllers/authController";
// middlewares
import { requireSignin } from "../middlewares";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)
router.get("/current-user", requireSignin, currentUser)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)

module.exports = router;
