import React, { useRef } from "react";
import uncWellImage from "../assets//unc_well.jpg";
import techImage from "../assets//tech.jpg";
import codingImage from "../assets//coding.jpg";
import contactImage from "../assets/contact.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

// Custome component here
import Experiences from "./Experiences";
import { ProjectsList } from "./ProjectsList";
import TechStack from "./TechStack";

const MainContent = () => {
  return (
    <div className="bg-white">
      <ParallaxContent
        imgUrl={uncWellImage}
        subheading="Experiences"
        heading="My experience"
      >
        <Experiences />
      </ParallaxContent>
      <ParallaxContent
        imgUrl={techImage}
        subheading="Tech Stacks"
        heading="Constanly expanding"
      >
        <TechStack />
      </ParallaxContent>
      <ParallaxContent
        imgUrl={codingImage}
        subheading="Projects"
        heading="Working on more"
      >
        <ProjectsList />
      </ParallaxContent>
      {/* <ParallaxContent
        imgUrl={snowImage}
        subheading="Gallery"
        heading="Enjoy the Beauty of Nature"
      >
        haha
      </ParallaxContent> */}
      <ParallaxContent
        imgUrl={contactImage}
        subheading="Contact"
        heading="Stay Connected"
      >
        Placeholder
      </ParallaxContent>
    </div>
  );
};
export default MainContent;

type ParallaxContentProps = {
  imgUrl: String;
  subheading: String;
  heading: String;
  children: React.ReactNode;
};

const IMG_PADDING = 50;

const ParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: ParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayText heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: String }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale: scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl mt-10"
    >
      <motion.div
        style={{
          opacity: opacity,
        }}
        className="absolute inset-0 bg-neutral-950/70"
      />
    </motion.div>
  );
};

const OverlayText = ({
  heading,
  subheading,
}: {
  heading: String;
  subheading: String;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{
        y: y,
        opacity: opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
