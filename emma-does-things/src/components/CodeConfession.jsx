import React, { useState } from 'react';
import './CodeConfession.css';

const CodeConfessionBooth = () => {
  const [confession, setConfession] = useState('');
  const [submittedConfession, setSubmittedConfession] = useState('');
  const [emmaResponse, setEmmaResponse] = useState(null);

  const responses = [
    {
      message: 'Emma forgives you... but demands belly rubs! 🐾',
      image: '/img/emma24.jpg',
    },
    {
      message: "Emma says: 'It's okay, even pros forget semicolons.' 😌",
      image: '/img/emma18.jpg',
    },
    {
      message: 'Emma thinks you should reward yourself with a snack. 🦴',
      image: '/img/emma11.jpg',
    },
    {
      message: "Emma says: 'You got this. Keep pushing forward!' 💪",
      image: '/img/emma10.jpg',
    },
    {
      message: "Emma gasps: 'Oh no! That’s a serious coding crime!' 😱",
      image: '/img/emma19.jpg',
    },
    {
      message:
        "Emma raises an eyebrow: 'Really? I expected better from you.' 👀",
      image: '/img/emma15.jpg',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedConfession(confession);

    const randomIndex = Math.floor(Math.random() * responses.length);
    setEmmaResponse(responses[randomIndex]);

    setConfession('');
  };

  return (
    <div className="confession-container">
      <h2 className="confession-header">Your secret is safe with Emma...</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="confession-textarea"
          placeholder="Tell Emma your coding sins..."
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
        />
        <br />
        <button type="submit" className="confession-button">
          Confess!
        </button>
      </form>

      {submittedConfession && emmaResponse && (
        <div className="confession-response">
          <p>🐾 {emmaResponse.message}</p>
          <img
            src={emmaResponse.image}
            alt="Emma reaction"
            className="emma-reaction-image"
          />
          <blockquote>"{submittedConfession}"</blockquote>
        </div>
      )}
    </div>
  );
};

export default CodeConfessionBooth;
