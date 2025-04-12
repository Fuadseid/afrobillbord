'use client';

import { motion } from 'framer-motion';

const Button = ({ text, color = 'text-white', bgColor = 'bg-gradient-to-r dark:bg-gray-500 ' }) => {
  return (
    <motion.button
      className={`px-2 py-3 w-fit rounded-lg font-normal ${color} ${bgColor} shadow-lg`}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 0px 8px rgba(0, 0, 255, 0.5)'
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: 'rgba(0, 10, 30, 0.8)'
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15
      }}
    >
      {text}
    </motion.button>
  );
};

export default Button;