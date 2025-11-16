import React from "react";

interface GoldAccentProps {
  children: React.ReactNode;
  className?: string;
  variant?: "text" | "border" | "background" | "icon";
}

const GoldAccent = ({
  children,
  className = "",
  variant = "text",
}: GoldAccentProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case "text":
        return "text-gold-300";
      case "border":
        return "border border-gold-300";
      case "background":
        return "bg-gold-100 text-deep1";
      case "icon":
        return "text-gold-300";
      default:
        return "text-gold-300";
    }
  };

  return (
    <span className={`${getVariantClass()} ${className}`}>{children}</span>
  );
};

export default GoldAccent;
