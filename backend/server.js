import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./configs/db.js";
import userRouter from "./routes/user.route.js";
import ownerRouter from "./routes/owner.route.js";
import bookingRouter from "./routes/booking.route.js";

// Express App
const app = express();

// Database Connection
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API Routes
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// ---- static serving for production ----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath)); 

app.use((_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Port definition
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
