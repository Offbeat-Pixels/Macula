import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { managementData } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";



const ManagementCard = ({ data }) => {
  // const navigate = useNavigate(); 

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: "#ffff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={data.image}
            alt={data.name}
            className="w-[60%] h-[60%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3
          className="text-white text-[24px] font-bold "
         
        >
          {data.name}
        </h3>
        <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
          {data.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Management = () => {
  //  useEffect(() => {
  //    window.scrollTo(0, 0); 
  //  }, []);
  return (
    <>
     
      <div  >
         <h2 className={`${styles.sectionHeadText} text-center`}>
          Perception Management
        </h2>
      </div>

      <div className=" flex flex-col">
        <VerticalTimeline>
          {managementData.map((data, index) => (
            <ManagementCard key={`management-${index}`} data={data} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Management, "management");
