# ShopHub E-Commerce Application

## Overview
A full-stack MERN e-commerce application built with React, Express, and MongoDB. Features user authentication, shopping cart, checkout, and admin dashboard.

## Project Architecture

### Frontend (client/)
- React 18 with Vite
- TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation
- React Context for state management (Auth + Cart)

### Backend (server/)
- Express.js REST API
- MongoDB with Mongoose ODM
- JWT authentication with httpOnly cookies
- bcryptjs for password hashing

### Key Files
- `client/src/App.jsx` - Main React app with routing
- `client/src/context/` - AuthContext and CartContext providers
- `server/index.js` - Express server entry point
- `server/models/` - MongoDB schemas (User, Product, Cart, Order)
- `server/routes/` - API route handlers

## Running the Application

### Requirements
- MONGO_URI secret must be set to MongoDB Atlas connection string

### Ports
- Frontend: 5000 (webview)
- Backend: 3001 (API)

### Demo Credentials
- Admin: admin@shophub.com / admin123

## Recent Changes
- Added forgot password feature with secure token-based reset flow
- Initial project setup with full MERN stack implementation

## User Preferences
- Modern, clean UI with indigo color scheme
- Responsive design for all devices
