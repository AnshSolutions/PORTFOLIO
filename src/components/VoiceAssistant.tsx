import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceAssistant: React.FC = () => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef(window.speechSynthesis);
  const navigate = useNavigate();

  useEffect(() => {
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('You said:', transcript);
        handleCommand(transcript);
      };
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        respond(`Error: ${event.error}`);
      };
      recognition.onend = () => {
        console.log('Voice recognition ended.');
      };
    } else {
      console.error('Speech recognition not supported in this browser.');
      respond('Speech recognition not supported in this browser.');
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    } else {
      console.error('Speech recognition is not initialized.');
      respond('Speech recognition is not initialized.');
    }
  };

  const handleCommand = (command: string) => {
    switch (command) {
      case 'home':
        respond('Opening home, please wait...');
        setTimeout(() => navigate('/'), 1000); // Navigate after a short delay
        break;
      case 'open cv': // Command for opening the CV
        respond('Opening CV, please wait...');
        setTimeout(() => {
          const cvButton = document.getElementById('open-cv-button');
          if (cvButton) {
            cvButton.click();
          } else {
            console.error('Open CV button not found.');
            respond('Open CV button not found.');
          }
        }, 1000); // Click the button after a short delay
        break;
      case 'about':
        respond('Opening about page, please wait...');
        setTimeout(() => navigate('/about'), 1000);
        break;
      case 'projects':
        respond('Opening projects page, please wait...');
        setTimeout(() => navigate('/projects'), 1000);
        break;
      case 'technologies':
        respond('Opening technologies page, please wait...');
        setTimeout(() => navigate('/technologies'), 1000);
        break;
      case 'contact':
        respond('Opening contact page, please wait...');
        setTimeout(() => navigate('/contact'), 1000);
        break;
      case 'linkedin':
        respond('Opening LinkedIn, please wait...');
        setTimeout(() => window.open('https://www.linkedin.com/in/ansh-kumar-5a40a3249/', '_blank'), 1000);
        break;
      case 'github':
        respond('Opening GitHub, please wait...');
        setTimeout(() => window.open('https://github.com/AnshSolutions/', '_blank'), 1000);
        break;
      case 'leetcode':
        respond('Opening LeetCode, please wait...');
        setTimeout(() => window.open('https://leetcode.com/u/anshcoder9/', '_blank'), 1000);
        break;
      case 'facebook':
        respond('Opening Facebook, please wait...');
        setTimeout(() => window.open('https://www.facebook.com/ansh.ror.7568/', '_blank'), 1000);
        break;
      case 'gmail':
        respond('Opening Gmail, please wait...');
        setTimeout(() => window.location.href = 'mailto:anshcoder9@gmail.com', 1000);
        break;
      default:
        respond('Command not recognized.');
    }
  };

  const respond = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synthRef.current.speak(utterance);
  };

  return (
    <div className="fixed bottom-4 left-4">
      <button
        onClick={startListening}
        className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Start Voice Assistant"
      >
        <FaMicrophone size={12} />
      </button>
    </div>
  );
};

export default VoiceAssistant;
