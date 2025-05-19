import React, { useState } from 'react';
import './EmmaWalkAdventure.css';

const EmmaWalkAdventure = () => {
  const [step, setStep] = useState(1);
  const [choices, setChoices] = useState({});

  const handleChoice = (key, value) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const getFinalOutcome = () => {
    const outcomes = [
      'Emma became a local legend after chasing 3 squirrels and one mail truck.',
      'Emma returned home proudly carrying a stick twice her size.',
      'Emma got soaked in the rain, rolled in mud, and loved every second.',
      'Emma made three new friends and was invited to a dog party.',
      'Emma found a hidden treat stash under a park bench — jackpot!',
    ];
    const index = Math.floor(Math.random() * outcomes.length);
    return outcomes[index];
  };

  return (
    <div className="walk-adventure-container">
      <div className="adventure-text">
        <h2>Emma’s Ultimate Walk Adventure 🐾</h2>

        {step === 1 && (
          <div className="step-content">
            <p>Where should Emma go today?</p>
            <button onClick={() => handleChoice('path', 'park')}>Park</button>
            <button onClick={() => handleChoice('path', 'street')}>
              Street
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <p>Should Emma walk alone or with a human?</p>
            <button onClick={() => handleChoice('companion', 'alone')}>
              Alone
            </button>
            <button onClick={() => handleChoice('companion', 'human')}>
              With Human
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <p>Emma sees a squirrel or a big dog. Who should she approach?</p>
            <button onClick={() => handleChoice('encounter', 'squirrel')}>
              Squirrel
            </button>
            <button onClick={() => handleChoice('encounter', 'dog')}>
              Big Dog
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="step-content">
            <p>Emma's reaction?</p>
            <button onClick={() => handleChoice('reaction', 'chase')}>
              Chase
            </button>
            <button onClick={() => handleChoice('reaction', 'ignore')}>
              Ignore
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="step-content">
            <p>Emma finds a stick and a treat. What should she grab?</p>
            <button onClick={() => handleChoice('find', 'stick')}>Stick</button>
            <button onClick={() => handleChoice('find', 'treat')}>Treat</button>
          </div>
        )}

        {step === 6 && (
          <div className="step-content">
            <p>A bike zooms by and a puddle splashes nearby. What now?</p>
            <button onClick={() => handleChoice('event', 'bike')}>
              Investigate Bike
            </button>
            <button onClick={() => handleChoice('event', 'puddle')}>
              Jump in Puddle
            </button>
          </div>
        )}

        {step === 7 && (
          <div className="step-content">
            <p>Should Emma take the shortcut or explore deeper?</p>
            <button onClick={() => handleChoice('route', 'shortcut')}>
              ↩Shortcut
            </button>
            <button onClick={() => handleChoice('route', 'explore')}>
              Explore
            </button>
          </div>
        )}

        {step === 8 && (
          <div className="step-content">
            <p>A stranger waves. What does Emma do?</p>
            <button onClick={() => handleChoice('stranger', 'bark')}>
              Bark
            </button>
            <button onClick={() => handleChoice('stranger', 'ignore')}>
              Ignore
            </button>
          </div>
        )}

        {step === 9 && (
          <div className="step-content">
            <p>A loud noise! Thunder or a bird squawk?</p>
            <button onClick={() => handleChoice('noise', 'thunder')}>
              Thunder
            </button>
            <button onClick={() => handleChoice('noise', 'bird')}>
              🐦 Bird
            </button>
          </div>
        )}

        {step === 10 && (
          <div className="step-content">
            <p>Final challenge: chase a ball or cross a log?</p>
            <button onClick={() => handleChoice('final', 'ball')}>
              Chase Ball
            </button>
            <button onClick={() => handleChoice('final', 'log')}>
              Cross Log
            </button>
          </div>
        )}

        {step === 11 && (
          <div className="step-content">
            <p>Emma pauses. Should she fetch again or lie down?</p>
            <button onClick={() => handleChoice('pause', 'fetch')}>
              Fetch Again
            </button>
            <button onClick={() => handleChoice('pause', 'rest')}>
              Lie Down
            </button>
          </div>
        )}

        {step === 12 && (
          <div className="step-content">
            <p>
              <strong>Final Outcome:</strong>
            </p>
            <p>{getFinalOutcome()}</p>
            <button
              onClick={() => {
                setStep(1);
                setChoices({});
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="adventure-image">
        <img src="/img/emmahike.png" alt="Emma ready for adventure" />
      </div>
    </div>
  );
};

export default EmmaWalkAdventure;
