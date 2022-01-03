import express from "express";

const router = express.Router();

// controllers
import { makeInstructor, getAccountStatus, currentInstructor } from "../controllers/instructorController";
// middlewares
import { requireSignin } from "../middlewares";

router.post('/make-instructor', requireSignin, makeInstructor)
router.post('/get-account-status', requireSignin, getAccountStatus)
router.get('/current-instructor', requireSignin, currentInstructor)

module.exports = router;
