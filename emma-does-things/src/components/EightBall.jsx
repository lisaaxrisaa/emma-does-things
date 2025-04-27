import React, { useState } from 'react';
import './EightBall.css';

const EmmaEightBall = () => {
  const answers = [
    'Yes, but only after a snack.',
    "No, it's nap time.",
    'Maybe... If belly rubs are involved.',
    'Definitely yes, zoomies approved!',
    'Absolutely not. Go outside and touch grass.',
    'Consult the treat jar first.',
    'Emma says: Follow your heart!',
    'Emma is too busy napping to answer. Try again later.',
  ];

  const [currentAnswer, setCurrentAnswer] = useState('Ask Emma 🐾');

  const handleAskEmma = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setCurrentAnswer(answers[randomIndex]);
  };

  return (
    <>
      <div className="eightball-container">
        <div className="emma-crystal-wrapper">
          <div className="answer-overlay">{currentAnswer}</div>
        </div>

        <button onClick={handleAskEmma} className="eightball-button">
          Ask Emma!
        </button>
      </div>
    </>
  );
};

export default EmmaEightBall;
