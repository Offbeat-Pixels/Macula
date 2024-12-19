import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  s1,
  s2,
  s3,
  consultant,
  pm,
  sales,
  bm,
  orm,
  cm,
  contentStrategy,
  contentManagement,
  em,
  cem,
  mr,
  sh,
  pa
} from "../assets";
import Consulting from "../innerPages/Consulting"
import Sales from "../innerPages/Liaison"
import Management from "../innerPages/Management"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Experienced Team",
    icon: web,
  },
  {
    title: "PERSONALIZED SOLUTIONS",
    icon: mobile,
  },
  {
    title: "PRACTICAL ADVICE",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const serviceData = [
  {
    title: "BUSINESS CONSULTING",
    company_name: "Starbucks",
    page: "/consulting", // Correct path
    icon: consultant,
    iconBg: "#ffff",
    date: "March 2020 - April 2021",
    points: [
      "From streamlining processes to reducing costs, we'll help you run your business more efficiently.",
    ],
  },
  {
    title: "PERCEPTION MANAGEMENT",
    company_name: "Tesla",
    page: "/management", // Correct path
    icon: pm,
    iconBg: "#ffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "We'll help you create a clear plan for growth and success, with achievable steps that fit your vision.",
    ],
  },
  {
    title: "Technology Solutions",
    company_name: "Shopify",
    page: "/sales", // Correct path
    icon: sales,
    iconBg: "white",
    date: "Jan 2022 - Jan 2023",
    points: [
      "We'll work with you to develop effective strategies that reach your target audience and grow your customer base.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const managementData = [
  {
    description:
      "Creating and maintaining a positive brand image through strategic communication and marketing efforts. By focusing on what makes your brand different, we help you build trust and loyalty.",
    name: "Brand Management",

    image: bm,
  },
  {
    description:
      "Monitoring and influencing online content to improve a brand's digital presence. We help you stay aware of what is being said about your brand across various platforms. Our team works to promote positive content while addressing any negative feedback.",
    name: "Online Reputation Management",

    image: orm,
  },
  {
    description:
      "Addressing and mitigating negative events or publicity that could harm an organization's reputation. With clear communication and proactive approach, we ensure that your firm can tackle crisis smoothly.",
    name: "Crisis Management",
    image: cm,
  },
  {
    description:
      "Developing and distributing content that aligns with desired perceptions and brand values.",
    name: "Content Strategy",
    image: contentStrategy,
  },
  {
    description:
      "Engaging with audiences on social platforms to shape brand perception.",
    name: "Social Media Management",
    image: contentManagement,
  },
  {
    description:
      "Fostering a positive internal perception to improve workplace culture and productivity.",
    name: "Employee Engagement",
    image: em,
  },
  {
    description:
      "Ensuring positive interactions with customers to build trust and loyalty.",
    name: "Customer Experience Management",
    image: cem,
  },
  {
    description:
      "Managing relationships with media outlets to influence public perception.",
    name: "Media Relations",
    image: mr,
  },
  {
    description:
      "Tailoring messages for different stakeholder groups to maintain positive relationships.",
    name: "Stakeholder Communication",
    image: sh,
  },
  {
    description:
      "Conducting research to understand current perceptions and identify areas for improvement.",
    name: "Perception Analysis",
    image: pa,
  },
];


const projects = [
  {
    name: "Experienced Team",
    description:
      "Our consultants have a proven track record of helping businesses succeed.",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    // ],
    image: s1,
    source_code_link: "https://github.com/",
  },
  {
    name: "PERSONALIZED SOLUTIONS",
    description:
      "We tailor our services to meet your unique needs & challenges.",
    
    image: s2,
    source_code_link: "https://github.com/",
  },
  {
    name: "PRACTICAL ADVICE",
    description: "We focus on actionable steps that deliver real results.",
    image: s3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies,managementData, serviceData, testimonials, projects };
