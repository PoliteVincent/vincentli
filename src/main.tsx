import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  // createBrowserRouter Not good for deployment in Github/static,
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import "./index.css";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

//Importing custome elements here
import ErrorPage from "./components/ErrorPage.tsx";
import App from "./components/App.tsx";
import AuroraHero from "./components/AuroraHero.tsx";
import Me from "./components/Me.tsx";

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duraction: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <PageTransition>
//         <Welcome />
//       </PageTransition>
//     ),
//     errorElement: (
//       <PageTransition>
//         <ErrorPage />
//       </PageTransition>
//     ),
//   },
//   {
//     path: "/vli",
//     element: (
//       <PageTransition>
//         <App />
//       </PageTransition>
//     ),
//     errorElement: (
//       <PageTransition>
//         <ErrorPage />
//       </PageTransition>
//     ),
//   },
//   {
//     path: "/1",
//     element: <Me />,
//   },
// ]);
const router = createHashRouter([
  {
    path: "/",
    element: (
      <PageTransition>
        <AuroraHero />
      </PageTransition>
    ),
    errorElement: (
      <PageTransition>
        <ErrorPage />
      </PageTransition>
    ),
  },
  {
    path: "/vli",
    element: (
      <PageTransition>
        <App />
      </PageTransition>
    ),
    errorElement: (
      <PageTransition>
        <ErrorPage />
      </PageTransition>
    ),
  },
  {
    path: "/1",
    element: (
      <PageTransition>
        <Me />
      </PageTransition>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
