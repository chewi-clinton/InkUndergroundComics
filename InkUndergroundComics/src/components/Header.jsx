import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";
import youtube from "../assets/youtube.jpg";

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`social-icons ${className}`}>
      <a href="#" className="social-icon">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#" className="social-icon">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#" className="social-icon">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#" className="social-icon">
        <img src={youtube} alt="YouTube" />
      </a>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileComicsDropdownOpen, setIsMobileComicsDropdownOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileComicsDropdown = () => {
    setIsMobileComicsDropdownOpen(!isMobileComicsDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-logo">
          <img src={logo} alt="Arrow" className="arrow-icon" />
          <div className="brand-text">
            <span>INK</span>
            <span>UNDERGROUND</span>
            <span>COMICS</span>
          </div>
        </div>

        <nav className="nav-menu desktop-nav">
          <a href="#" className="nav-link">
            CHARACTERS
          </a>
          <a href="#" className="nav-link">
            NEW RELEASES
          </a>
          <div className="dropdown-container">
            <button className="dropdown-toggle">
              COMICS
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                First Issue
              </a>
              <a href="#" className="dropdown-item">
                New Releases
              </a>
              <a href="#" className="dropdown-item">
                New Series
              </a>
            </div>
          </div>
          <a href="#" className="nav-link">
            MERCH
          </a>
        </nav>

        <SocialIcons className="desktop-social" />

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="#" className="mobile-nav-link">
              CHARACTERS
            </a>
            <a href="#" className="mobile-nav-link">
              NEW RELEASES
            </a>
            <div className="mobile-dropdown-container">
              <button
                className="mobile-dropdown-toggle"
                onClick={toggleMobileComicsDropdown}
              >
                COMICS
                <span className="dropdown-arrow">▼</span>
              </button>
              {isMobileComicsDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <a href="#" className="mobile-dropdown-item">
                    First Issue
                  </a>
                  <a href="#" className="mobile-dropdown-item">
                    New Releases
                  </a>
                  <a href="#" className="mobile-dropdown-item">
                    New Series
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="mobile-nav-link">
              MERCH
            </a>
            <a href="#" className="mobile-nav-link">
              COMMUNITY
            </a>
          </nav>

          <SocialIcons className="mobile-social-icons" />
        </div>
      )}
    </header>
  );
};

export default Header;
