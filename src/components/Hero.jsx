import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas"; // Uncomment if used
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  // useEffect(() => {
 
  //   gsap.fromTo(
  //     "#rotating-svg",
  //     {
  //       x: 0,
  //       y: -100,
  //     },
  //     {
  //       x: 0,
  //       y: 450,
  //       // rotate:90,
  //       duration:1,
  //       scrollTrigger:{
  //         trigger: "#rotating-svg",
  //         start: "top 80%",
  //         end: "top 100%",
  //         toggleActions: "restart none none reverse"
  //       }
  //     }
  //   );
  // }, []);

  return (
    <section className={`hero relative w-full h-screen mx-auto`}>
      <div>
        {/* <motion.svg
          id="rotating-svg"
          width="1250"
          height="400"
          viewBox="-260 -60 100 300"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 overflow-x-hidden"
          initial={{ opacity: 1, rotate: 0 }}
          whileFocus={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: 1 }}
        >
          <g clipPath="url(#clip0_105_560)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200 100.671L100 0L0 100.671Z"
            />
            <path
              id="t2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M98.6668 100.671L0 200H200Z"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_105_560"
              x1="20.5"
              y1="16"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ACAAFF" />
              <stop offset="1" stopColor="#C0E8FF" />
            </linearGradient>
            <clipPath id="clip0_105_560">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </motion.svg> */}
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to
            <span className="text-[#915EFF]"> Macula Consultants!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We're here to help <br className="sm:block hidden" />
            your business grow.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // Bounce animation
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
