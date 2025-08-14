import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// Zustand store for global state management
const useAppStore = create((set, get) => ({
  navigate: null,
  currency: import.meta.env.VITE_CURRENCY,
  token: null,
  user: null,
  isOwner: false,
  showLogin: false,
  pickupDate: "",
  returnDate: "",
  cars: [],

  setNavigate: (navigate) => set({ navigate }),
  setToken: (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
    set({ token });
  },

  setUser: (user) => set({ user }),
  setIsOwner: (val) => set({ isOwner: val }),
  setShowLogin: (val) => set({ showLogin: val }),
  setPickupDate: (val) => set({ pickupDate: val }),
  setReturnDate: (val) => set({ returnDate: val }),
  setCars: (cars) => set({ cars }),

  fetchUser: async () => {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        set({
          user: data.user,
          isOwner: data.user.role === "owner",
        });
      } else {
        const navigate = get().navigate;
        if (navigate) navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  },

  fetchCars: async () => {
    try {
      const { data } = await axios.get("/api/user/cars");
      if (data.success) {
        set({ cars: data.cars });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    set({
      token: null,
      user: null,
      isOwner: false,
    });
    toast.success("You have been logged out");
  },

  init: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      get().setToken(token);
      await get().fetchUser();
    }
    await get().fetchCars();
  },
}));

export default useAppStore;
