import {
  BannerContainer,
  BannerText
} from "./styles";

/**
 * MockingBanner Component
 *
 * Displays banner with LaughingMan background image
 */

export const MockingBanner = () => {
  return (
    <BannerContainer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
    >
      <BannerText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Love surprises? 💌 Fill in the form to get your Valentine's gift — and join the waitlist for early access to our upcoming dating app.
      </BannerText>
    </BannerContainer>
  );
};
