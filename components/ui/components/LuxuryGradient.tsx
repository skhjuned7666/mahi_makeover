import React from "react";

interface LuxuryGradientProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pink-violet" | "pink-gold" | "purple-gold" | "multi" | "subtle";
}

const LuxuryGradient = ({
  children,
  className = "",
  variant = "pink-violet",
}: LuxuryGradientProps) => {
  const getGradientClass = () => {
    switch (variant) {
      case "pink-violet":
        return "bg-gradient-to-r from-pink1 to-violet1";
      case "pink-gold":
        return "bg-gradient-to-r from-pink2 to-gold-300";
      case "purple-gold":
        return "bg-gradient-to-r from-deep1 to-gold-300";
      case "multi":
        return "bg-gradient-to-r from-violet1 via-pink1 via-pink2 to-gold-300";
      case "subtle":
        return "bg-gradient-to-b from-white to-pink4";
      default:
        return "bg-gradient-to-r from-pink1 to-violet1";
    }
  };

  return <div className={`${getGradientClass()} ${className}`}>{children}</div>;
};

export default LuxuryGradient;
