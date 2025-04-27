import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="mailto:lisafujita90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/email.svg" alt="Email" width="60" />
        </a>
        <a
          href="https://github.com/lisaaxrisaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/github.svg" alt="Email" width="55" />
        </a>
        <a
          href="https://www.linkedin.com/in/lisa-fujita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/linkedin.svg" alt="Email" width="55" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
