import React, { useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

// type Position = {
//   left: number;
//   width: number;
//   opacity: number;
// };
interface Position {
  left: number;
  width: number;
  opacity: number;
}

const MenuTabs = () => {
  return (
    <div className="grid place-content-center bg-transparent m-10 sticky top-5 z-[1000] mix-blend-normal">
      <SlideTabs />
    </div>
  );
};
export default MenuTabs;

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Tech Stacks</Tab>
      <Tab setPosition={setPosition}>Experiences</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Gallery</Tab>
      <Tab setPosition={setPosition}>Contacts</Tab>

      <Dot position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width: width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Dot = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-9 h-7 w-36 rounded-full bg-black md:h-12"
    />
  );
};
