import { useMediaQuery } from 'react-responsive';
import React, { useEffect } from 'react';
import { mediaBreakpoints } from 'responsive';

const About: React.FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      const utterance = new SpeechSynthesisUtterance("About page loaded of Ansh Kumar resume.");
      window.speechSynthesis.speak(utterance);
    };

    handleLoad();
  }, []);

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex h-auto w-full items-center overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="html-tag">{'<html>'}</span>
        <br />
        <span className="html-tag pl-4">{'<body>'}</span>
        <br />
        <span className="html-tag pl-8">{'<h1>'}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

        <span className="html-tag pl-8">{'</h1>'}</span>
        <br />
        <span className="html-tag pl-8">{'<p>'}</span>
        <p className="pb-4 pl-10 text-lg">
          My name is <span className="text-lg text-themePrimaryColor">Ansh Kumar</span> and I am a{' '}
          <span className="text-lg text-themePrimaryColor">Full-Stack JavaScript Developer</span> fresher looking for an internship opportunity. I have a strong foundation in{' '}
          <span className="text-lg text-themePrimaryColor">React and Node.js</span> technologies.
        </p>
        <p className="pb-4 pl-10 text-lg">
          I am a great problem solver and have tackled over{' '}
          <span className="text-lg text-themePrimaryColor">700+ LeetCode problems</span> and achieved a{' '}
          <span className="text-lg text-themePrimaryColor">3-star rating on CodeChef</span>. My learning journey has been focused on building my skills and gaining practical experience through various projects.
        </p>
        <p className="pb-4 pl-10 text-lg">
          As a full-stack developer, I am capable of working on both the frontend and backend of web applications. My experience with React allows me to create dynamic and responsive user interfaces, while my knowledge of Node.js enables me to build efficient and scalable server-side applications. I am a fluent English speaker, which helps me communicate effectively in team settings and with clients. I am eager to apply my knowledge and{' '}
          <span className="text-lg text-themePrimaryColor">
            contribute to impactful projects while continuing to learn and grow
          </span>. I am passionate about using technology to solve problems and am a strong advocate for Agile methodologies and best coding practices. I am excited to bring my{' '}
          <span className="text-lg text-themePrimaryColor">
            enthusiasm and dedication
          </span>{' '}
          to a professional setting.
        </p>
        <p className="pb-4 pl-10 text-lg">
          In terms of my education, I have always been a high achiever. I scored <span className="text-lg text-themePrimaryColor">96% in my 10th grade</span> and <span className="text-lg text-themePrimaryColor">92% in my 12th grade</span> with a focus on Physics, Chemistry, and Mathematics (PCM).
        </p>
        <span className="html-tag pl-8">{'</p>'}</span>
        <br />
        <span className="html-tag pl-4">{'</body>'}</span>
        <br />
        <span className="html-tag pl-2">{'</html>'}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
    </div>
  );
};

export default About;
