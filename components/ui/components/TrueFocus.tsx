import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string | string[];
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus = ({
  sentence = "Sk juned",
  separator = " ",
  manualMode = false,
  blurAmount = 2,
  // borderColor = "#0F172A",
  // glowColor = "#16A34A",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  // Handle both string and string[] inputs
  const sentences = Array.isArray(sentence) ? sentence : [sentence];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const words = sentences[currentSentenceIndex].split(separator);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          // Move to next word in current sentence
          if (prev + 1 < words.length) {
            return prev + 1;
          } else {
            // If at end of current sentence, move to next sentence
            setCurrentSentenceIndex(
              (sentIndex) => (sentIndex + 1) % sentences.length
            );
            return 0; // Reset word index
          }
        });
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [
    manualMode,
    animationDuration,
    pauseBetweenAnimations,
    words.length,
    sentences.length,
  ]);

  // Reset current index when sentence changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentSentenceIndex]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className='focus-container'
      ref={containerRef}
      style={
        {
          // '--border-color': borderColor,
          // "--glow-color": glowColor,
        } as React.CSSProperties
      }>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`focus-word ${manualMode ? "manual" : ""} ${
              isActive && !manualMode ? "active" : ""
            }`}
            style={
              {
                // Dynamic inline styles needed for blur animation based on component props
                filter: manualMode
                  ? isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`
                  : isActive
                  ? `blur(0px)`
                  : `blur(${blurAmount}px)`,
                // Apply text color based on active state
                color: isActive ? "#9a236a" : "#475569",

                transition: `filter ${animationDuration}s ease, color ${animationDuration}s ease`,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            {word}
          </span>
        );
      })}

      <motion.div
        className='focus-frame'
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}>
        <span className='corner top-left'></span>
        <span className='corner top-right'></span>
        <span className='corner bottom-left'></span>
        <span className='corner bottom-right'></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
