import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { useTextAnimation } from "../Hooks/useTextAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import DroneSvg from "../ui/DroneSvg";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Drone from "./svg/Drone";
import Home from "./svg/Home";
import DroneSVG from "./svg/Drone";
import HomeSVG from "./svg/Home";
import { pds, salesBg, server } from "../assets";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function Sales() {
  // my code
  // useEffect(() => {
  //   const tl =gsap.timeline()
  //   tl.fromTo(
  //     "#drone1",
  //     {
  //       scale: 2.5, // Starting scale value (larger size)
  //       x: -2000,
  //       y: -400,
  //       opacity:0,
  //     },
  //     {
  //       scale: 1, // Target scale value (original size)
  //       x: 0,
  //       y: 400,
  //       opacity:1,
  //       duration: 2,
  //       // motionPath: {
  //       //   path: "M-1225-675C-1085-513-875-310-509-307", // Your custom path
  //       //   align: "self",
  //       //   autoRotate: true,
  //       // },
  //       repeat: 0, // Repeat the animation 2 times
  //       ease: "power1.inOut", // Ease for smoother animation
  //     }
  //   );
  //   tl.fromTo(
  //     "#drone2",
  //     {
  //       scale: 2.5, // Starting scale value (larger size)
  //       x: -2000,
  //       y: 1500,
  //       opacity: 0,
  //     },
  //     {
  //       scale: 1, // Target scale value (original size)
  //       x: 0,
  //       y: 1000,
  //       duration: 2,
  //       opacity:1,
  //     }
  //   );
  //   tl.fromTo(
  //     "#drone3",
  //     {
  //       scale: 2.5, // Starting scale value (larger size)
  //       x: 2000,
  //       y: 1500,
  //       opacity:0,
  //     },
  //     {
  //       scale: 1, // Target scale value (original size)
  //       x: 1200,
  //       y: 400,
  //       duration: 2,
  //       opacity:1,
  //     }
  //   );

  //   tl.fromTo(
  //     "#drone4",
  //     {
  //       scale: 2.5, // Starting scale value (larger size)
  //       x: 2000,
  //       y: 1500,
  //       opacity:0,
  //     },
  //     {
  //       scale: 1, // Target scale value (original size)
  //       x: 1200,
  //       y: 1000,
  //       duration: 2,
  //       opacity:1,
  //     }
  //   );
  // }, []);

  // Refine GPT code


useEffect(() => {
  const tl = gsap.timeline({
   scrollTrigger: {
      trigger: "#para2", // The element that triggers the entire animation timeline (adjust to your layout)
      start: "top 90%", // Trigger when the top of the element is at 80% of the viewport height
      end: "top 20%", // End when the top of the element is at 30% of the viewport height
      scrub: 3, // Smoothly scrub the animation as the user scrolls
      // markers: true, // Optional: Show markers for debugging
    },
  });

  const droneAnimations = [
    {
      id: "#drone1",
      from: { scale: 2.5, x: -2000, y: -400, opacity: 0 },
      to: {
        scale: 1,
        x: 0,
        y: 400,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      },
    },
    {
      id: "#drone2",
      from: { scale: 2.5, x: -2000, y: 1500, opacity: 0 },
      to: { scale: 1, x: 0, y: 1000, opacity: 1, duration: 2 },
    },
    {
      id: "#drone3",
      from: { scale: 2.5, x: 2000, y: 1500, opacity: 0 },
      to: { scale: 1, x: 1200, y: 400, opacity: 1, duration: 2 },
    },
    {
      id: "#drone4",
      from: { scale: 2.5, x: 2000, y: 1500, opacity: 0 },
      to: { scale: 1, x: 1200, y: 1000, opacity: 1, duration: 2 },
    },
  ];

  // Apply the same scroll trigger for all animations in the timeline
  droneAnimations.forEach(({ id, from, to }) => {
    tl.fromTo(id, from, to);
  });
}, []);


  // Refine GPT code
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   const animateDrone = (id, from, to) => {
  //     tl.fromTo(
  //       id,
  //       { ...from },
  //       { ...to }
  //     );
  //   };

  //   animateDrone("#drone1",
  //     { scale: 2.5, x: -2000, y: -400, opacity: 0 },
  //     { scale: 1, x: 0, y: 400, opacity: 1, duration: 2, ease: "power1.inOut" }
  //   );

  //   animateDrone("#drone2",
  //     { scale: 2.5, x: -2000, y: 1500, opacity: 0 },
  //     { scale: 1, x: 0, y: 1000, opacity: 1, duration: 2 }
  //   );

  //   animateDrone("#drone3",
  //     { scale: 2.5, x: 2000, y: 1500, opacity: 0 },
  //     { scale: 1, x: 1200, y: 400, opacity: 1, duration: 2 }
  //   );

  //   animateDrone("#drone4",
  //     { scale: 2.5, x: 2000, y: 1500, opacity: 0 },
  //     { scale: 1, x: 1200, y: 1000, opacity: 1, duration: 2 }
  //   );
  // }, []);

  return (
    <div className=" bg-primary text-secondary ">
      <h2 className={`${styles.sectionHeadText} text-center pt-20`}>Sales</h2>

      <div>
        <ul className="   text-justify mx-10 md:ml-20">
          <li id="para1" className="md:flex h-[80vh]  ">
            <div className="md:w-1/2  pt-20  text-xl">
              {/* <p className={styles.heroSubText}>01</p> */}
              {/* <p className={styles.heroSubText}> */}
              <p className="text-white text-[24px] md:text-[27px] ml-2  font-bold ">
                Perimeter intrusion detection system
              </p>

              <motion.p
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="text-base  text-justify p-2"
              >
                PIDS protects your property by monitoring and detecting unwanted
                access or breaches throughout the perimeter. It uses advanced
                technology like sensors, cameras, and alarms to ensure real-time
                alerts and rapid response which is ideal for businesses or
                residential properties, PIDS adds an extra layer of safety.
              </motion.p>
            </div>

            <img
              src={pds}
              alt="image of Perimeter intrusion detection system"
            />
          </li>
          <li id="para2" className=" md:flex mt-20 h-[80vh]   ">
            <div className="md:w-1/3 pt-10 text-xl">
              {/* <p className={styles.heroSubText}>02</p> */}
              {/* <p className={styles.heroSubText}> */}
              <p className="text-white text-[20px] md:text-[27px]  ml-2 uppercase font-bold ">
                Drone
              </p>
              <p className="text-base  p-2">
                Our drone services offer aerial solutions for a variety of
                applications. We ensure safe and efficient operations, which
                make your projects easier and more effective. See the world in a
                new light!
              </p>
            </div>
            <div className="mx-28 md:ml-auto w-1/3 md:w-1/2  ">
              <DroneSVG />
            </div>
          </li>
          <li id="para3" className=" md:flex mt-40 h-[80vh] ">
            <div className="md:w-1/2  text-xl">
              {/* <p className={styles.heroSubText}>03</p> */}
              <p className="text-white text-[27px] ml-2 uppercase font-bold ">
                Anti-Drone
              </p>
              <p className="text-base p-2">
                Our Anti-Drone service provides protection against unauthorized
                drone activities. We use advanced technology to detect and
                neutralize drones that pose a threat to your safety and privacy.
                Trust us to safeguard your space from potential aerial risks.
              </p>
            </div>
            <img src={server} alt="image of drone detection system" />
          </li>
          scv
        </ul>
      </div>
    </div>
  );
}
