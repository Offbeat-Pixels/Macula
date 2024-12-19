import { useEffect } from "react";
import { gsap } from "gsap";
// import { useTextAnimation } from "../Hooks/useTextAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { GroupA1, GroupA2, GroupA3, GroupA4 } from "../assets";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Consulting() {
  const stepsData = [
    {
      step: "01",
      title: "Preliminary Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      icon: "⚙️", // Replace with your actual icon
    },
    {
      step: "02",
      title: "Stakeholder Engagement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      icon: "👥", // Replace with your actual icon
    },
    {
      step: "03",
      title: "Data Evaluation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      icon: "📊", // Replace with your actual icon
    },
    {
      step: "04",
      title: "Communication of Findings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      icon: "💬", // Replace with your actual icon
    },
  ];

  return (
    <div className="pt-20 bg-primary ">
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Business Consulting
      </h2>

      <div className="flex flex-col  gap-20  sm:mx-60 p-8 bg-primary ">
        {/* Step 1 */}
        <div className="flex items-center flex-col sm:flex-row gap-6 rounded-lg ">
          <div className=" flex justify-center sm:justify-end">
            <img
              src={GroupA1}
              alt="Start-up Incubation"
              className="rounded-full w-60 h-48 overflow-visible"
            />
          </div>
          <div className="w-full  border-2 border-dashed p-4 rounded-2xl ">
            <p className="text-2xl font-bold">Start-up Incubation</p>
            <p className="mt-2 text-sm text-justify leading-relaxed">
              Our start-up incubation relies on turning great ideas into
              profitable enterprises. From developing your ideas to growing your
              business, we’re here to help at every step of the way. Our goal is
              to make your journey easier and faster.
            </p>
          </div>
        </div>
        <hr className="rotate-90 w-[12.7rem] m-auto border-t-2 border-dashed border-white " />

        {/* Step 2 */}
        <div className="flex items-center flex-col sm:flex-row gap-6 rounded-lg ">
          <div className="w-full  border-2 border-dashed p-4 rounded-2xl ">
            <p className="text-2xl font-bold p-1">GTM Strategy</p>
            <p className="mt-2 text-sm text-justify leading-relaxed">
              A well-crafted GTM strategy is the foundation for a successful
              product or service launch. We help you identify the right
              audience, highlight what makes your product special, and plan how
              to reach the market effectively.
            </p>
          </div>
          <div className=" flex justify-center sm:justify-start ">
            <img
              src={GroupA2}
              alt="GTM Strategy"
              className="rounded-full w-60 h-48 overflow-visible"
            />
          </div>
        </div>
        <hr className=" rotate-90 w-[12rem] mb-4 mx-80 border-t-2 border-dashed border-white " />
        {/* Step 3 */}
        <div className="flex  items-center flex-col sm:flex-row gap-6 rounded-lg ">
          <div className="flex justify-center sm:justify-start ">
            <img
              src={GroupA3}
              alt="Quality as a Service"
              className="rounded-full w-60 h-48 overflow-visible"
            />
          </div>
          <div className="w-full border-2 border-dashed p-4 rounded-2xl ">
            <p className="text-2xl font-bold p-1">Quality as a Service</p>
            <p className="mt-2 text-sm text-justify leading-relaxed">
              QaaS is our approach to assist businesses in achieving excellence
              at every aspect of their operations. We offer bespoke solutions to
              ensure that your processes, goods, and services adhere to the
              highest standards. We include quality into every step of the
              process, from optimizing operations to increasing customer
              satisfaction.
            </p>
          </div>
        </div>
        <hr className=" rotate-90 w-[10rem] m-auto border-t-2 border-dashed border-white " />
        {/* Step 4 */}
        <div className="flex items-center  flex-col sm:flex-row gap-6 rounded-lg ">
          <div className="w-full  border-2 border-dashed p-4 rounded-2xl ">
            <p className="text-2xl font-bold p-1">Process Consulting</p>
            <p className="mt-2 text-sm  text-justify leading-relaxed">
              Our Process Consulting service supports firms in identifying
              inefficiencies and streamlining their procedures for better
              results. To obtain the best outcomes, we look at present
              operations, make suggestions for improvements and oversee
              implementation. We create processes that will help you to work
              smarter, not harder.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start ">
            <img
              src={GroupA4}
              alt="Process Consulting"
              className="rounded-full w-60 h-48 overflow-visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
