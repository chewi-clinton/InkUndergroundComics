// Header.jsx
import React from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left side - Brand logo */}
        <div className="brand-logo">
          <img
            src="path-to-purple-arrow-image.png"
            alt="Arrow"
            className="arrow-icon"
          />
          <span className="brand-text">INK UNDERGROUND COMICS</span>
        </div>

        {/* Center - Navigation menu */}
        <nav className="nav-menu">
          <a href="#" className="nav-link">
            CHARACTERS
          </a>
          <a href="#" className="nav-link">
            NEW RELEASES
          </a>
          <a href="#" className="nav-link">
            COMICS
          </a>
          <a href="#" className="nav-link">
            MERCH
          </a>
        </nav>
        {/* Right side - Social media icons */}
        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src="path-to-instagram-icon.png" alt="Instagram" />
          </a>
          <a href="#" className="social-icon">
            <img src="path-to-twitter-icon.png" alt="Twitter" />
          </a>
          <a href="#" className="social-icon">
            <img src="path-to-facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#" className="social-icon">
            <img src="path-to-youtube-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
