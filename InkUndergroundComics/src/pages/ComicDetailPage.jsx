import React from "react";
import "../styles/ComicDetailPage.css";

// Using your provided images as placeholders
import heroBannerImg from "../assets/twitter.jpg";
import issueCover1 from "../assets/youtube.jpg";
import issueCover2 from "../assets/instagram.jpg";
import issueCover3 from "../assets/twitter.jpg";

const ComicDetailPage = () => {
  const issues = [
    { id: 1, title: "ISSUE 1", img: issueCover1 },
    { id: 2, title: "ISSUE 2", img: issueCover2 },
    { id: 3, title: "ISSUE 3", img: issueCover3 },
    { id: 4, title: "ISSUE 4", img: issueCover1 },
    { id: 5, title: "ISSUE 5", img: issueCover2 },
    { id: 6, title: "ISSUE 6", img: issueCover3 },
  ];

  return (
    <div className="cdp-main-wrapper">
      {/* --- Top Cinematic Banner --- */}
      <section
        className="cdp-hero-section"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        <div className="cdp-hero-overlay">
          <div className="cdp-hero-content">
            <p className="cdp-creator-tag">Created by</p>
            <h2 className="cdp-creators">Kevin Eastman and Peter Laird</h2>
          </div>
        </div>
      </section>

      {/* --- Comic Title and Info Bar --- */}
      <div className="cdp-dark-container">
        <div className="cdp-info-bar">
          <h1 className="cdp-main-title">TEENAGE MUTANT NINJA TURTLES</h1>
          <div className="cdp-tab-group">
            <span className="cdp-tab">OVERVIEW</span>
            <span className="cdp-tab active">ISSUES</span>
          </div>
        </div>

        {/* --- Volume Selector --- */}
        <div className="cdp-volume-selector">
          <span className="cdp-vol-item active">Volume 1</span>
          <span className="cdp-vol-item">Volume 2</span>
          <span className="cdp-vol-item">Volume 3</span>
        </div>

        {/* --- Issues Grid --- */}
        <div className="cdp-issues-grid">
          {issues.map((issue) => (
            <div key={issue.id} className="cdp-issue-card">
              <div className="cdp-issue-img-wrapper">
                <img
                  src={issue.img}
                  alt={issue.title}
                  className="cdp-issue-img"
                />
              </div>
              <p className="cdp-issue-number">{issue.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicDetailPage;
