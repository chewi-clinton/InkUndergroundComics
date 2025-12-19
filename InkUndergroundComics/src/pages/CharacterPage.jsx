import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CharacterPage.css";

// Reusing images from your HomePage code as placeholders
import sliderImg1 from "../assets/instagram.jpg";
import sliderImg2 from "../assets/twitter.jpg";
import sliderImg3 from "../assets/youtube.jpg";
import hellboyImg from "../assets/youtube.jpg";
import supremePowerImg from "../assets/instagram.jpg";
import spawnImg from "../assets/twitter.jpg";
import newsDrawingImg from "../assets/youtube.jpg";
import newsNinjaImg from "../assets/twitter.jpg";

// Data for the Hero Slider
const SLIDES = [
  {
    image: sliderImg1,
    title: "NIGHT WING",
    slug: "nightwing",
    description:
      "Dick Grayson is a highly skilled vigilante who began his crime-fighting career as Batman's sidekick Robin before becoming the hero Nightwing and occasionally taking up the mantle of Batman himself.",
    buttonText: "GET TO KNOW NIGHT WING",
  },
  {
    image: sliderImg2,
    title: "BATMAN",
    slug: "batman",
    description:
      "The Dark Knight of Gotham City. A symbol of fear to criminals and a beacon of hope to the innocent, protecting the city from the shadows.",
    buttonText: "GET TO KNOW BATMAN",
  },
  {
    image: sliderImg3,
    title: "SUPERMAN",
    slug: "superman",
    description:
      "The Man of Steel. Born on Krypton and raised on Earth, he uses his immense powers to protect humanity and stand for truth and justice.",
    buttonText: "GET TO KNOW SUPERMAN",
  },
];

// Data for the Grid (Using your images as placeholders)
const HEROES = [
  { id: 1, name: "DAREDEVIL", slug: "daredevil", img: hellboyImg },
  { id: 2, name: "CYCLOPS", slug: "cyclops", img: supremePowerImg },
  { id: 3, name: "LUKE CAGE", slug: "luke-cage", img: spawnImg },
  { id: 4, name: "SWAMP THING", slug: "swamp-thing", img: newsDrawingImg },
  { id: 5, name: "TWO FACE", slug: "two-face", img: newsNinjaImg },
  { id: 6, name: "SLADE", slug: "slade", img: sliderImg1 },
  { id: 7, name: "WEB SLINGER", slug: "web-slinger", img: sliderImg2 },
  { id: 8, name: "BOOSTER GOLD", slug: "booster-gold", img: sliderImg3 },
];

const AUTO_SLIDE_INTERVAL = 5000;

const CharacterPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // Navigate to character detail page
  const handleCharacterClick = (slug) => {
    navigate(`/characters/${slug}`);
  };

  const handleSlideButtonClick = (slug) => {
    navigate(`/characters/${slug}`);
  };

  return (
    <div className="character-page">
      {/* --- Slider Section --- */}
      <div className="cp-slider-wrapper">
        <div className="cp-slider-container">
          <div
            className="cp-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div className="cp-slide" key={i}>
                {/* Text Overlay */}
                <div className="cp-slide-content">
                  <h1 className="cp-hero-name">{slide.title}</h1>
                  <p className="cp-hero-desc">{slide.description}</p>
                  <button
                    className="cp-hero-btn"
                    onClick={() => handleSlideButtonClick(slide.slug)}
                  >
                    {slide.buttonText}
                  </button>
                </div>

                {/* Image & Gradient */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="cp-slide-image"
                />
                <div className="cp-image-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="cp-slider-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`cp-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* --- Breadcrumbs --- */}
      <div className="cp-breadcrumbs">
        <span className="crumb-link">HOME</span>
        <span className="crumb-slash">/</span>
        <span className="crumb-current">CHARACTERS</span>
      </div>

      {/* --- Heroes Grid Section --- */}
      <div className="cp-content-container">
        <h2 className="cp-section-title">HEROES BREAKING THROUGH</h2>

        <div className="cp-heroes-grid">
          {HEROES.map((hero) => (
            <div
              className="cp-hero-card"
              key={hero.id}
              onClick={() => handleCharacterClick(hero.slug)}
              style={{ cursor: "pointer" }}
            >
              <div className="cp-hero-img-wrapper">
                <img src={hero.img} alt={hero.name} className="cp-hero-img" />
              </div>
              <h3 className="cp-hero-card-name">{hero.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
