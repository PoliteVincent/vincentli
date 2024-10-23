import "./AuroraHero.css";
import { FiArrowDown } from "react-icons/fi";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

import BubbleText from "./text/BubbleText";
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
// const COLORS = [
//   "#FF0000", // Red
//   "#FF7F00", // Orange
//   "#FFFF00", // Yellow
//   "#00FF00", // Green
//   "#0000FF", // Blue
//   "#4B0082", // Indigo
//   "#9400D3", // Violet
//   "#CE84CF", // Additional color for smooth transition
//   "#DD335C", // Another color for smoothness
// ];

const AuroraHero = () => {
  const color = useMotionValue(COLORS[0]);

  const backgroundAurora = useMotionTemplate`radial-gradient(125% 125% at 80% 0%, #fafafa 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/vli");
  };

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section
      style={{
        backgroundImage: backgroundAurora,
      }}
      className="aurora-section"
    >
      <div className="heading">
        <span className="note">Nice to meet you!</span>
        <BubbleText />
        <motion.button
          whileTap={{
            scale: 0.985,
          }}
          whileHover={{
            scale: 1.015,
          }}
          style={{
            border: border,
            boxShadow: boxShadow,
          }}
          onClick={handleNavigation}
          className="more"
        >
          Explore More
          <FiArrowDown className="arrowDown" />
        </motion.button>
      </div>

      {/* <div className="stars">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </motion.section>
  );
};
export default AuroraHero;
