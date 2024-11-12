import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FlipText from "./text/FlipText";

//Backend
import { DiDjango } from "react-icons/di";

import PostgreSQL from "../assets/Icons/postgresql.svg?react";
import Redis from "../assets/Icons/redis.svg?react";
// import Fastify from "../assets/Icons/fastify.svg?react";
import Node from "../assets/Icons/nodejs.svg?react";
import Docker from "../assets/Icons/docker.svg?react";
import NestJS from "../assets/Icons/nestjs.svg?react";
import { SiFastify } from "react-icons/si";

//Frontend
import ReactLogo from "../assets/Icons/react.svg?react";
import AngularLog from "../assets/Icons/angular.svg?react";
import TailwindLogo from "../assets/Icons/tailwindcss.svg?react";
import SassLogo from "../assets/Icons/sass.svg?react";
import TypeScript from "../assets/Icons/typescript.svg?react";

import { TbBrandFramerMotion } from "react-icons/tb";

const backendLeft = [
  { component: <Node width={40} height={40} />, width: -30, height: -80 },
  { component: <Redis width={40} height={40} />, width: 50, height: 100 },
  {
    component: <PostgreSQL width={40} height={40} />,
    width: -200,
    height: -100,
  },
];
const backendRight = [
  { component: <SiFastify size={40} />, width: 100, height: -150 },
  { component: <NestJS width={40} height={40} />, width: -100, height: 150 },
  { component: <Docker width={40} height={40} />, width: 200, height: -200 },
  { component: <DiDjango size={40} />, width: -30, height: -100 },
];

const frontendRight = [
  { component: <SassLogo width={40} height={40} />, width: 30, height: 80 },
  { component: <TbBrandFramerMotion size={40} />, width: -50, height: -100 },
  { component: <TypeScript width={40} height={40} />, width: 200, height: 100 },
];

const frontendLeft = [
  {
    component: <ReactLogo width={40} height={40} />,
    width: -100,
    height: 150,
  },
  {
    component: <AngularLog width={40} height={40} />,
    width: 100,
    height: -150,
  },
  {
    component: <TailwindLogo width={40} height={40} />,
    width: -200,
    height: 200,
  },
];

const TechStack = () => {
  const [isFrontend, setIsFrontend] = useState(true);

  const handleClick = () => {
    setIsFrontend((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <AnimatePresence>
        {isFrontend && (
          <>
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {frontendRight.map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    x: icon.width,
                    y: icon.height,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: [icon.width, icon.width * 1.1, 0],
                    y: [icon.height, icon.height * 1.1, 0],
                    opacity: [1, 1, 0],
                    scale: [1, 1.1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {icon.component}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="absolute"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {frontendLeft.map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    x: icon.width,
                    y: icon.height,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: [icon.width, icon.width * 1.1, 0],
                    y: [icon.height, icon.height * 1.1, 0],
                    opacity: [1, 1, 0],
                    scale: [1, 1.1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {icon.component}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isFrontend && (
          <>
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {backendRight.map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    x: icon.width,
                    y: icon.height,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: [icon.width, icon.width * 1.1, 0],
                    y: [icon.height, icon.height * 1.1, 0],
                    opacity: [1, 1, 0],
                    scale: [1, 1.1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {icon.component}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="absolute"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {backendLeft.map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    x: icon.width,
                    y: icon.height,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: [icon.width, icon.width * 1.1, 0],
                    y: [icon.height, icon.height * 1.1, 0],
                    opacity: [1, 1, 0],
                    scale: [1, 1.1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {icon.component}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="z-20 relative">
        <FlipText
          text={isFrontend ? "Frontend" : "Backend"}
          handleClick={handleClick}
        />
      </div>

      <div className="absolute border-2 border-dashed border-neutral-300 rounded-full w-[140px] h-[140px] " />
      <div className="absolute border-2 border-dashed border-neutral-300 rounded-full w-[290px] h-[290px] " />
      <div className="absolute border-2 border-dashed border-neutral-300 rounded-full w-[440px] h-[440px] " />
    </div>
  );
};

export default TechStack;
