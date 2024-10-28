import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = e;

      // Calculate the change in position to determine speed
      const deltaX = clientX - lastPosition.x;
      const deltaY = clientY - lastPosition.y;

      // Simple rotation based on the movement
      const newRotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(newRotation);

      setMousePosition({ x: clientX, y: clientY });
      setLastPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastPosition]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none", // Ensure it doesn't interfere with other elements
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(${rotation}deg)`,
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotate: rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 50, // Adjust for a smooth following effect
      }}
    >
      {/* Bubble styling */}
      <div
        style={{
          padding: "10px 20px",
          background: "gray",
          color: "white",
          borderRadius: "20px",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Health 2.0, 100% Proximity
      </div>
    </motion.div>
  );
}
