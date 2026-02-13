import { useEffect, useState } from "react";
import {
  CharacterContainer,
  PointingPerson,
  LaughText,
  TextBubble,
} from "./styles";

/**
 * LaughingCharacter Component
 *
 * Renders a 3D animated encouraging character with positive messages
 * Features cheerful emojis and motivational text in comic speech bubbles
 */

export const LaughingCharacter = () => {
  const [visible, setVisible] = useState(false);

  // Delay appearance for dramatic effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <CharacterContainer>
      {/* Thumbs up emoji with animation */}
      <PointingPerson
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        👍
      </PointingPerson>

      {/* Heart eyes face */}
      <PointingPerson
        style={{ left: "45%", top: "35%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.3,
        }}
      >
        😍
      </PointingPerson>

      {/* Encouraging text bubbles */}
      <TextBubble
        style={{ left: "20%", top: "15%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, -10, -10, -40] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <LaughText>You Got This!</LaughText>
      </TextBubble>

      <TextBubble
        style={{ right: "20%", top: "20%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, -10, -10, -40] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
          repeatDelay: 0.5,
        }}
      >
        <LaughText>Fill the form!</LaughText>
      </TextBubble>

      <TextBubble
        style={{ left: "35%", bottom: "20%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, -10, -10, -40] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
          repeatDelay: 0.5,
        }}
      >
        <LaughText style={{ fontSize: "2.5rem" }}>Love awaits! 💝</LaughText>
      </TextBubble>
    </CharacterContainer>
  );
};
