import React from "react";
import "../styles/ComicPage.css";

// --- PLACEHOLDER IMAGES (Reusing from previous code) ---
// Using these temporarily until you replace them with actual comic covers
import ironFistPlaceholder from "../assets/instagram.jpg";
import cover1 from "../assets/twitter.jpg";
import cover2 from "../assets/youtube.jpg";
import cover3 from "../assets/instagram.jpg";
import cover4 from "../assets/twitter.jpg";
// -------------------------------------------------------

// Dummy data to replicate the grid structure in the image
const COMIC_DATA = [
  {
    id: 1,
    image: cover1,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 2,
    image: cover2,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 3,
    image: cover3,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 4,
    image: cover4,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  // Repeat for second row
  {
    id: 5,
    image: cover1,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 6,
    image: cover2,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 7,
    image: cover3,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 8,
    image: cover4,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  // Repeat for third row
  {
    id: 9,
    image: cover1,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 10,
    image: cover2,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 11,
    image: cover3,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
  {
    id: 12,
    image: cover4,
    title: "THE AMAZING SPIDERMAN",
    date: "On February 13, 1998, during the darkest war there was sentries in the basement, and bro saw him",
  },
];

const ComicPage = () => {
  return (
    <div className="comic-page-container">
      {/* --- Top Banner Section --- */}
      <header className="cmp-banner">
        {/* Left side text and arrow logo */}
        <div className="cmp-banner-left">
          {/* The downward arrow logo box */}
          <div className="cmp-arrow-box">
            <div className="cmp-down-arrow"></div>
          </div>
          <div className="cmp-banner-text-group">
            <h2 className="cmp-text-purple">CHARACTER</h2>
            <h1 className="cmp-text-huge">
              <span className="cmp-text-small">THE</span> OF
              <br />
              MONTH
            </h1>
            <h3 className="cmp-text-nominees">NOMINEES:</h3>
          </div>
        </div>

        {/* Right side Iron Fist image and badge */}
        <div className="cmp-banner-right">
          {/* The 'A' Badge (reused style) */}
          <div className="cmp-badge-a">A</div>
          <img
            src={ironFistPlaceholder}
            alt="Iron Fist"
            className="cmp-banner-hero-img"
          />
          <h1 className="cmp-hero-name-overlay">IRON FIST</h1>
        </div>
      </header>

      {/* --- Navigation Bar (Breadcrumbs & Search) --- */}
      <div className="cmp-nav-bar">
        <div className="cmp-breadcrumbs">
          <span className="cmp-crumb-link">HOME</span>
          <span className="cmp-crumb-slash">/</span>
          <span className="cmp-crumb-current">COMICS</span>
        </div>

        <div className="cmp-search-container">
          <span className="cmp-search-icon">&#128269;</span>{" "}
          {/* Magnifying glass unicode */}
          <input
            type="text"
            className="cmp-search-input"
            placeholder="Search Comics"
          />
        </div>
      </div>

      {/* --- Comic Grid Section --- */}
      <div className="cmp-grid-section">
        <div className="cmp-comic-grid">
          {COMIC_DATA.map((comic) => (
            <div className="cmp-comic-card" key={comic.id}>
              <div className="cmp-card-image-wrapper">
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="cmp-card-image"
                />
              </div>
              <div className="cmp-card-content">
                <h3 className="cmp-card-title">{comic.title}</h3>
                <p className="cmp-card-date">{comic.date}</p>
                <span className="cmp-card-more">More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicPage;
