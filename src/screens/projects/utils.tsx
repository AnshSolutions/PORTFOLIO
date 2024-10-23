import {BiLogoPostgresql} from 'react-icons/bi';
import {FaPython,FaGoogle, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiStripe, SiTailwindcss,SiExpress} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import plant from 'assets/images/Plant.jpeg';
import path from 'assets/images/path.jpg';
import {
  SiAmazonaws,
  SiApollographql,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiOpencv,
  SiHtml5,
  SiCss3,

} from 'react-icons/si';

import btfLofo from 'assets/images/btf-logo.png';
import cfLofo from 'assets/images/cfLogo.png';
import s2eLofo from 'assets/images/s2e-logo.webp';
import smartFoodLogo from 'assets/images/smart-food.png';
import viktreLofo from 'assets/images/viktre-logo.jpeg';
import weatherAppLofo from 'assets/images/weather-app.png';
import porfolioLogo from '../../../public/logo.svg';
import study from 'assets/images/studyNotion.jpg'; // adjust the path based on your folder structure
import m from 'assets/images/mern.jpg';

import apwriteIcon from 'assets/images/Apwrite.png';
import e from 'assets/images/ecommerce.png';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}



export const customProjects: Project[] = [
  {
    name: 'studyNotion',
    // url: 'https://smart-food.enikosoft.com/',
    description: `StudyNotion is a comprehensive ed-tech platform designed to enable users to create, consume, and rate educational content. Built using the MERN stack (MongoDB, Express, React, Node), it provides a seamless and interactive learning experience for students while giving instructors a platform to showcase their expertise. The application supports full CRUD operations, user authentication, and media management, all while delivering a responsive and scalable performance. Additional features include course management, payment integration, and cloud-based media handling using Cloudinary. Future enhancements include gamification, personalized learning paths, and machine learning-powered recommendations.`,
    img: study,
    stack: [
      <SiMongodb key="mongodb" color="#47A248" className="text-[28px]" />,
      <SiExpress key="express" color="#818283" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#2F75C0" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    
    git: 'https://github.com',
  },
  {
    name: 'Plant Disease Detection',
    description: `Developed a plant disease detection system using machine learning, achieving over 90% accuracy in identifying various plant diseases. The system includes an efficient solution utilizing OpenCV with Python to streamline data extraction from images, reducing manual review time by over 50%. Additionally, it features a user-friendly interface built with HTML and CSS, allowing users to easily upload images and receive real-time diagnosis.`,
    img: plant,
    stack: [
      <FaPython key="python" color="#FFD43B" className="text-[28px]" />,
      <SiOpencv key="opencv" color="#5C3EE8" className="text-[28px]" />,
      <SiHtml5 key="html" color="#E34F26" className="text-[28px]" />,
      <SiCss3 key="css" color="#1572B6" className="text-[28px]" />,
    ],
    git: 'https://github.com',
  },
  {
    name: 'Path Finder',
    description: `Built a high-performance pathfinding application using Python, achieving a 3x speedup in Dijkstra's algorithm execution time through optimization techniques. Developed an intuitive user interface with a 90% user satisfaction rate, providing clear node exploration visualization. Enhanced application responsiveness by reducing latency by 50%, ensuring seamless user interaction.`,
    img: path,  // Add the appropriate image for DSA here
    stack: [
      <FaPython key="python" color="#FFD43B" className="text-[28px]" />,
      <SiHtml5 key="html" color="#E34F26" className="text-[28px]" />,
      <SiCss3 key="css" color="#1572B6" className="text-[28px]" />,
      <FaJsSquare key="javascript" color="#F7DF1E" className="text-[28px]" />,
    ],
    git: 'https://github.com',
  },
  
  
  {
    name: 'My Portfolio',
    url: '',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: porfolioLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com',
  },
  {
    name: 'Weather React App',
    // url: 'https://weather.enikosoft.com/',
    description: `Experience real-time weather updates with our sleek and modern weather application powered by React, Styled Components, and TailwindCSS. Seamlessly retrieve weather and current location time data for any city using the Google Places API with robust API handling practices. Enjoy a user-friendly interface designed with adaptive and responsive principles, ensuring a seamless experience across all devices. Weather data sourced from reliable providers like Visual Crossing.`,

    img: weatherAppLofo,
    stack: [
      // <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <FaGoogle key="google" color="#000" className="text-[28px]" />,
    ],
    git: 'https://github.com',
  },
  {
    name: 'Ecommerce Frontend UI',
    description: `Explore our eCommerce frontend UI built with HTML, CSS, and JavaScript. This project provides a user-friendly interface for online shopping, featuring a modern and responsive design. Enjoy seamless navigation and intuitive user experience. Enhance your shopping journey with interactive elements and dynamic content.`,
    img: e,
    stack: [
      <FaHtml5 key="html" color="#E34F26" className="text-[28px]" />,
      <FaCss3Alt key="css" color="#1572B6" className="text-[28px]" />,
      <FaJsSquare key="js" color="#F7DF1E" className="text-[28px]" />,
    ],
    git: 'https://github.com',
  },
  
  
  
];
