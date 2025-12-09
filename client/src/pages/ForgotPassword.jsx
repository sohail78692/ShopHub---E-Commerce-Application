import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Alert from '../components/Alert';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resetToken, setResetToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const { data } = await axios.post(`${API_URL}/auth/forgot-password`, { email });
      setMessage('Password reset link generated! Use the token below to reset your password.');
      setResetToken(data.resetToken);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to process request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Forgot Password</h2>
          <p className="text-gray-600 text-center mb-8">
            Enter your email address and we'll generate a reset token for you.
          </p>
          
          {error && <Alert message={error} type="error" onClose={() => setError('')} />}
          {message && <Alert message={message} type="success" onClose={() => setMessage('')} />}
          
          {!resetToken ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : 'Send Reset Token'}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 mb-2 font-medium">Your Reset Token:</p>
                <code className="text-xs bg-green-100 p-2 rounded block break-all">{resetToken}</code>
              </div>
              <Link
                to={`/reset-password?token=${resetToken}`}
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition text-center"
              >
                Reset Password Now
              </Link>
            </div>
          )}
          
          <p className="mt-6 text-center text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
