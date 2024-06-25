// src/TypingMessage.jsx
import React, { useState, useEffect } from 'react';

const TypingMessage = ({ message, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + message[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, message, displayedText, speed]);

  return <p className="text-lg sm:text-6xl text-white font-bold mt-4">{displayedText}</p>;
};

export default TypingMessage;
