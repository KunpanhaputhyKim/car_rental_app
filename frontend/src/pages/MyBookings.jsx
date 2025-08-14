import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import useAppStore from "../store/useAppStore";
import axios from "axios";
import toast from "react-hot-toast";

// My Bookings Component
const MyBookings = () => {
  // State Definition
  const [bookings, setBookings] = useState([]);

  // Getting states from the app store
  const user = useAppStore((state) => state.user);
  const currency = useAppStore((state) => state.currency);

  // Fetch user bookings
  const fetchBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/user");
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    user && fetchBookings();
  }, [user]);

  return (
    <div className="pl-6 md:pl-16 lg:pl-24 xl:pl-32 2xl:pl-48 mt-16 text-sm max-w-7xl">
      <Title
        title="My Bookings"
        subTitle="View and manage your all car bookings"
        align="left"
      />

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
          <p className="text-3xl font-semibold">No bookings found</p>
          <p className="text-lg mt-1">Start by browsing our available cars</p>
          <a
            href="/cars"
            className="mt-4 px-5 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition"
          >
            Browse Cars
          </a>
        </div>
      ) : (
        <div>
          {bookings.map((booking, index) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
            >
              <div className="md:col-span-1">
                <div className="rounded-md overflow-hidden mb-3">
                  <img
                    src={booking.car.image}
                    alt=""
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
                <p className="text-lg font-medium mt-2">
                  {booking.car.brand} {booking.car.model}
                </p>

                <p className="text-gray-500">
                  {booking.car.year} • {booking.car.category} •{" "}
                  {booking.car.location}
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                  <p className="px-3 py-1.5 bg-light rounded">
                    Booking #{index + 1}
                  </p>
                  <p
                    className={`px-3 py-1 text-xs rounded-full ${
                      booking.status === "confirmed"
                        ? "bg-green-400/15 text-green-600"
                        : "bg-red-400/15 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </p>
                </div>

                <div className="flex items-start gap-2 mt-3">
                  <img
                    src={assets.calendar_icon_colored}
                    alt=""
                    className="w-4 h-4 mt-1"
                  />
                  <div>
                    <p className="text-gray-500">Rental Period</p>
                    <p>
                      {booking.pickupDate.split("T")[0]} To{" "}
                      {booking.returnDate.split("T")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-3">
                  <img
                    src={assets.location_icon_colored}
                    alt=""
                    className="w-4 h-4 mt-1"
                  />
                  <div>
                    <p className="text-gray-500">Pick-up Location</p>
                    <p>{booking.car.location}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col justify-between gap-6">
                <div className="text-sm text-gray-500 text-right">
                  <p>Total Price</p>
                  <h1 className="text-2xl font-semibold text-primary">
                    {currency}
                    {booking.price}
                  </h1>
                  <p>Booked on {booking.createdAt.split("T")[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
