# Car Rental App (MERN)

A full-stack car rental system built with MongoDB, Express, React (Vite), Node.js.
Single-service deployment: the backend serves the built React app in production.

---

## Features

- **Auth & Roles**: Admin, User (JWT; cookie/headers depending on your setup)
- **Cars**: add, edit, delete, search/filter
- **Bookings**: rent cars with pickup/return dates, cancel bookings
- **Dashboard**: view total cars, bookings, revenue
- Image uploads via ImageKit
- **Responsive UI**: React + Tailwind

---

## Tech Stack

- **Frontend**: React 18+/19, Vite, React Router, Zustand, Tailwind
- **Backend**: Node.js, Express, Mongoose, JWT, Multer, ImageKit
- **DB**: MongoDB Atlas
- **Deploy**: Render (one service; serves API + static frontend)

---

## How to Run

- Install dependencies (root): npm install
- Run in dev mode: npm run dev
- Running on: http://localhost:4000

Deployed web service: https://car-rental-app-ckh3.onrender.com/
