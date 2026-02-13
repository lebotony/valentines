import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const BannerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 40px 40px;
  background: transparent;
  overflow: visible;
  margin: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

export const ComicText = styled(motion.h2)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ec4899 0%, #db2777 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  letter-spacing: -1px;
  margin: 0;
  line-height: 1.2;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -0.5px;
  }
`;

export const TopText = styled(motion.h3)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin: 0;
  line-height: 1.4;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SubText = styled(motion.p)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0;
  line-height: 1.7;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const FloatingEmoji = styled.div`
  display: none;
`;
