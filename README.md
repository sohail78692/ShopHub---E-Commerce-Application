# ShopHub - E-Commerce Application

A full-stack MERN e-commerce application with user authentication, shopping cart, checkout, and admin dashboard.

## Features

- User registration and login with JWT authentication
- Product catalog with search and category filtering
- Shopping cart with real-time updates
- Checkout flow with order placement
- Admin dashboard for product management
- Order history and profile page
- Responsive design with TailwindCSS
- Smooth animations with Framer Motion

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Framer Motion, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT with httpOnly cookies

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier available)

### Environment Variables

Create a `.env` file in the server directory:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Installation

1. Install server dependencies:
```bash
cd server && npm install
```

2. Install client dependencies:
```bash
cd client && npm install
```

### Running the Application

Start both server and client:
- Server runs on port 3001
- Client runs on port 5000

### Demo Credentials

- **Admin**: admin@shophub.com / admin123
- **User**: Register a new account

## Project Structure

```
/client                 # React frontend
  /src
    /components        # Reusable UI components
    /context          # React Context providers
    /pages            # Page components
    /hooks            # Custom hooks

/server                # Express backend
  /controllers        # Route handlers
  /middleware         # Auth middleware
  /models             # MongoDB schemas
  /routes             # API routes
  /seeds              # Demo data seeds
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add to cart
- `PUT /api/cart/:productId` - Update cart item
- `DELETE /api/cart/:productId` - Remove from cart
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/all` - Get all orders (admin)
