import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook
import "../styles/Home.css";

// Assets
import sliderImg1 from "../assets/instagram.jpg";
import sliderImg2 from "../assets/twitter.jpg";
import sliderImg3 from "../assets/youtube.jpg";
import hellboyImg from "../assets/youtube.jpg";
import supremePowerImg from "../assets/instagram.jpg";
import spawnImg from "../assets/twitter.jpg";
import newsDrawingImg from "../assets/youtube.jpg";
import newsNinjaImg from "../assets/twitter.jpg";

const SLIDE_IMAGES = [sliderImg1, sliderImg2, sliderImg3];
const AUTO_SLIDE_INTERVAL = 3000;

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedComic, setExpandedComic] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Theme Sync Logic ---
  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem("theme");
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(savedTheme === "dark" || htmlTheme === "dark");

    // Observer for data-theme attribute changes (triggered by Header toggle)
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

  // --- Auto-Slider Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === SLIDE_IMAGES.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const toggleComicDetails = (comicId) => {
    setExpandedComic(expandedComic === comicId ? null : comicId);
  };

  const comicsData = [
    {
      id: 1,
      image: hellboyImg,
      title: "HELLBOY",
      subtitle: "STRANGE PLACES",
      excerpt:
        "Strange Places, published May 18, 1956, during the darkest war we all hope to see. Save was launched in the backrooms, and lets see how far that",
      additionalText:
        " journey takes us. This issue explores the depths of supernatural mysteries and ancient prophecies that have haunted humanity for generations.",
    },
    {
      id: 2,
      image: supremePowerImg,
      title: "SUPREME POWER",
      subtitle: "",
      excerpt:
        "Strange Places, published May 18, 1956, during the darkest war we all hope to see. Save was launched in the backrooms, and lets see how far that",
      additionalText:
        " takes the heroes. A groundbreaking series that reimagines the superhero genre with raw realism and psychological depth.",
    },
    {
      id: 3,
      image: spawnImg,
      title: "SPAWN",
      subtitle: "AMAZING",
      excerpt:
        "Strange Places, published May 19, 1956, during the darkest war we all hope to see. Save was launched in the backrooms, and lets see how far that",
      additionalText:
        " epic story unfolds. Al Simmons returns from the dead as a Hellspawn, caught between the forces of Heaven and Hell.",
    },
  ];

  return (
    <div className={`home-page ${isDarkMode ? "dark-theme" : ""}`}>
      {/* Hero Slider */}
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDE_IMAGES.map((img, i) => (
            <div className="slide" key={i}>
              <img src={img} alt={`Slide ${i + 1}`} className="slide-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Purple Call-to-Action Banner */}
      <div className="top-banner">Read ARACHNID #1 for free!</div>

      {/* Pagination Dots */}
      <div className="slider-dots-wrapper">
        <div className="slider-dots">
          {SLIDE_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Free Comics Section */}
      <h2 className="section-title">free comic issues!</h2>
      <div className="comics-section">
        {comicsData.map((comic) => (
          <div className="comic-issue" key={comic.id}>
            <img
              src={comic.image}
              alt={`${comic.title} Comic`}
              className="comic-cover"
            />
            <div className="comic-info">
              <h3 className="comic-title">{comic.title}</h3>
              {comic.subtitle && (
                <p className="comic-subtitle">{comic.subtitle}</p>
              )}
              <p className="comic-excerpt">
                {comic.excerpt}
                {expandedComic === comic.id && (
                  <span className="comic-additional-text">
                    {comic.additionalText}
                  </span>
                )}
              </p>
              <span
                className="read-more"
                onClick={() => toggleComicDetails(comic.id)}
              >
                {expandedComic === comic.id ? "Less" : "More"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* News Preview Section */}
      <h2 className="section-title">news</h2>
      <div className="news-section">
        <div className="news-article">
          <img src={newsDrawingImg} alt="News 1" className="news-image" />
          <p className="news-description">
            Raw talent on the rise with RENEGADE, 100% hand drawn launching
            March 1st 2026
          </p>
          <p className="news-date">December 21, 2025</p>
        </div>
        <div className="news-article">
          <img src={newsNinjaImg} alt="News 2" className="news-image" />
          <p className="news-description">
            First look at Mark of Ninja, bringing together top underground
            creators
          </p>
          <p className="news-date">December 29, 2025</p>
        </div>
      </div>

      {/* Navigation Button to News Page */}
      <div className="news-btn-container">
        <button className="more-news-button" onClick={() => navigate("/news")}>
          More news
        </button>
      </div>
    </div>
  );
};

export default HomePage;
