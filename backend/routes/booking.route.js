import express from "express";
import {
  checkAvailabilityOfCar,
  createBooking,
  getUserBookings,
  getOwnerBookings,
  updateBookingStatus,
} from "../controllers/booking.controller.js";
import protect from "../middleware/auth.js";

// Booking router
const bookingRouter = express.Router();

// Router endpoints
bookingRouter.post("/check-availability", checkAvailabilityOfCar);
bookingRouter.post("/create", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/owner", protect, getOwnerBookings);
bookingRouter.post("/change-status", protect, updateBookingStatus);

export default bookingRouter;
