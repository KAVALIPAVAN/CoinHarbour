import React, { useEffect, useRef } from "react";

interface FloatingDotsProps {
  diameter?: number;
  children?: React.ReactNode;
}

const FloatingDots: React.FC<FloatingDotsProps> = ({
  diameter = 200,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = diameter;
    canvas.height = diameter;

    interface Dot {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const DOT_COUNT = 500; // Increased dot count for a denser look
    const DOT_SOURCE_WIDTH = diameter * 10; // Wider spread area for more separation

    const dots: Dot[] = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * DOT_SOURCE_WIDTH - (DOT_SOURCE_WIDTH - diameter) / 2,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.1, // Slightly larger dots for visibility
      speedX: (Math.random() - 0.5) * 0.3, // Slower horizontal movement
      speedY: Math.random() * 0.2 + 0.05, // Slower upward movement
      opacity: Math.random() * 0.5 + 0.5,
    }));

    const animateDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(161, 224, 13, ${dot.opacity})`; // Updated color to #a1e00d
        ctx.fill();

        // Move the dot randomly
        dot.x += dot.speedX;
        dot.y -= dot.speedY;

        // Reset dots when they move out of bounds
        if (dot.y < -dot.radius) {
          dot.y = canvas.height + dot.radius;
          dot.x = Math.random() * DOT_SOURCE_WIDTH - (DOT_SOURCE_WIDTH - diameter) / 2;
        }
        if (dot.x < -20 || dot.x > canvas.width + 20) {
          dot.speedX *= -1; // Reverse horizontal direction on overflow
        }
      });

      requestAnimationFrame(animateDots);
    };

    animateDots();
  }, [diameter]);

  return (
    <div
      style={{
        position: "relative",
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: diameter,
          height: diameter,
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default FloatingDots;
