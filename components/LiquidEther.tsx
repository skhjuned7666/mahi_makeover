"use client";

import { useEffect, useRef } from "react";

interface LiquidEtherProps {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
  style?: React.CSSProperties;
  dt?: number;
  className?: string;
}

const LiquidEther = ({
  colors = ["#D8598C", "#E37AB1", "#F1C2D2"],
  mouseForce = 10,
  cursorSize = 15,
  isViscous = true,
  viscous = 25,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = false,
  autoSpeed = 0.2,
  autoIntensity = 0.8,
  takeoverDuration = 0.5,
  autoResumeDelay = 5000,
  autoRampDuration = 1.0,
  style = {},
  dt = 0.01,
  className = "",
  ...props
}: LiquidEtherProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Simple animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background with colors
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some animated waves
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      for (let i = 0; i < 3; i++) {
        const offset = (Date.now() * 0.001 * (i + 1)) % (Math.PI * 2);
        const amplitude = 20 + i * 10;
        const frequency = 0.01 + i * 0.005;

        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 + Math.sin(x * frequency + offset) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors]);

  return (
    <canvas ref={canvasRef} className={className} style={style} {...props} />
  );
};

export default LiquidEther;
