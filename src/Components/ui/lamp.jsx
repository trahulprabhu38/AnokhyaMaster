"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./lamp.css";

export const LampContainer = ({ children, className }) => {
  return (
    <div className="upp">
      <div
        className={cn(
          "relative flex min-h-screen flex-col mt-420 overflow-hidden bg-slate-950 w-full rounded-md z-0 ",
          className
        )}
      >
        <div className="relative flex w-full flex-1 scale-y-1 mt-230 justify-center isolate z-0 ">
          <motion.div
            initial={{ opacity: 0.5, width: "1rem" }}
            whileInView={{ opacity: 1, width: "60rem" }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "1rem" }}
            whileInView={{ opacity: 1, width: "60rem" }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-348 w-full translate-y-16 scale-x-150 scale-y-[-10] bg-slate-950 blur-2xl"></div>{" "}
          {/* Adjusted translate-y here */}
          <div className="absolute top-1/2 z-50 h-548 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-150 h-536 w-[48rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
          <motion.div
            initial={{ width: "1rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[7rem] rounded-full bg-cyan-400 blur-2xl" // Adjusted translate-y here
          ></motion.div>
          <motion.div
            initial={{ width: "1rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[18rem] bg-cyan-400 " // Adjusted translate-y here
          ></motion.div>
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[15rem] bg-slate-950 ">
            {" "}
            {/* Adjusted translate-y here */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
