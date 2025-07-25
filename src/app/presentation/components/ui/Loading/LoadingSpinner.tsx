import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white/80 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
}
