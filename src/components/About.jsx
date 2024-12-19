import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="Experienced Team"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {




  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} mb-5`}>Introduction</p>
        <h2 className={`${styles.sectionSubText} font-bold`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] text-justify max-w-3xl leading-[30px]"
      >
        Whether you are just starting out, need help with your product’s GTM,
        want to train the sales team on effective sales transactions, require
        guidance on how to go about your business, need support to manage your
        organisation’s reputation or the help to build a narrative around the
        good work done or maybe just counter a fake narrative…You have reached
        the right place!
      </motion.p>
      <h2 className="text-5xl font-bold pt-10">
        Sky is the limit -How high you want to fly?
      </h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
      >
        Every business journey begins with an idea and every idea requires a
        clear direction to grow. In today’s fast-paced world, there are
        countless ways to do business, but one thing is certain – every path
        taken will have a financial impact which makes it imperative to have a
        well-thought-out strategy before embarking on this journey. At Macula
        Consultants, we understand that no two ideas are alike or there is only
        one right way of doing a thing. Instead, what we believe in is – that a
        well-planned journey keeping the end goal in mind definitely earns the
        right results. We are here to find the right path for you to tread on
        and grow and while you might have several possibilities before you, we
        will help you to take the right decision.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
