import React, { useState } from 'react';
import './ClickForEmma.css';

const ClickForEmma = () => {
  const images = [
    {
      src: '/img/emma1.jpg',
      caption: "Chillin' like a queen.",
    },
    {
      src: '/img/emma2.jpg',
      caption: "I know I'm cute ",
    },
    {
      src: '/img/emma3.jpg',
      caption: 'Snack? Did someone say snack?',
    },
    {
      src: '/img/emma4.jpg',
      caption: 'Send help!',
    },
    {
      src: '/img/emma13.jpg',
      caption: 'Yuck!',
    },
  ];

  const [currentImage, setCurrentImage] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  return (
    <div className="click-for-emma-container">
      <h2 className="click-header">Click for Emma 🐾</h2>
      <button onClick={handleClick} className="click-button">
        Show me Emma!
      </button>

      {currentImage && (
        <div>
          <img
            src={currentImage.src}
            alt="Emma being adorable"
            className="emma-image"
          />
          <p className="emma-caption">{currentImage.caption}</p>
        </div>
      )}
    </div>
  );
};

export default ClickForEmma;
