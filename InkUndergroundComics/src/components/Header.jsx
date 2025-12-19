// Header.jsx - Updated with Dark Mode Toggle
import React, { useState, useEffect } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

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

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <SocialIcons className="desktop-social" />
        </div>

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
