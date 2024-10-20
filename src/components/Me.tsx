import VelocityText from "./text/VelocityText";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./text/VelocityText.module.css";
const Me = () => {
  const targetRef = useRef(null);

  return (
    <>
      <div ref={targetRef} className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Nice To Meet You!{" "}
            </div>
          </div>
          <div className="text-start">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hey, I'm Vincent 👋
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a passionate software engineering student from Chapel Hill,
              excited about building software and crafting impactful solutions
              that help people achieve their goals..
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Available for Internship opportunities
              </button>
            </div>
          </div>
        </div>
        <VelocityText targetRef={targetRef} />
      </div>
    </>
  );
};
export default Me;
