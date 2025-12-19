import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// Assets
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";
import youtube from "../assets/youtube.jpg";

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`social-icons ${className}`}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <img src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <img src={twitter} alt="Twitter" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <img src={facebook} alt="Facebook" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileComicsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img src={logo} alt="Ink Underground" className="arrow-icon" />
          <div className="brand-text">
            <span>INK</span>
            <span>UNDERGROUND</span>
            <span>COMICS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-nav">
          {/* ADDED: Home Link */}
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/characters" className="nav-link">
            CHARACTERS
          </Link>
          <Link to="/news" className="nav-link">
            NEWS
          </Link>
          <div className="dropdown-container">
            <button className="dropdown-toggle">
              COMICS
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <Link to="/comics" className="dropdown-item">
                All Comics
              </Link>
              <Link to="/comics" className="dropdown-item">
                New Releases
              </Link>
              <Link to="/comics" className="dropdown-item">
                Character of the Month
              </Link>
            </div>
          </div>
          <Link to="/community" className="nav-link">
            COMMUNITY
          </Link>
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
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {/* ADDED: Home Link for Mobile */}
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
              HOME
            </Link>
            <Link
              to="/characters"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              CHARACTERS
            </Link>
            <Link to="/news" className="mobile-nav-link" onClick={closeMenu}>
              NEWS
            </Link>

            <div className="mobile-dropdown-container">
              <button
                className="mobile-dropdown-toggle"
                onClick={toggleMobileComicsDropdown}
              >
                COMICS
                <span
                  className={`dropdown-arrow ${
                    isMobileComicsDropdownOpen ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {isMobileComicsDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <Link
                    to="/comics"
                    className="mobile-dropdown-item"
                    onClick={closeMenu}
                  >
                    All Comics
                  </Link>
                  <Link
                    to="/comics"
                    className="mobile-dropdown-item"
                    onClick={closeMenu}
                  >
                    New Releases
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/community"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              COMMUNITY
            </Link>
            <a href="#" className="mobile-nav-link" onClick={closeMenu}>
              MERCH
            </a>
          </nav>

          <SocialIcons className="mobile-social-icons" />
        </div>
      )}
    </header>
  );
};

export default Header;
