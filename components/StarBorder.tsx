import React, { CSSProperties } from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  style: CSSProperties;
  [key: string]: any;
}

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "rgba(255,255,255,0.9)",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
      {...rest}>
      <div
        className='pointer-events-none absolute bottom-[-11px] right-[-250%] h-[50%] w-[300%] rounded-full opacity-70 animate-star-movement-bottom'
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className='pointer-events-none absolute left-[-250%] top-[-10px] h-[50%] w-[300%] rounded-full opacity-70 animate-star-movement-top'
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className='relative z-[1] rounded-[20px] border border-white/20 bg-gradient-to-b from-[var(--violet-1)] via-[var(--pink-1)] to-[var(--pink-2)] px-6 py-3 text-center text-sm font-semibold text-white shadow-soft sm:px-8 sm:py-4 sm:text-base'>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
