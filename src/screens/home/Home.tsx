import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import myphoto from 'assets/images/myphoto.jpg';
import AnshKumarResume from 'assets/images/Ansh Kumar Resume.pdf';

const Home: React.FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      const utterance = new SpeechSynthesisUtterance("Home page loaded of ansh kumar resume.");
      window.speechSynthesis.speak(utterance);
    };

    handleLoad();
  }, []);

  const handleShowCV = () => {
    window.open(AnshKumarResume, '_blank');
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span> Hi 👋 my name is
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Ansh Kumar <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">{'/>'}</span>
          </h1>

          <TypeAnimation
            sequence={['Full-Stack Developer', 1000, 'React Developer', 1000, 'Back-End Developer', 1000,'Data Science Enthusiast', 1000]}
            wrapper="span"
            speed={2}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />

          <div className="mt-10 flex w-full flex-col sm:flex-row">
            <button
              id="open-cv-button"  // Add id for targeting
              title="Open CV"
              className="btn-secondary w-full rounded px-12 py-4 hover:brightness-110 sm:w-fit"
              onClick={handleShowCV}
            >
              Open CV
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center xl:w-1/2 xl:pt-10 xl:top-[-64px]">
        <img
          className="h-auto max-h-[300px] w-auto max-w-[215px] md:max-h-[400px] md:max-w-[286px] xl:max-h-[500px] xl:max-w-[358px] object-cover rounded-lg"
          loading="lazy"
          src={myphoto}
          alt="myPhoto"
        />
      </div>
    </div>
  );
};

export default Home;
