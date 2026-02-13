import { useEffect, useState, useMemo } from "react";
import { Heart3DContainer, Heart3D } from "./styles";

/**
 * Hearts3D Component
 *
 * Renders floating 3D hearts with parallax effect on desktop
 * Following the pattern from Hero.tsx animated blobs
 */

interface Heart3DProps {
  enableParallax?: boolean;
}

interface HeartData {
  id: number;
  emoji: string;
  left: string;
  top: string;
  delay: number;
  duration: number;
  xOffset: number;
  yOffset: number;
  zOffset: number;
}

export const Hearts3D = ({ enableParallax = true }: Heart3DProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse parallax effect (desktop only)
  useEffect(() => {
    if (!enableParallax || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({ x: xPercent * 50, y: yPercent * 50 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableParallax, isMobile]);

  // Generate heart data (memoized for performance)
  const hearts = useMemo<HeartData[]>(() => {
    const heartCount = isMobile ? 8 : 15; // Professional, subtle count
    const allEmojis = [
      // Simple hearts only - elegant and professional
      "💗", "💖", "💘", "💝", "❤️", "💕"
    ];

    return Array.from({ length: heartCount }, (_, index) => ({
      id: index,
      emoji: allEmojis[index % allEmojis.length],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4, // Slower, more gentle
      xOffset: Math.sin(index) * 30, // Less movement
      yOffset: -60 - Math.random() * 20, // Smaller range
      zOffset: Math.random() * 50, // Less depth variation
    }));
  }, [isMobile]);

  return (
    <Heart3DContainer>
      {hearts.map((heart) => (
        <Heart3D
          key={heart.id}
          $size={isMobile ? 25 : 35} // Smaller, more professional size
          style={{
            left: heart.left,
            top: heart.top,
          }}
          animate={{
            y: [0, heart.yOffset, 0],
            x: isMobile
              ? [0, heart.xOffset * 0.3, 0]
              : [
                  mousePosition.x * 0.05,
                  heart.xOffset + mousePosition.x * 0.05,
                  mousePosition.x * 0.05,
                ],
            rotateY: isMobile ? [0, 180, 360] : [0, 180, 360], // Subtle rotation
            rotateZ: [0, 5, 0, -5, 0], // Gentle wobble
            scale: [1, 1.1, 1], // Subtle pulse
            z: isMobile ? 0 : [0, heart.zOffset, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: heart.delay,
          }}
        >
          {heart.emoji}
        </Heart3D>
      ))}
    </Heart3DContainer>
  );
};
