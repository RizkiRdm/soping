"use client";
import React from "react";
import { motion } from "framer-motion";

interface buttonProps {
  children: React.ReactNode;
}

const ButtonAnimation: React.FC<buttonProps> = ({ children }) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-1 px-2 rounded"
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
