import React from "react";
import "../styles/CharacterDetailPage.css";

// Reusing images from your previous code as placeholders
import daredevilImg from "../assets/youtube.jpg";
import twoFaceImg from "../assets/instagram.jpg";
import sladeImg from "../assets/twitter.jpg";
import webSlingerImg from "../assets/youtube.jpg";
import boosterImg from "../assets/instagram.jpg";
import cyclopsImg from "../assets/twitter.jpg";

const CharacterDetailPage = () => {
  const relatedCharacters = [
    { id: 1, name: "TWO FACE", img: twoFaceImg },
    { id: 2, name: "SLADE", img: sladeImg },
    { id: 3, name: "WEB SLINGER", img: webSlingerImg },
    { id: 4, name: "BOOSTER", img: boosterImg },
    { id: 5, name: "CYCLOPES", img: cyclopsImg },
  ];

  return (
    <div className="cdp-container">
      {/* --- Breadcrumbs --- */}
      <nav className="cdp-breadcrumbs">
        HOME <span className="cdp-slash">/</span> CHARACTERS{" "}
        <span className="cdp-slash">/</span>{" "}
        <span className="cdp-current">DAREDEVIL</span>
      </nav>

      {/* --- Main Profile Section --- */}
      <section className="cdp-profile-section">
        <div className="cdp-profile-image-container">
          <img src={daredevilImg} alt="Daredevil" className="cdp-main-img" />
        </div>
        <div className="cdp-profile-info">
          <h1 className="cdp-hero-name">DAREDEVIL</h1>
          <p className="cdp-hero-bio">
            Blinded as a child by a radioactive substance, Matt Murdock may have
            lost his sight, but his remaining senses were heightened to
            superhuman levels, granting him a flawless 'radar sense' of the
            world around him. Having adopted the name Daredevil, Matt is a
            brilliant, highly successful defense attorney by day, but by night,
            he prowls the streets of Hell's Kitchen, New York, as a masterful
            acrobat and hand-to-hand combatant. Using his signature billy clubs
            and his Catholic faith as his moral compass, Matt is dedicated to
            seeking justice for the innocent, often walking a tightrope between
            the law he is sworn to uphold and the brutal vigilantism necessary
            to protect his city.
          </p>
        </div>
      </section>

      {/* --- Character Facts Banner --- */}
      <section className="cdp-facts-banner">
        <div className="cdp-facts-content">
          <h2 className="cdp-section-title">CHARACTER FACTS</h2>
          <div className="cdp-fact-item">
            <strong>Powers:</strong> combat skill, top level marksman, weapons
            expert
          </div>
          <div className="cdp-fact-item">
            <strong>First Appearance:</strong> THE FIGHTIN' 5 #40 (1966)
          </div>
          <div className="cdp-fact-item">
            <strong>Alias/Alter Ego:</strong> Christopher Smith
          </div>
        </div>
      </section>

      {/* --- Related Characters Grid --- */}
      <section className="cdp-related-section">
        <h2 className="cdp-section-title">RELATED CHARACTERS</h2>
        <div className="cdp-related-grid">
          {relatedCharacters.map((char) => (
            <div key={char.id} className="cdp-related-card">
              <div className="cdp-related-img-wrapper">
                <img
                  src={char.img}
                  alt={char.name}
                  className="cdp-related-img"
                />
              </div>
              <h3 className="cdp-related-name">{char.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharacterDetailPage;
