import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const ChartContainer = styled(motion.div)`
  width: 100%;
  padding: 2rem;
  background: rgba(17, 24, 39, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const ChartTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const ChartSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  margin-bottom: 2rem;
`;

export const CountryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CountryItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(31, 41, 55, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: rgba(31, 41, 55, 0.8);
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

export const Rank = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  min-width: 40px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.md};
    min-width: 30px;
  }
`;

export const CountryInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CountryName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

export const Bar = styled(motion.div)<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border-radius: ${({ theme }) => theme.borderRadius.full};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

export const Count = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  min-width: 60px;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.md};
    min-width: 50px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  gap: 1rem;
`;

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 68, 88, 0.1);
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  gap: 0.5rem;
`;

export const EmptyEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

export const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  max-width: 400px;
  line-height: 1.6;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  gap: 0.5rem;
`;

export const ErrorEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

export const ErrorTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  max-width: 400px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const RetryButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;
