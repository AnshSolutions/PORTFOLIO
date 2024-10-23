interface SpeechRecognition {
    start(): void;
    stop(): void;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: Event & { error: string }) => void) | null;
    onend: (() => void) | null;
  }
  
  interface SpeechRecognitionEvent {
    results: {
      0: {
        0: {
          transcript: string;
        };
      };
    };
  }
  
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
  