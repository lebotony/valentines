import { useMemo } from "react";
import { CupidContainer, Cupid3D } from "./styles";

/**
 * SpinningCupids Component
 *
 * Renders large spinning cupids and angels around the page
 * Creates a hopeful, loving atmosphere with joyful expressions
 */

interface CupidData {
  id: number;
  emoji: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size: number;
  delay: number;
  duration: number;
}

export const SpinningCupids = () => {
  const cupids = useMemo<CupidData[]>(() => {
    const cupidEmojis = [
      "👼", "😇", "👼", "😍", "🥰",
      "💖", "✨", "🌟", "💝", "🎁"
    ];

    const positions: CupidData["position"][] = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "center"
    ];

    return Array.from({ length: 10 }, (_, index) => ({
      id: index,
      emoji: cupidEmojis[index % cupidEmojis.length],
      position: positions[index % positions.length],
      size: 80 + Math.random() * 40,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
    }));
  }, []);

  return (
    <CupidContainer>
      {cupids.map((cupid) => (
        <Cupid3D
          key={cupid.id}
          $position={cupid.position}
          $size={cupid.size}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: [0, 360, 720],
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: cupid.duration,
            repeat: Infinity,
            delay: cupid.delay,
            ease: "easeInOut",
          }}
        >
          {cupid.emoji}
        </Cupid3D>
      ))}
    </CupidContainer>
  );
};
