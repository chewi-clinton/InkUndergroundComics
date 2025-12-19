import React, { useState, useEffect } from "react";
import "../styles/CommunityPage.css";

// Using existing image imports as placeholders for the banner background
import bannerBg from "../assets/instagram.jpg";

const CommunityPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with theme from localStorage and listen for changes
  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem("theme");
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(savedTheme === "dark" || htmlTheme === "dark");

    // Observer for data-theme attribute changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(currentTheme === "dark");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const guidelines = [
    "Be respectful and kind to all community members",
    "Share your love for comics and creativity",
    "Support fellow creators and artists",
    "No harassment, hate speech, or discrimination",
    "Keep discussions family-friendly and on-topic",
    "Report any violations to our moderation team",
  ];

  return (
    <div className={`com-page-container ${isDarkMode ? "dark-theme" : ""}`}>
      {/* --- Purple Hero Banner --- */}
      <div
        className="com-hero-banner"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="com-hero-overlay">
          <h1 className="com-hero-title">JOIN OUR COMMUNITY</h1>
          <p className="com-hero-subtitle">
            Connect with comic fans, creators, and fellow enthusiasts. Be part
            of the Ink Underground movement.
          </p>
        </div>
      </div>

      {/* --- Breadcrumbs --- */}
      <nav className="com-breadcrumbs">
        HOME <span className="com-slash">/</span>{" "}
        <span className="com-current">COMMUNITY</span>
      </nav>

      {/* --- Interaction Cards Section --- */}
      <div className="com-cards-section">
        {/* Discord Card */}
        <div className="com-card">
          <h2 className="com-card-title">DISCORD SERVER</h2>
          <p className="com-card-text">
            Join our vibrant Discord community where fans discuss comics, share
            fan art, and connect with creators. Get exclusive announcements,
            early access to releases, and participate in community events.
          </p>
          <button className="com-btn-discord">JOIN DISCORD</button>
        </div>

        {/* Follow Us Card */}
        <div className="com-card">
          <h2 className="com-card-title">FOLLOW US</h2>
          <p className="com-card-text">
            Stay updated with the latest news, announcements, and
            behind-the-scenes content on our social media channels. Follow us
            for daily comic updates and community spotlights.
          </p>
          <div className="com-social-grid">
            <button className="com-social-btn btn-insta">INSTAGRAM</button>
            <button className="com-social-btn btn-twit">TWITTER</button>
            <button className="com-social-btn btn-face">FACEBOOK</button>
            <button className="com-social-btn btn-yout">YOUTUBE</button>
          </div>
        </div>
      </div>

      {/* --- Community Guidelines Section --- */}
      <div className="com-guidelines-container">
        <div className="com-guidelines-box">
          <h2 className="com-guidelines-title">COMMUNITY GUIDELINES</h2>
          <ul className="com-guidelines-list">
            {guidelines.map((item, index) => (
              <li key={index} className="com-guideline-item">
                <span className="com-check">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
