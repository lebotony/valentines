import {
  BannerContainer,
  ComicText,
  SubText,
  TextContainer,
  TopText,
} from "./styles";

/**
 * MockingBanner Component
 *
 * Displays modern, encouraging banner
 * Features gradient text and elegant animations
 */

export const MockingBanner = () => {
  return (
    <BannerContainer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
    >
      <TextContainer>
        <TopText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Forget about the Epstein Files 📁, did you get a valentines gift 🎁?
        </TopText>

        <ComicText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          ✨ Don't Worry, There's Still Hope! ✨
        </ComicText>

        <SubText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          Fill in the form below to receive your special Valentine's surprise 💝
        </SubText>
      </TextContainer>
    </BannerContainer>
  );
};
