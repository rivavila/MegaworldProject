import React, { useState, useEffect } from "react";
import "./assets/CSS/news.css";
import "./assets/CSS/home.css";

// NewsItem component to display individual news
const NewsItem = ({ title, date, content }) => (
  <div className="news-item">
    <h2>{title}</h2>
    <p>
      <em>{date}</em>
    </p>
    <p>{content}</p>
  </div>
);

// News component to fetch and display news items
const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Placeholder for fetching news data from an API
    // Example:
    // fetch('https://api.example.com/news')
    //   .then(response => response.json())
    //   .then(data => setNews(data));
  }, []);

  return (
    <div className="text-banners">
      <div id="back-text">
        <center>Latest News from Us</center>
      </div>
      <h1 id="front-text">
        <center>NEWS AND UPDATES</center>
      </h1>
      {news.length > 0 &&
        news.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            date={item.date}
            content={item.content}
          />
        ))}
    </div>
  );
};

export default News;
