import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/**
 * Valentine Page Styled Components
 *
 * All styled components for the Valentine's Day landing page
 * Following the separation pattern from components/Hornymeter/styles.ts
 * and design patterns from Hero.tsx and Waitlist.tsx
 */

// Hero Section
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxxl};
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75)
    ),
    url('/valentine-cards-bg.jpg') center center / cover no-repeat;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    min-height: 100dvh;
  }
`;

// Background blur overlay for depth
export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      ellipse at 20% 30%,
      rgba(236, 72, 153, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      rgba(219, 39, 119, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(244, 114, 182, 0.04) 0%,
      transparent 100%
    );
  pointer-events: none;
  z-index: 1;
`;

// Main content container
export const Container = styled.div`
  position: relative;
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  overflow: visible;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.lg};
    margin-top: -40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
    padding: 0 ${({ theme }) => theme.spacing.md};
    margin-top: -30px;
  }
`;

// Hero content section
export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  overflow: visible;
  width: 100%;
  z-index: 9999;
`;

// Bounce animation for gift box
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
`;

// Float animation for decorative emojis
const floatAround = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(20px, -20px) rotate(10deg) scale(1.1);
  }
  50% {
    transform: translate(0, -40px) rotate(-10deg) scale(1);
  }
  75% {
    transform: translate(-20px, -20px) rotate(10deg) scale(1.1);
  }
`;

// Orbit animation
const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
`;

const orbitMobile = keyframes`
  0% {
    transform: rotate(0deg) translateX(70px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(70px) rotate(-360deg);
  }
`;

// Gift box container with decorations
export const GiftBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  padding: 50px;
  z-index: 9998;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px;
  }
`;

// Gift box emoji (decorative)
export const GiftBoxEmoji = styled(motion.div)`
  font-size: 100px;
  filter: drop-shadow(0 10px 50px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 20px rgba(219, 39, 119, 0.3));
  animation: ${bounce} 3s ease-in-out infinite;
  user-select: none;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 60px;
  }
`;

// Floating decorative emoji
interface FloatingEmojiProps {
  $delay?: number;
  $duration?: number;
}

export const FloatingDecorativeEmoji = styled(motion.div)<FloatingEmojiProps>`
  position: absolute;
  font-size: 40px;
  animation: ${floatAround} ${(props) => props.$duration || 4}s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || 0}s;
  filter: drop-shadow(0 5px 15px rgba(236, 72, 153, 0.3));
  user-select: none;
  z-index: 201;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

// Orbiting sparkle
interface OrbitingSparkleProps {
  $delay?: number;
}

export const OrbitingSparkle = styled.div<OrbitingSparkleProps>`
  position: absolute;
  font-size: 24px;
  animation: ${orbit} 8s linear infinite;
  animation-delay: ${(props) => props.$delay || 0}s;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  user-select: none;
  z-index: 9999;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    animation: ${orbitMobile} 8s linear infinite;
  }
`;

// Main title with gradient
export const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 56px;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  line-height: 1.15;
  background: linear-gradient(135deg, #ec4899 0%, #db2777 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

// Subtitle text
export const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  max-width: 650px;
  margin: 0;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

// Form container with glass effect
export const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.colors.gradient.glass};
  backdrop-filter: blur(30px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  padding: ${({ theme }) => theme.spacing.xxxl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`;

// Form element
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

// Input group (for side-by-side inputs on desktop)
export const InputGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

// Input wrapper with label
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

// Label for inputs
export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

// Input field
export const Input = styled.input<{ $hasError?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  width: 100%;
  scroll-margin: 100px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(255, 68, 88, 0.1),
      ${({ theme }) => theme.shadows.glow};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: calc(${({ theme }) => theme.spacing.sm} + 4px);
    font-size: 16px; /* Prevents zoom on iOS */
    scroll-margin: 120px;
  }
`;

// Select dropdown
export const Select = styled.select<{ $hasError?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  width: 100%;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23fff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.md} center;
  padding-right: ${({ theme }) => theme.spacing.xl};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(255, 68, 88, 0.1),
      ${({ theme }) => theme.shadows.glow};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  option {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    padding-right: ${({ theme }) => theme.spacing.xl};
    font-size: 16px; /* Prevents zoom on iOS */
    scroll-margin: 120px;
  }
`;

// Error message
export const ErrorMessage = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(255, 68, 88, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

// General error message (for submission errors)
export const GeneralError = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 68, 88, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
`;

// Submit button
export const SubmitButton = styled(motion.button)<{ $loading?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  scroll-margin-bottom: 100px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.neon};
    transform: ${({ $loading }) => ($loading ? "none" : "translateY(-2px)")};
  }

  &:active {
    transform: ${({ $loading }) => ($loading ? "none" : "translateY(0)")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: 16px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    scroll-margin-bottom: 150px;
  }
`;

// Loading spinner
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

// Success Modal Components
export const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  padding: ${({ theme }) => theme.spacing.xl};
  backdrop-filter: blur(10px);
`;

export const PopupContent = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(37, 37, 51, 0.98) 0%,
    rgba(26, 26, 36, 0.98) 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  padding: ${({ theme }) => theme.spacing.xxxl};
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.neon};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl};
    max-width: 90vw;
  }
`;

export const PopupEmoji = styled.div`
  font-size: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  animation: ${bounce} 1s ease-in-out;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 60px;
  }
`;

export const PopupTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const PopupMessage = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.xxl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const PopupButton = styled(motion.button)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.glow};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.neon};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

// University Picker Modal Components
export const PickerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(8px);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

export const PickerModal = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(37, 37, 51, 0.98) 0%,
    rgba(26, 26, 36, 0.98) 100%
  );
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: ${({ theme }) => theme.borderRadius.xxl} ${({ theme }) => theme.borderRadius.xxl} 0 0;
    max-height: 70vh;
  }
`;

export const PickerHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
`;

export const PickerTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const PickerCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.1);
  }
`;

export const PickerList = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const PickerOption = styled(motion.button)<{ $selected?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $selected }) =>
    $selected ? 'rgba(255, 68, 88, 0.15)' : 'transparent'};
  border: 1px solid ${({ $selected }) =>
    $selected ? '#FF4458' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: rgba(255, 68, 88, 0.1);
    border-color: #FF4458;
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const PickerCheckmark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputButton = styled.button<{ $hasError?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  width: 100%;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(255, 68, 88, 0.1),
      ${({ theme }) => theme.shadows.glow};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: calc(${({ theme }) => theme.spacing.sm} + 4px);
    font-size: 16px;
    scroll-margin: 120px;
  }
`;

export const InputButtonText = styled.span<{ $placeholder?: boolean }>`
  color: ${({ $placeholder, theme }) =>
    $placeholder ? theme.colors.textTertiary : theme.colors.text};
`;

export const InputButtonIcon = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;

// Toggle Switch Components
export const ToggleContainer = styled(motion.div)`
  display: flex;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 4px;
  margin-bottom: 2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 1.5rem;
  }
`;

export const ToggleOption = styled(motion.button)<{ $active?: boolean }>`
  flex: 1;
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.textSecondary};
  cursor: pointer;
  z-index: 1;
  transition: color ${({ theme }) => theme.transitions.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 16px;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const ToggleSlider = styled(motion.div)`
  position: absolute;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border-radius: ${({ theme }) => theme.borderRadius.full};
  top: 4px;
  left: 4px;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;
