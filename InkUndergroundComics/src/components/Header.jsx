import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

// Assets
import logo from "../assets/logo.png";

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileComicsDropdown = () =>
    setIsMobileComicsDropdownOpen(!isMobileComicsDropdownOpen);
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
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/characters" className="nav-link">
            CHARACTERS
          </NavLink>
          <NavLink to="/news" className="nav-link">
            NEWS
          </NavLink>

          <div className="dropdown-container">
            <button className="dropdown-toggle">
              COMICS <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <NavLink
                to="/comics"
                className="dropdown-item"
                onClick={closeMenu}
              >
                All Comics
              </NavLink>
              <NavLink
                to="/new-releases"
                className="dropdown-item"
                onClick={closeMenu}
              >
                New Releases
              </NavLink>
            </div>
          </div>

          <NavLink to="/community" className="nav-link">
            COMMUNITY
          </NavLink>
          <a href="#" className="nav-link">
            COLLAB CORNER
          </a>
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg
                width="20"
                height="20"
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
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>
              HOME
            </NavLink>
            <NavLink
              to="/characters"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              CHARACTERS
            </NavLink>
            <NavLink to="/news" className="mobile-nav-link" onClick={closeMenu}>
              NEWS
            </NavLink>

            <div className="mobile-dropdown-container">
              <button
                className="mobile-dropdown-toggle"
                onClick={toggleMobileComicsDropdown}
              >
                COMICS{" "}
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
                  <NavLink
                    to="/comics"
                    className="mobile-dropdown-item"
                    onClick={closeMenu}
                  >
                    All Comics
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/community"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              COMMUNITY
            </NavLink>
          </nav>

          <div className="mobile-theme-toggle-container">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
