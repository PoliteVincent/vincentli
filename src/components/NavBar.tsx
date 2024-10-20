// import { useState } from "react";

// const NavLinks = [
//   { title: "About", href: "/" },
//   { title: "Projects", href: "/" },
//   { title: "Gallery", href: "/" },
//   { title: "Contact", href: "/" },
// ];

// const NavBar = () => {
//   const [open, setOpen] = useState(false);

//   const toggleMenu = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };
//   return (
//     <header>
//       <nav className="flex justify-between items-center py-8 lg: py-4 px-2">
//         <div className="flex items-center gap-[1ch]">
//           <div className="w-5 h-5 bg-yellow-400 rounded-full" />
//           <span className="text-sm font-semibold tracking-widest">VvV</span>
//         </div>
//         <div className="lg:flex hidden gap-12 text-md text-zinc-400">
//             <Link href="#" className="text-white font-medium">
//                 <AnimatedLink link={"Home"} />
//             </Link>
//             <AnimatedLink link={"Home"} />
//             <AnimatedLink link={"Home"} />
//         </div>
//         <div className="cursor-pointer lg:hidden text-md text-white">
//             Menu
//         </div>
//       </nav>
//       <div className="fixed left-0 top-0 w-full h-screen bg-black text-white "
//     </header>
//   );
// };
// export default NavBar;

import { Link } from "react-router-dom";
import { useState } from "react";
// import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "What we do", href: "/" },
  { title: "How it works", href: "/" },
  { title: "Case studies", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen: boolean) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <span className="text-sm font-semibold tracking-widest">
            PORTFOLIO
          </span>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-zinc-400">
          <Link to="#" className="text-black font-medium">
            {/* <AnimatedLink title={"Home"} /> */}
            {"Home"}
          </Link>
          <Link to={"/projects"}>
            {/* <AnimatedLink title={"Projects"} /> */}
            {"Projects"}
          </Link>
          {/* <AnimatedLink title={"Contact"} /> */}
          {"Contact"}
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

type MobileNavLink = {
  title: string;
  href: string;
};
const MobileNavLink = ({ title, href }: MobileNavLink) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link to={href}>{title}</Link>
    </motion.div>
  );
};
