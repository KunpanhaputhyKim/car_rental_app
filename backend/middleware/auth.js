import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware authentication to protect routes
const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ success: false, message: "Not Authorised" });
  }
  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    if (!userId) {
      return res.json({ success: false, message: "Not Authorised" });
    }
    req.user = await User.findById(userId).select("-password");
    next();
  } catch (error) {
    return res.json({ success: false, message: "Not Authorised" });
  }
};

export default protect;
