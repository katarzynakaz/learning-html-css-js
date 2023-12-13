// Write all the code here
// Create a social media bar with links to YouTube and Instagram, using anchor tags and icons from the react-
// icons/ai library
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <h2>Footer Title</h2>
          <p>Some footer text here.</p>
          <strong>Important Info</strong>
        </div>
        <aside className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={24} />
          </a>
        </aside>
      </footer>
    );
  }
  
  export default Footer;