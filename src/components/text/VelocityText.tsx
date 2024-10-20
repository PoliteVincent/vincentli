import styles from "./VelocityText.module.css";
import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useVelocity,
  useScroll,
} from "framer-motion";

type VelocityTextPros = {
  targetRef: React.RefObject<HTMLElement>;
};

const VelocityText = ({ targetRef }: VelocityTextPros) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.4 start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  // Want to add skewness based on the velocity. Use useTransform to transform it
  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );

  const skewX = useSpring(skewXRaw, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div className={styles.vDiv}>
      <motion.p
        style={{
          skewX,
          x,
        }}
        className={styles.vt}
      >
        PASSIONATE DEVELOPER.👨‍💻PROBLEM SOLVER.🤗 CREATIVE THINKER.🤠 PASSIONATE
        DEVELOPER.👨‍💻PROBLEM SOLVER.🤗 CREATIVE THINKER.🤠
      </motion.p>
    </div>
  );
};
export default VelocityText;
