import React from "react";
import { motion } from "framer-motion";

interface GoldButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const GoldButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
}: GoldButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-gold-300 to-gold-400 text-deep1 font-semibold shadow-gold-glow hover:shadow-gold-glow-lg";
      case "secondary":
        return "bg-white text-deep1 border border-gold-300 hover:bg-gold-100 font-medium";
      default:
        return "bg-gradient-to-r from-gold-300 to-gold-400 text-deep1 font-semibold shadow-gold-glow hover:shadow-gold-glow-lg";
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-full transition-all duration-300 ${getVariantStyles()} ${className}`}
      onClick={onClick}>
      {children}
    </motion.button>
  );
};

export default GoldButton;
