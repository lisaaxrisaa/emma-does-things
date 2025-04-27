import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const projects = [
    {
      // title: 'Click for Emma',
      id: 'click-for-emma',
      background: '/img/emmacard1.png',
    },
    {
      // title: 'Emma Mood Generator',
      id: 'eight-ball',
      background: '/img/eightball.png',
    },
    {
      // title: 'Code Confession Booth',
      id: 'code-confession-booth',
      background: '/img/emmacard2.png',
    },
    {
      id: 'emma-treat-catch',
      background: '/img/emmatreat.png',
    },
    {
      // title: "coming soon",
      id: 'emma-packing-list',
      background: '/img/comingsoon.png',
    },
    {
      // title: "coming soon",
      id: 'emma-packing-list',
      background: '/img/comingsoon.png',
    },
    {
      // title: "coming soon",
      id: 'emma-packing-list',
      background: '/img/comingsoon.png',
    },
    {
      // title: "coming soon",
      id: 'emma-packing-list',
      background: '/img/comingsoon.png',
    },
  ];

  return (
    <>
      <div className="home-container">
        <h1 className="home-header">Emma Does Things</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/${project.id}`}
              className="project-card"
              style={{ backgroundImage: `url(${project.background})` }}
            >
              {project.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
