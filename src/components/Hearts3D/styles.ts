import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/**
 * Hearts3D Styled Components
 *
 * 3D floating hearts animation component styles
 * Following the pattern from components/Hornymeter/styles.ts
 */

// Fallback keyframe animation for CSS-only floating
const floatKeyframe = keyframes`
  0%, 100% {
    transform: translateY(0px) translateZ(0);
  }
  50% {
    transform: translateY(-50px) translateZ(50px);
  }
`;

// Container for all 3D hearts
export const Heart3DContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  perspective: 1000px;
`;

// Individual 3D heart element
export const Heart3D = styled(motion.div)<{ $size?: number }>`
  position: absolute;
  font-size: ${({ $size }) => $size || 40}px;
  filter: drop-shadow(0 0 20px rgba(255, 68, 88, 0.8))
    drop-shadow(0 0 40px rgba(255, 68, 88, 0.4));
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  /* Fallback animation if Framer Motion fails */
  animation: ${floatKeyframe} 8s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ $size }) => ($size ? $size * 0.5 : 20)}px;
    filter: drop-shadow(0 0 10px rgba(255, 68, 88, 0.6));
  }
`;

// Particle effects for success animation
const particleBurst = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) translateY(-100px) scale(0.3) rotate(360deg);
    opacity: 0;
  }
`;

export const HeartParticle = styled.div<{ $delay: number; $angle: number }>`
  position: fixed;
  left: 50%;
  top: 50%;
  font-size: 32px;
  pointer-events: none;
  z-index: 9999;
  animation: ${particleBurst} 1.2s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  transform-origin: center;

  /* Apply rotation based on angle prop */
  transform: translate(-50%, -50%) rotate(${({ $angle }) => $angle}deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

// Gift box rotating 3D element (optional decorative element)
const rotate3D = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
`;

export const GiftBox3D = styled(motion.div)`
  font-size: 120px;
  transform-style: preserve-3d;
  filter: drop-shadow(0 0 40px rgba(255, 68, 88, 0.6));
  animation: ${rotate3D} 10s infinite ease-in-out;
  user-select: none;
  will-change: transform;
  backface-visibility: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 60px;
  }
`;
