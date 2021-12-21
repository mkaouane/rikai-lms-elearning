import express from "express";

const router = express.Router();

// controllers
import { register,login, logout, currentUser } from "../controllers/authController";
// middlewares
import { requireSignin } from "../middlewares";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)
router.get("/current-user", requireSignin, currentUser)

module.exports = router;
