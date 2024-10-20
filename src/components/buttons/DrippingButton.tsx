// import React from "react";
// import { motion } from "framer-motion";

// const DrippingButton = () => {
//   // Animation variants for the drips
//   const dripVariants = {
//     initial: {
//       y: -5,
//       height: "9px",
//       opacity: 1,
//     },
//     animate: {
//       height: ["9px", "40px", "5px"], // Drips down and comes back
//       // transition: {
//       //   duration: 2, // Animation duration
//       //   ease: "easeInOut",
//       //   repeat: Infinity,
//       //   repeatDelay: 0.5,
//       // },
//     },
//   };

//   return (
//     <div className="relative inline-block pb-20">
//       {/* Button */}
//       <motion.button
//         className="rounded-lg bg-indigo-500 text-white px-6 py-3 font-semibold"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Wet Paint Button
//       </motion.button>

//       {/* Drip 1 */}
//       <motion.div
//         className="absolute w-2 h-8 bg-indigo-500 rounded-full"
//         style={{ left: "30%" }}
//         variants={dripVariants}
//         initial="initial"
//         animate="animate"
//       />
//       {/* Drip 2 */}
//       <motion.div
//         className="absolute w-2 h-10 bg-indigo-500 rounded-full"
//         style={{ left: "50%" }}
//         variants={dripVariants}
//         initial="initial"
//         animate="animate"
//         transition={{ delay: 0.5 }} // Slight delay for staggered effect
//       />
//       {/* Drip 3 */}
//       <motion.div
//         className="absolute w-2 h-12 bg-indigo-500 rounded-full"
//         style={{ left: "70%" }}
//         variants={dripVariants}
//         initial="initial"
//         animate="animate"
//         transition={{ delay: 1 }} // Longer delay for staggered effect
//       />
//     </div>
//   );
// };

// export default DrippingButton;
