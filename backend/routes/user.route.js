import express from "express";
import {
  registerUser,
  loginUser,
  getUserData,
  getCars,
} from "../controllers/user.controller.js";
import protect from "../middleware/auth.js";

// User routes
const userRouter = express.Router();

// Router endpoints
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUserData);
userRouter.get("/cars", getCars);

export default userRouter;
