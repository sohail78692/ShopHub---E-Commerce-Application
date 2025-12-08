import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const seedAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@shophub.com' });
    
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@shophub.com',
        password: 'admin123',
        isAdmin: true
      });
      console.log('Admin user created: admin@shophub.com / admin123');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error.message);
  }
};
