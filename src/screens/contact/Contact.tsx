import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaCode, FaFacebookSquare } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleLoad = () => {
      const utterance = new SpeechSynthesisUtterance("Contact page loaded of Ansh Kumar resume.");
      window.speechSynthesis.speak(utterance);
    };

    handleLoad();
  }, []);

  const handleOpenSocialNetwork = (url: string) => {
    window.open(url, '_blank');
  };

  const handleOpenGmail = () => {
    window.location.href = 'mailto:anshcoder9@gmail.com';
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-row items-center pt-4 align-middle">
        <span className="html-tag">{'<b>'}</span>
        <p className="px-2 pb-2 text-lg font-bold text-primaryColor sm:text-2xl">
          Get in Touch
          <span className="text-lg text-themePrimaryColor sm:text-2xl"> - Contact Me</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>
      <div className="flex flex-col pt-8 lg:flex-row lg:pt-32">
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-primaryColor">FIND ME ON</h3>
            <p className="text-primaryColor">
              Please don’t hesitate to reach out to me{' '}
              <span className="text-lg text-themePrimaryColor">and connect.</span>
            </p>
          </div>
          <div className="grid w-full grid-cols-5 items-center gap-1 p-2 sm:gap-6">
            <button
              id="linkedin-button"
              title="linkedin"
              onClick={() => handleOpenSocialNetwork('https://www.linkedin.com/in/ansh-kumar-5a40a3249/')}
            >
              <FaLinkedin size={54} className="m-auto text-[54px] text-themePrimaryColor hover:cursor-pointer" />
            </button>
            <button
              id="github-button"
              title="github"
              onClick={() => handleOpenSocialNetwork('https://github.com/AnshSolutions/')}
            >
              <FaGithub size={54} className="m-auto text-[54px] text-themePrimaryColor hover:cursor-pointer" />
            </button>
            <button
              id="leetcode-button"
              title="leetcode"
              onClick={() => handleOpenSocialNetwork('https://leetcode.com/u/anshcoder9/')}
            >
              <FaCode size={54} className="m-auto text-[54px] text-themePrimaryColor hover:cursor-pointer" />
            </button>
            <button
              id="facebook-button"
              title="facebook"
              onClick={() => handleOpenSocialNetwork('https://www.facebook.com/ansh.ror.7568/')}
            >
              <FaFacebookSquare size={54} className="m-auto text-[54px] text-themePrimaryColor hover:cursor-pointer" />
            </button>
            <button
              id="gmail-button"
              title="gmail"
              onClick={handleOpenGmail}
            >
              <BiLogoGmail size={54} className="m-auto text-[54px] text-themePrimaryColor hover:cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="line-contact relative w-[50%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-1/3 lg:pt-0">
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className=" text-xl text-primaryColor">{' {'}</span>
          </p>
          <div className="line-contact flex pl-10 text-lg text-primaryColor">
            email:
            <input
              id="email-input"
              type="email"
              className="bg-transparent pl-2 focus-visible:outline-none active:border-none"
            />
          </div>
          <div className="line-contact flex pl-10 text-lg text-primaryColor">
            subject:
            <input
              id="subject-input"
              className="bg-transparent pl-2 focus-visible:outline-none active:border-none"
            />
          </div>
          <div className="line-contact flex pl-10 text-lg text-primaryColor">
            message:
            <div className="w-full">
              <TextareaAutosize
                id="message-textarea"
                minRows={3}
                className="w-92 resize-none overflow-auto bg-transparent pl-2 text-primaryColor focus-visible:outline-none active:border-none"
                maxRows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <p className="line-contact text-xl text-primaryColor">{'}'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
