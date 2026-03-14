import React, { useState, useEffect } from 'react';

interface RavenMascotProps {
  message: string;
  mood: 'neutral' | 'happy' | 'warning';
}

export const RavenMascot: React.FC<RavenMascotProps> = ({ message, mood }) => {
  const [displayedMessage, setDisplayedMessage] = useState(message);

  useEffect(() => {
    setDisplayedMessage(message);
  }, [message]);

  const getEmoji = () => {
    switch (mood) {
      case 'happy':
        return '😲';
      case 'warning':
        return '🤔';
      default:
        return '🤓';
    }
  };

  return (
    <div className="raven-container">
      <div className="raven-emoji" aria-hidden="true" role="img" aria-label="Mascote">
        {getEmoji()}
      </div>
      <div className="speech-bubble">
        <p>{displayedMessage}</p>
      </div>
    </div>
  );
};
