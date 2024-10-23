
import {FaCss3, FaFacebook, FaGoogle, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiLinux } from 'react-icons/si';



import {
  SiAmazonaws,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: 'CORE SKILLS',
    items: [
      
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 1
      },
      {
        label: 'C++',
        icon: <SiCplusplus color="#00599C" className="text-[48px] sm:text-[64px]" />,
        experience: "1",
      },
      {
        label: 'C',
        icon: <SiC color="#A8B9CC" className="text-[48px] sm:text-[64px]" />,
        experience: "1",
      },
      {
        label: 'Python',
        icon: <SiPython color="#3776AB" className="text-[48px] sm:text-[64px]" />,
        experience: "1",
      },
      {
        label: 'Linux',
        icon: <SiLinux color="#FCC624" className="text-[48px] sm:text-[64px]" />,
        experience: "1",
      },
      
      
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'Typescript',
        icon: <SiTypescript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 1
      },
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
     
      {
        label: 'Redux',
        icon: <SiRedux color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
     
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: .5,
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        expirience: .5,
      },
      

      {
        label: 'Mongo',
        icon: <SiMongodb color="#2c913f" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      
    ],
  },
  {
    name: 'Ambition to learn or Working on it',
    items: [
      {
        label: 'AWS Serverless, EC2, S3',
        icon: <SiAmazonaws color="#F1941D" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Stripe',
        icon: <SiStripe color="#6058f8" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Apple Pay / Google Pay',
        icon: <MdPayment className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Google API (Map, GA4 ...)',
        icon: <FaGoogle className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      },

      {
        label: 'Facebook API',
        icon: <FaFacebook color="#146BFF" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
    ],
  },
];
