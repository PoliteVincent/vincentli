import "./AuroraHero.css";
import { FiArrowDown } from "react-icons/fi";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import BubbleText from "./text/BubbleText";

import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useSpring,
} from "framer-motion";

// const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const COLORS = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#00FF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#9400D3", // Violet
  "#CE84CF", // Additional color for smooth transition
  "#DD335C", // Another color for smoothness
];

const AuroraHero = () => {
  const color = useMotionValue(COLORS[0]);

  const backgroundAurora = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

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
        {/* <h1 className="name">Hey! I am Vincent Li!</h1> */}
        <BubbleText />

        <p className="intro">
          I am passiante about coding, designing while enjoying the nature
          through cycling and snowboarding.
        </p>
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
          className="more"
        >
          Explore More
          <FiArrowDown className="arrowDown" />
        </motion.button>
      </div>

      <div className="stars">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default AuroraHero;