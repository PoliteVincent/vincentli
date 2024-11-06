import { motion, AnimatePresence } from "framer-motion";

type FlipTextProps = {
  text: string;
  handleClick: () => void;
};

const FlipText = ({ text, handleClick }: FlipTextProps) => {
  return (
    <div
      className="cursor-pointer text-4xl font-semibold"
      onClick={handleClick}
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-black dark:to-white"
          style={{
            backfaceVisibility: "hidden",
            display: "inline-block",
            transformOrigin: "50% 50%",
          }}
          initial={{ rotateX: -120, opacity: 0 }} // Start from -90 degrees
          animate={{ rotateX: 0, opacity: 1 }} // Animate to 0 degrees
          exit={{ rotateX: 120, opacity: 0 }} // Exit by rotating to 90 degrees
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default FlipText;
