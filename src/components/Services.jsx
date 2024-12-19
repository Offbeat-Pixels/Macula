import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { serviceData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ experience }) => {
  const navigate = useNavigate();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3
          className="text-white text-[24px] font-bold cursor-pointer"
          onClick={() => navigate(experience.page)}
        >
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {/* {experience.company_name} */}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-white text-2xl font-bold text-center">
          READY TO TAKE THE NEXT STEP?
        </p>
        <p className={`${styles.sectionSubText} md:px-48 text-center pt-4`}>
          Get in touch today to schedule a free consultation. We'd love to learn
          about your business and discuss how we can help you succeed.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center py-14`}>
          Our Services
        </h2>
      </motion.div>

      <div className="mt-0 flex flex-col">
        <VerticalTimeline>
          {serviceData.map((experience, index) => (
            <ServiceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
