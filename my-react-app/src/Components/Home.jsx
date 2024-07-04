import React from "react";
import "./Assets/CSS/home.css";

const PropertySearch = () => {
  return (
    <div>
      <div className="header-image">
        <img
          src="/my-react-app/src/Components/Assets/Img/ParkMckinleyWestHome.jpg"
          alt="Park McKinley West"
          className="image"
        />
        <div className="overlay">
          <h1>Park McKinley West</h1>
          <p>2 Bedroom Units Available</p>
          <p>Tower C</p>
          <button className="inquire-button">Inquire Now!</button>
        </div>
      </div>
      <div className="search-container">
        <h2>What Are You Looking For?</h2>
        <h3>Megaworld Properties</h3>
        <form className="search-form">
          <select className="search-field">
            <option value="">Any Location</option>
            {/* Add more location options here */}
          </select>
          <select className="search-field">
            <option value="">Any Price</option>
            {/* Add more price range options here */}
          </select>
          <select className="search-field">
            <option value="">Any Unit</option>
            {/* Add more unit options here */}
          </select>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="popular-projects">
        <h2>Explore, Stay or Work</h2>
        <h3>Experience the Finest Townships</h3>
        <div className="project-carousel">
          <div className="carousel-item">
            <img src="/path/to/image1.png" alt="Project 1" />
            <p>Northwin Global City</p>
          </div>
          <div className="carousel-item">
            <img src="/path/to/image2.png" alt="Project 2" />
            <p>The Upper East</p>
          </div>
          <div className="carousel-item">
            <img src="/path/to/image3.png" alt="Project 3" />
            <p>Uptown Bonifacio</p>
          </div>
          <div className="carousel-item">
            <img src="/path/to/image4.png" alt="Project 4" />
            <p>Project Name</p>
          </div>
          <div className="carousel-item">
            <img src="/path/to/image5.png" alt="Project 5" />
            <p>Project Name</p>
          </div>
        </div>
        <h3>Our Offers Are Great</h3>
        <h4>Popular Projects</h4>
        <div className="filter-buttons">
          <button className="filter-button">All</button>
          <button className="filter-button">RFO</button>
          <button className="filter-button">PRESELLING</button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
