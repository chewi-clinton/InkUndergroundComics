import React from "react";
import "../styles/NewsPage.css";

// Using your existing images as placeholders
import newsImg1 from "../assets/twitter.jpg";
import newsImg2 from "../assets/youtube.jpg";
import newsImg3 from "../assets/instagram.jpg";
import newsImg4 from "../assets/twitter.jpg";

const NEWS_ITEMS = [
  {
    id: 1,
    date: "December 1, 2025",
    title:
      "First look at Mark of Ninja, which brings together the ideas of two tops creators in the underground",
    description:
      "Discover the collaboration between two visionary creators bringing their unique styles together in this groundbreaking series.",
    image: newsImg1,
  },
  {
    id: 2,
    date: "November 27, 2025",
    title:
      "First look at Mark of Ninja, which brings together the ideas of two tops creators in the underground",
    description:
      "Discover the collaboration between two visionary creators bringing their unique styles together in this groundbreaking series.",
    image: newsImg2,
  },
  {
    id: 3,
    date: "November 17, 2025",
    title:
      "First look at Mark of Ninja, which brings together the ideas of two tops creators in the underground",
    description:
      "Discover the collaboration between two visionary creators bringing their unique styles together in this groundbreaking series.",
    image: newsImg3,
  },
  {
    id: 4,
    date: "November 3, 2025",
    title:
      "First look at Mark of Ninja, which brings together the ideas of two tops creators in the underground",
    description:
      "Discover the collaboration between two visionary creators bringing their unique styles together in this groundbreaking series.",
    image: newsImg4,
  },
];

const NewsPage = () => {
  return (
    <div className="np-container">
      {/* Breadcrumbs */}
      <nav className="np-breadcrumbs">
        HOME <span className="np-slash">/</span>{" "}
        <span className="np-current">NEWS</span>
      </nav>

      <h1 className="np-main-title">NEWS</h1>

      <div className="np-list">
        {NEWS_ITEMS.map((item) => (
          <article key={item.id} className="np-item">
            <div className="np-image-wrapper">
              <img src={item.image} alt="News" className="np-img" />
            </div>

            <div className="np-content">
              <span className="np-date">{item.date}</span>
              <h2 className="np-item-title">{item.title}</h2>
              <p className="np-description">{item.description}</p>
              <button className="np-read-more">Read more</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
