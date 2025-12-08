import Product from '../models/Product.js';

const demoProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 50,
    featured: true,
    rating: 4.5,
    numReviews: 128
  },
  {
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with heart rate monitoring, GPS tracking, sleep analysis, and 100+ workout modes. Water resistant up to 50m.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    stock: 35,
    featured: true,
    rating: 4.7,
    numReviews: 256
  },
  {
    name: 'Premium Cotton T-Shirt',
    description: '100% organic cotton t-shirt with a relaxed fit. Available in multiple colors. Sustainable and comfortable for everyday wear.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Clothing',
    stock: 200,
    featured: false,
    rating: 4.2,
    numReviews: 89
  },
  {
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with a modern fit. Features brass buttons and multiple pockets. A wardrobe essential for any season.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: 'Clothing',
    stock: 75,
    featured: true,
    rating: 4.6,
    numReviews: 156
  },
  {
    name: 'Minimalist Desk Lamp',
    description: 'Elegant LED desk lamp with adjustable brightness and color temperature. USB charging port included. Perfect for home office.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    category: 'Home',
    stock: 100,
    featured: false,
    rating: 4.3,
    numReviews: 67
  },
  {
    name: 'Cozy Throw Blanket',
    description: 'Ultra-soft fleece throw blanket. Machine washable and perfect for snuggling on the couch. Available in 8 beautiful colors.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    category: 'Home',
    stock: 150,
    featured: true,
    rating: 4.8,
    numReviews: 312
  },
  {
    name: 'JavaScript: The Good Parts',
    description: 'The definitive guide to the best parts of JavaScript. Essential reading for any web developer looking to master the language.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    category: 'Books',
    stock: 80,
    featured: false,
    rating: 4.9,
    numReviews: 445
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Extra-thick yoga mat with non-slip surface. Eco-friendly materials. Includes carrying strap. Perfect for yoga, pilates, and meditation.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Sports',
    stock: 120,
    featured: true,
    rating: 4.4,
    numReviews: 178
  },
  {
    name: 'Running Shoes Elite',
    description: 'Lightweight running shoes with advanced cushioning technology. Breathable mesh upper and durable rubber outsole.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Sports',
    stock: 60,
    featured: true,
    rating: 4.6,
    numReviews: 234
  },
  {
    name: 'Organic Face Serum',
    description: 'All-natural vitamin C serum for radiant skin. Reduces fine lines and dark spots. Suitable for all skin types.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    category: 'Beauty',
    stock: 90,
    featured: false,
    rating: 4.5,
    numReviews: 167
  },
  {
    name: 'Building Blocks Set',
    description: '500-piece creative building blocks set. Compatible with major brands. Encourages creativity and motor skill development.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500',
    category: 'Toys',
    stock: 85,
    featured: true,
    rating: 4.7,
    numReviews: 289
  },
  {
    name: 'Portable Bluetooth Speaker',
    description: 'Compact waterproof speaker with 360-degree sound. 12-hour battery life. Perfect for outdoor adventures and parties.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Electronics',
    stock: 70,
    featured: false,
    rating: 4.3,
    numReviews: 198
  }
];

export const seedProducts = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(demoProducts);
      console.log('Demo products seeded successfully');
    } else {
      console.log('Products already exist, skipping seed');
    }
  } catch (error) {
    console.error('Error seeding products:', error.message);
  }
};
