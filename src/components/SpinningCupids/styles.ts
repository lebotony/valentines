import styled from "styled-components";
import { motion } from "framer-motion";

export const CupidContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  overflow: hidden;
`;

interface Cupid3DProps {
  $position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  $size: number;
}

const getPositionStyles = (position: Cupid3DProps["$position"]) => {
  switch (position) {
    case "top-left":
      return `
        top: 10%;
        left: 10%;
      `;
    case "top-right":
      return `
        top: 10%;
        right: 10%;
      `;
    case "bottom-left":
      return `
        bottom: 10%;
        left: 10%;
      `;
    case "bottom-right":
      return `
        bottom: 10%;
        right: 10%;
      `;
    case "center":
      return `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
  }
};

export const Cupid3D = styled(motion.div)<Cupid3DProps>`
  position: absolute;
  font-size: ${(props) => props.$size}px;
  ${(props) => getPositionStyles(props.$position)}
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
  will-change: transform, opacity;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    font-size: ${(props) => props.$size * 0.6}px;
  }
`;
