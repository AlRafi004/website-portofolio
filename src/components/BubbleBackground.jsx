import { useEffect, useState } from "react";

export const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();
    const handleResize = () => generateBubbles();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor(
      (window.innerWidth * window.innerHeight) / 7000
    );
    const newBubbles = [];
    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 30 + 10,
        x: Math.random() * 100,
        y: 100 + Math.random() * 10, // start below the screen
        opacity: Math.random() * 0.4 + 0.3,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 8,
      });
    }
    setBubbles(newBubbles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.x + "%",
            bottom: "-" + bubble.size + "px",
            opacity: bubble.opacity,
            animationDuration: bubble.duration + "s",
            animationDelay: bubble.delay + "s",
          }}
        />
      ))}
    </div>
  );
};
