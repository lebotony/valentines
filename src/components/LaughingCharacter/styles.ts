import styled from "styled-components";
import { motion } from "framer-motion";

export const CharacterContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  width: 300px;
  height: 400px;
  pointer-events: none;
  z-index: 100;

  @media (max-width: 768px) {
    right: 50%;
    top: 20%;
    transform: translate(50%, 0);
    width: 200px;
    height: 250px;
  }
`;

export const PointingPerson = styled(motion.div)`
  position: absolute;
  font-size: 8rem;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const TextBubble = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, #fff 0%, #ffe6f0 100%);
  border: 4px solid #ff69b4;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 5px 5px 15px rgba(255, 105, 180, 0.4), 0 0 20px rgba(255, 215, 0, 0.3);
  transform-origin: bottom center;

  /* Comic speech bubble tail */
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid #ff69b4;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 16px solid #ffe6f0;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    border-width: 3px;
  }
`;

export const LaughText = styled.span`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff1493, #ff69b4, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  white-space: nowrap;
  filter: drop-shadow(2px 2px 3px rgba(255, 105, 180, 0.5));

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
