import React, { useState, useEffect } from 'react';
import './EmmaTreatCatch.css';
import emmaJump from '/img/emmajump.jpg';

const EmmaTreatCatch = () => {
  const [treats, setTreats] = useState([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setScore(0);
    setTimer(30);
    setGameActive(true);
    setGameOver(false);
    setTreats([]);
  };

  useEffect(() => {
    let treatInterval;

    if (gameActive) {
      treatInterval = setInterval(() => {
        const newTreat = {
          id: Date.now(),
          left: Math.random() * 90,
        };
        setTreats((prevTreats) => [...prevTreats, newTreat]);
      }, 1000);
    }

    return () => clearInterval(treatInterval);
  }, [gameActive]);

  useEffect(() => {
    let countdown;

    if (gameActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && gameActive) {
      setGameActive(false);
      setGameOver(true);
    }

    return () => clearInterval(countdown);
  }, [gameActive, timer]);

  const catchTreat = (id) => {
    setScore((prev) => prev + 1);
    setTreats((prevTreats) => prevTreats.filter((treat) => treat.id !== id));
  };

  return (
    <>
      <div className="treat-catch-wrapper">
        <div className="emma-side">
          <img src={emmaJump} alt="Emma Jumping" className="emma-character" />
        </div>

        <div className="game-side">
          <div className="treat-catch-container">
            <h1>Emma's Treat Catch Game 🍖</h1>
            {gameOver ? (
              <div className="game-over-screen">
                <h1>Time's Up! 🐾</h1>
                <p>Your Score: {score}</p>
                <button onClick={startGame} className="start-button">
                  Play Again
                </button>
              </div>
            ) : !gameActive ? (
              <button onClick={startGame} className="start-button">
                Start Game
              </button>
            ) : (
              <div className="game-panel">
                <p>Score: {score}</p>
                <p>Time Left: {timer}</p>

                <div className="treat-area">
                  {treats.map((treat) => (
                    <div
                      key={treat.id}
                      className="treat"
                      style={{ left: `${treat.left}%` }}
                      onClick={() => catchTreat(treat.id)}
                    >
                      🍖
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmmaTreatCatch;
