import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      const localCart = localStorage.getItem('guestCart');
      if (localCart) {
        setCart({ items: JSON.parse(localCart) });
      } else {
        setCart({ items: [] });
      }
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/cart', { withCredentials: true });
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (user) {
      try {
        const { data } = await axios.post('/api/cart/add', { productId, quantity }, { withCredentials: true });
        setCart(data);
      } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const existingItem = localCart.find(item => item.product._id === productId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const { data: product } = await axios.get(`/api/products/${productId}`);
        localCart.push({ product, quantity });
      }
      
      localStorage.setItem('guestCart', JSON.stringify(localCart));
      setCart({ items: localCart });
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (user) {
      try {
        const { data } = await axios.put(`/api/cart/${productId}`, { quantity }, { withCredentials: true });
        setCart(data);
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      if (quantity <= 0) {
        const filtered = localCart.filter(item => item.product._id !== productId);
        localStorage.setItem('guestCart', JSON.stringify(filtered));
        setCart({ items: filtered });
      } else {
        const item = localCart.find(item => item.product._id === productId);
        if (item) item.quantity = quantity;
        localStorage.setItem('guestCart', JSON.stringify(localCart));
        setCart({ items: localCart });
      }
    }
  };

  const removeFromCart = async (productId) => {
    if (user) {
      try {
        const { data } = await axios.delete(`/api/cart/${productId}`, { withCredentials: true });
        setCart(data);
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const filtered = localCart.filter(item => item.product._id !== productId);
      localStorage.setItem('guestCart', JSON.stringify(filtered));
      setCart({ items: filtered });
    }
  };

  const clearCart = async () => {
    if (user) {
      try {
        await axios.delete('/api/cart', { withCredentials: true });
        setCart({ items: [] });
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    } else {
      localStorage.removeItem('guestCart');
      setCart({ items: [] });
    }
  };

  const cartCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.items.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);

  const value = {
    cart,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
    fetchCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
