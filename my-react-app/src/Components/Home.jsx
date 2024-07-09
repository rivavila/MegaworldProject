/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import ParkMckinleyWestHome from "./assets/img/ParkMckinleyWestHome.jpg";
import "./assets/css/home.css";
import "./assets/css/pagination.css";

const itemsPerPage = 5; // Number of items to show per page

const Home = () => {
  // Sample list of items to paginate
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`)
  );

  // State to track current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <div className="contact-container">
        <img
          src={ParkMckinleyWestHome}
          alt="ParkMckinleyWestHome"
          style={{ width: "auto", height: "400px" }}
        />
      </div>

      <link
        rel="stylesheet"
        href="https://megaworldproperties.com/assets/css/search.css"
      />

      <div className="text-banners">
        <div id="back-text">
          <center>WHAT ARE YOU LOOKING FOR?</center>
        </div>
        <h1 id="front-text">
          <center>MEGAWORLD PROPERTIES</center>
        </h1>
      </div>

      <div className="search-box">
        <div id="city-box">
          <span id="search-criteria-title">Location</span>
          <div className="dropdown">
            <select id="cityDropdown" className="dropbtn" onChange={() => "#"}>
              <option value="">Any Location</option>
              <option value="Makati City">Makati City</option>
              <option value="Taguig City">Taguig City</option>
              <option value="Pasay City">Pasay City</option>
              <option value="Pasig City">Pasig City</option>
              <option value="Cavite City">Cavite City</option>
              <option value="Batangas City">Batangas City</option>
              <option value="Parañaque City">Parañaque City</option>
              <option value="Cebu City">Cebu City</option>
              <option value="Bacolod City">Bacolod City</option>
              <option value="Pampanga City">Pampanga City</option>
            </select>
          </div>
        </div>

        <div id="price-box">
          Price Range
          <br />
          <div className="dropdown">
            <select id="priceDropdown" className="dropbtn" onChange={() => "#"}>
              <option value="Any Price">Any Price</option>
              <option value="1M to 3M">1M to 3M</option>
              <option value="5M to 8M">5M to 8M</option>
              <option value="8M and Above">8M and Above</option>
            </select>
          </div>
        </div>

        <div id="unit-box">
          Unit
          <br />
          <div className="dropdown">
            <select id="unitDropdown" className="dropbtn" onChange={() => "#"}>
              <option value="Any Unit">Any Unit</option>
              <option value="Condominium">Condominium</option>
              <option value="House and Lot">House and Lot</option>
              <option value="Lot Only">Lot Only</option>
              <option value="Hotels">Hotels</option>
              <option value="Offices">Offices</option>
            </select>
          </div>
        </div>

        <div id="button-box">
          <button onClick={() => "#"} id="search-btn1">
            <span>
              <i className="fas fas fa-search"></i>Search
            </span>
          </button>
        </div>
      </div>

      <div className="text-banners">
        <div id="back-text">
          <center>EXPLORE, STAY OR WORK</center>
        </div>
        <h1 id="front-text">
          <center>EXPERIENCE THE FINEST TOWNSHIPS</center>
        </h1>
      </div>

      {/* Add some townships slicker mode */}

      <div className="text-banners">
        <div id="back-text">
          <center>OUR OFFERS ARE GREAT</center>
        </div>
        <h1 id="front-text">
          <center>POPULAR PROJECTS</center>
        </h1>
      </div>

      <div style={{ textAlign: "center" }}>
        <div>
          <div
            className="btn-group"
            style={{ margin: "20px", backgroundColor: "white" }}
            role="group"
            aria-label="RFO or Pre-selling"
          >
            <button
              type="button"
              className="btn btn-secondary on-hover-btn"
              onClick={() => ""}
              style={{ backgroundColor: "rgb(8, 54, 90)", borderRadius: "0px" }}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-secondary on-hover-btn"
              onClick={() => ""}
              style={{ backgroundColor: "rgb(8, 54, 90)", borderRadius: "0px" }}
            >
              RFO
            </button>
            <button
              type="button"
              className="btn btn-secondary on-hover-btn"
              onClick={() => ""}
              style={{ backgroundColor: "rgb(8, 54, 90)", borderRadius: "0px" }}
            >
              PRESELLING
            </button>
          </div>
        </div>
      </div>

      {/* Pagination controls */}
      <div style={{ textAlign: "center" }}>
        <div className="pagination">
          <a href="#" onClick={() => handlePageChange(currentPage - 1)}>
            &laquo;
          </a>
          {Array.from({ length: totalPages }, (_, index) => (
            <a
              key={index}
              href="#"
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </a>
          ))}
          <a href="#" onClick={() => handlePageChange(currentPage + 1)}>
            &raquo;
          </a>
        </div>
      </div>



       {/* Pagination controls at the bottom */}
       <div style={{ textAlign: "center" }}>
        <div className="pagination">
          <a href="#" onClick={() => handlePageChange(currentPage - 1)}>
            &laquo;
          </a>
          {Array.from({ length: totalPages }, (_, index) => (
            <a
              key={index}
              href="#"
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </a>
          ))}
          <a href="#" onClick={() => handlePageChange(currentPage + 1)}>
            &raquo;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
