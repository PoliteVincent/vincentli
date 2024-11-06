import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import snowImage from "../assets/snow.jpg";
import { useRef } from "react";
export const ProjectsList = () => {
  return (
    <section className="bg-white p-4 md:p-9 overflow-x-hidden">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="UNC CSXL Web"
          subheading={"A forum ground for students to chat and communicate"}
          imgUrl={snowImage}
          href={"#"}
        />
        <Link
          heading="Online Chat Ground"
          subheading={
            "Intergrated platform including direct messaging, news sharing and discussion"
          }
          imgUrl={snowImage}
          href={"#"}
        />
        <Link
          heading="Personal Website"
          subheading={"The website you are browsing now~~"}
          imgUrl={snowImage}
          href={"#"}
        />
        <Link
          heading="UNC Coaching Web"
          subheading={
            "A frontend website design for advertising purposes for the UNC based Coaching Club."
          }
          imgUrl={snowImage}
          href={"#"}
        />
      </div>
    </section>
  );
};

const Link = ({
  heading,
  subheading,
  imgUrl,
  href,
}: {
  heading: string;
  subheading: string;
  imgUrl: string;
  href: string;
}) => {
  const targetRef = useRef<HTMLAnchorElement>(null);

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);

  const x = useSpring(xRaw);
  const y = useSpring(yRaw);

  const top = useTransform(y, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(x, [0.5, -0.5], ["72%", "82%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = targetRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPercent = mouseX / width - 0.5;
      const yPercent = mouseY / height - 0.5;

      x.set(xPercent);
      y.set(yPercent);
    }
  };

  return (
    <motion.a
      ref={targetRef}
      initial="initial"
      onMouseMove={handleMouseMove}
      whileHover="whileHover"
      href={href}
      className="group relative flex items-center justify-between text-black border-b-2 border-neutral-400 py-4 transition-colors duration-500 ease-in-out hover:border-black/80 md:py-8 mix-blend-normal"
    >
      <div>
        <motion.span
          variants={{
            initial: {
              x: 0,
            },
            whileHover: {
              x: -16,
            },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.05,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-400 transition-colors duration-600 ease-in-out md:text-6xl group-hover:text-black/80"
        >
          {heading.split("").map((letter, idx) => (
            <motion.span
              variants={{
                initial: {
                  x: 0,
                },
                whileHover: {
                  x: 16,
                },
              }}
              transition={{
                type: "spring",
              }}
              className="inline-block"
              key={idx}
            >
              {letter === " " ? "\u00A0" : letter}{" "}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-neutral-400 transition-colors duration-500 ease-in-out group-hover:text-black/80">
          {subheading}
        </span>
      </div>

      <motion.img
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: {
            scale: 1,
            rotate: "12.5deg",
          },
        }}
        style={{
          top: top,
          left: left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
        }}
        src={imgUrl}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      ></motion.img>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
        }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-black" />
      </motion.div>
    </motion.a>
  );
};
