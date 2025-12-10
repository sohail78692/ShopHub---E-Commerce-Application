# 🛍️ **ShopHub – Modern MERN E-Commerce Platform**

A full-stack, feature-rich **MERN E-Commerce Application** with authentication, shopping cart, checkout flow, admin dashboard, and smooth animations.  
Built to be fast ⚡, responsive 📱, and developer-friendly 👨‍💻.

---

## ✨ **Features**

- 🔐 **JWT Authentication** (Login / Register)  
- 🛒 **Smart Shopping Cart** with real-time updates  
- 🛍️ **Product Catalog** with search & category filters  
- 💳 **Checkout & Order Placement**  
- 🛠️ **Admin Dashboard** for product & order management  
- 📦 **Order History** + Profile Page  
- 📱 **Fully Responsive UI** with TailwindCSS  
- 🎨 **Smooth Animations** using Framer Motion  

---

## 🧰 **Tech Stack**

### 🎨 Frontend
- ⚛️ React + Vite  
- 🎀 TailwindCSS  
- 🌀 Framer Motion  
- 🧭 React Router  

### 🛠️ Backend
- 🟦 Node.js  
- 🚂 Express.js  

### 🗄️ Database
- 🍃 MongoDB Atlas  

### 🔑 Authentication
- 🔐 JWT + httpOnly Cookies  

---

## 🚀 **Getting Started**

### 📌 Prerequisites
- Node.js **18+**
- A free **MongoDB Atlas** account

---

## ⚙️ **Environment Variables**

Create a `.env` file inside the **server** directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 📦 **Installation**

```bash
# Install backend
cd server && npm install

# Install frontend
cd ../client && npm install
```

---

## ▶️ **Running the App**

| Service | Port |
|--------|------|
| 🔌 Server | **3001** |
| 💻 Client | **5000** |

Run both to start the full application.

---

## 🔑 **Demo Credentials**

| Role | Email | Password |
|------|--------|-----------|
| 👑 Admin | admin@shophub.com | admin123 |
| 👤 User | Create your own | — |

---

## 🗂️ **Project Structure**

```
/client
  /src
    /components
    /context
    /pages
    /hooks

/server
  /controllers
  /middleware
  /models
  /routes
  /seeds
```

---

## 📡 **API Endpoints**

### 🔐 Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### 🛍️ Products
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (admin)
- `PUT /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)

### 🛒 Cart
- `GET /api/cart`
- `POST /api/cart/add`
- `PUT /api/cart/:productId`
- `DELETE /api/cart/:productId`

### 📦 Orders
- `POST /api/orders`
- `GET /api/orders/my-orders`
- `GET /api/orders/all` (admin)

---

## 🤝 **Contributions Welcome!**

🌟 Pull requests, ideas, issues, and improvements are **open & encouraged**.  
Let’s build ShopHub better — together! 💡✨

---

## ❤️ **Made with Love by Sohail**

Thanks for checking out the project!  
If you like it, ⭐ **Star this repo** — it motivates me! 😄
