// import {BiLogoPostgresql} from 'react-icons/bi';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiJsonwebtokens, SiTypescript } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiPrisma, SiMongodb as SiMongodbSi, SiJsonwebtokens as SiJsonwebtokensSi } from 'react-icons/si';
import { FaHtml5 as FaHtml5Icon, FaCss3Alt as FaCss3AltIcon } from 'react-icons/fa';
import backendArch from 'assets/images/backend.png';

import path from 'assets/images/path.jpg';
import {
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiGithub as SiGithubSi,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';

import weatherAppLofo from 'assets/images/weather-app.png';
import portfolioLogo from '/logo.svg';
import study from 'assets/images/studyNotion.jpg';
import e from 'assets/images/ecommerce.png';

export interface Project {
  name: string;
  description: string;
  stack: JSX.Element[];
  git: string;
}

export const customProjects: Project[] = [
  {
    name: 'YouTube-like Backend API',
    description: `A robust and scalable backend API for a YouTube-like video platform built with Node.js, Express, and MongoDB. Features include JWT-based authentication, video upload/streaming with Cloudinary, social features (comments, likes, subscriptions), and content organization.`,
    stack: [
      <FaNodeJs key="node" color="#68A063" className="text-[28px]" />,
      <SiExpress key="express" color="#000000" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#47A248" className="text-[28px]" />,
      <SiJsonwebtokens key="jwt" color="#000000" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/videotube-backend',
  },
  {
    name: 'StudyNotion',
    description: `StudyNotion is a comprehensive ed-tech platform designed to enable users to create, consume, and rate educational content. Built using the MERN stack (MongoDB, Express, React, Node), it provides a seamless and interactive learning experience.`,
    stack: [
      <SiMongodb key="mongodb" color="#47A248" className="text-[28px]" />,
      <SiExpress key="express" color="#818283" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#2F75C0" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/StudyNotion',
  },
  {
    name: 'Path Finder Visualizer',
    description: `An interactive pathfinding algorithm visualizer built with React and Tailwind CSS. Features include real-time visualization of Dijkstra's and A* algorithms, with the ability to create walls and obstacles.`,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <FaJsSquare key="javascript" color="#F7DF1E" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/PathReact',
  },
  {
    name: 'Portfolio',
    description: `A modern, responsive portfolio website built with React, TypeScript, and Vite. Features include dark/light mode, project showcase, skills section, and contact form.`,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/PORTFOLIO',
  },
  {
    name: 'Tic Tac Toe Game',
    description: `A modern implementation of the classic Tic Tac Toe game built with React and Tailwind CSS. Features include a sleek user interface, move history tracking, game state management, and responsive design.`,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <FaJsSquare key="js" color="#F7DF1E" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/tic-tac-toe',
  },
  {
    name: 'DSA Visualizer',
    description: `A pure vanilla JavaScript implementation of Data Structures and Algorithms visualizer. Features include interactive visualizations of sorting algorithms (Bubble, Quick, Merge Sort), searching algorithms, and array operations.`,
    stack: [
      <FaHtml5 key="html" color="#E34F26" className="text-[28px]" />,
      <FaCss3Alt key="css" color="#1572B6" className="text-[28px]" />,
      <FaJsSquare key="js" color="#F7DF1E" className="text-[28px]" />,
    ],
    git: 'https://github.com/AnshSolutions/Algorithm-Visualizer-',
  },
];
