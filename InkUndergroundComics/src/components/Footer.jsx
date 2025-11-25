import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* --- Column 1: Branding & Copyright --- */}
        <div className="footer-section branding">
          {/* UPDATED: Logo Image + Text Side-by-Side */}
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Ink Underground Comics Logo"
              className="footer-logo-img"
            />
            <div className="logo-text">
              <span className="brand-ink">INK</span>
              <span className="brand-underground">UNDERGROUND</span>
              <span className="brand-comics">COMICS</span>
            </div>
          </div>

          <p className="copyright-text">
            All content copyright © & Trademarked TM 2025 Ink Underground Comics
            or their respective owners. Ink Underground Comics and its logos are
            ® and © 2025 Ink Underground Comics, Inc. All rights reserved.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="vertical-line"></div>

        {/* --- Column 2: Content Links --- */}
        <div className="footer-section links">
          <ul>
            <li>
              <a href="#new-releases">New Releases</a>
            </li>
            <li>
              <a href="#coming-soon">Coming Soon</a>
            </li>
            <li>
              <a href="#comic-series">Comic Series</a>
            </li>
            <li>
              <a href="#creators">Creators</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#merch">Merch</a>
            </li>
            <li>
              <a href="#podcasts">Podcasts</a>
            </li>
            <li>
              <a href="#solicitations">Solicitations</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter Sign Up</a>
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="vertical-line"></div>

        {/* --- Column 3: Company Links --- */}
        <div className="footer-section links">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#press">Press Releases</a>
            </li>
            <li>
              <a href="#rss">RSS Feed</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#submissions">Submissions</a>
            </li>
            <li>
              <a href="#terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#copyright">Copyright Infringement</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
