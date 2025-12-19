import React from "react";
import { Link } from "react-router-dom";
import "../styles/ComicOverviewPage.css";

// Placeholder assets
import heroBannerImg from "../assets/twitter.jpg";
import creatorLogo from "../assets/logo.png"; // Using your logo as the round image
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";
import facebook from "../assets/facebook.jpg";
import youtube from "../assets/youtube.jpg";

const ComicOverviewPage = () => {
  const moreByCreators = [1, 2, 3, 4]; // Placeholder for the bottom grid

  return (
    <div className="cov-main-wrapper">
      {/* --- Top Cinematic Banner --- */}
      <section
        className="cov-hero-section"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        <div className="cov-hero-overlay">
          <div className="cov-hero-content">
            <p className="cov-creator-tag">Created by</p>
            <h2 className="cov-creators">Kevin Eastman</h2>
          </div>
        </div>
      </section>

      {/* --- Dark Content Area --- */}
      <div className="cov-dark-container">
        {/* Info Bar with Tabs */}
        <div className="cov-info-bar">
          <h1 className="cov-main-title">TEENAGE MUTANT NINJA TURTLES</h1>
          <div className="cov-tab-group">
            <Link to="/comic-overview" className="cov-tab active">
              OVERVIEW
            </Link>
            <Link to="/comic-detail" className="cov-tab">
              ISSUES
            </Link>
          </div>
        </div>

        {/* --- Creator Spotlight Section --- */}
        <div className="cov-spotlight-section">
          {/* Left: Bio Text */}
          <div className="cov-bio-column">
            <h2 className="cov-section-label">CREATORS</h2>
            <p className="cov-bio-text">
              High adventure in the dark sewers of York days of organized crime,
              when men men, who men version mutant below. The city is remained
              were... brothers—four brothers—taught them splated bit of nature.
              The ancient art the mutated rat named Splinter.
            </p>
          </div>

          {/* Center: Large Round Logo (No yellow 'A') */}
          <div className="cov-logo-column">
            <div className="cov-round-logo-wrapper">
              <img
                src={creatorLogo}
                alt="Creator Team Logo"
                className="cov-round-img"
              />
            </div>
            <p className="cov-team-name">KIRO GAMES TEAM</p>
          </div>

          {/* Right: Socials */}
          <div className="cov-social-column">
            <h2 className="cov-section-label">CREATOR SOCIALS</h2>
            <div className="cov-social-grid">
              <img src={instagram} alt="IG" className="cov-social-icon" />
              <img src={twitter} alt="TW" className="cov-social-icon" />
              <img src={youtube} alt="YT" className="cov-social-icon" />
              <img src={facebook} alt="FB" className="cov-social-icon" />
            </div>
          </div>
        </div>

        {/* --- More By Creators Section --- */}
        <div className="cov-more-section">
          <h2 className="cov-section-label">MORE BY CREATORS</h2>
          <div className="cov-more-grid">
            {moreByCreators.map((item) => (
              <div key={item} className="cov-more-placeholder"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicOverviewPage;
