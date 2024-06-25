// src/MessagePage.jsx
import React, { useEffect } from 'react';
import TypingMessage from './TypingMessage';

const MessagePage = () => {
  useEffect(() => {
    const audio = new Audio('/sound.mp3');
    audio.play();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <TypingMessage
        message="I love u poooooooooooooooooooooooks, muah!"
        speed={150}
      />
    </div>
  );
};

export default MessagePage;

