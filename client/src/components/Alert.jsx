import { motion, AnimatePresence } from 'framer-motion';

const Alert = ({ message, type = 'error', onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-100 border-red-500 text-red-700' : 
                  type === 'success' ? 'bg-green-100 border-green-500 text-green-700' :
                  'bg-blue-100 border-blue-500 text-blue-700';

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`${bgColor} border-l-4 p-4 mb-4 rounded flex justify-between items-center`}
        >
          <span>{message}</span>
          {onClose && (
            <button onClick={onClose} className="ml-4 font-bold">
              &times;
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
