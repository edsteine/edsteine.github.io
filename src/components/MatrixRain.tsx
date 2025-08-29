"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MatrixRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
  color?: string;
  enabled?: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  density = 0.8,
  speed = 1,
  opacity = 0.1,
  color = '#00ff00',
  enabled = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled || !isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Characters for matrix effect - mix of code symbols and katakana
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン';

    class MatrixDrop {
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
      maxOpacity: number;

      constructor(x: number) {
        this.x = x;
        this.y = Math.random() * -1000;
        this.speed = Math.random() * 3 + 1;
        this.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.8 + 0.2;
      }

      update(canvasHeight: number) {
        this.y += this.speed * speed;
        
        // Fade in at the top
        if (this.y > 0 && this.opacity < this.maxOpacity) {
          this.opacity += 0.02;
        }
        
        // Change character occasionally
        if (Math.random() < 0.005) {
          this.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
        
        // Reset when off screen
        if (this.y > canvasHeight + 50) {
          this.y = Math.random() * -1000;
          this.opacity = 0;
          this.speed = Math.random() * 3 + 1;
        }
      }

      draw(ctx: CanvasRenderingContext2D, fontSize: number) {
        if (this.opacity > 0) {
          ctx.fillStyle = `rgba(0, 255, 0, ${this.opacity * opacity})`;
          ctx.font = `${fontSize}px 'Courier New', monospace`;
          ctx.fillText(this.char, this.x, this.y);
          
          // Add glow effect
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
          ctx.fillText(this.char, this.x, this.y);
          ctx.shadowBlur = 0;
        }
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let drops: MatrixDrop[] = [];
    const fontSize = 14;
    
    const initDrops = () => {
      drops = [];
      const columns = Math.floor(canvas.width / fontSize);
      
      for (let i = 0; i < columns * density; i++) {
        const x = (i % columns) * fontSize + Math.random() * fontSize;
        drops.push(new MatrixDrop(x));
      }
    };

    const animate = () => {
      // Clear with trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw drops
      drops.forEach(drop => {
        drop.update(canvas.height);
        drop.draw(ctx, fontSize);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initDrops();
    };

    // Initialize
    resizeCanvas();
    initDrops();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled, density, speed, opacity, color, isMounted]);

  if (!enabled || !isMounted) return null;

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    />
  );
};

export default MatrixRain;