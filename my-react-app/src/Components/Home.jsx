/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ProjectCard from "./widgets/ProjectCard";
import states from "./assets/projects.json";
import ParkMckinleyWestHome from "./assets/img/ParkMckinleyWestHome.jpg";
import "./assets/css/home.css";
import "./assets/css/pagination.css";

const itemsPerPage = 4; // Number of items to show per page

const Home = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("All"); // State to track filter type

  // Placeholder for fetching news data from an API
  useEffect(() => {
    // Example:
    // fetch('https://api.example.com/news')
    //   .then(response => response.json())
    //   .then(data => setNews(data));
  }, []);

  // Assuming `states` is correctly imported and contains project data
  const projects = states.map((state) => ({
    image: state.projectData.projectCover,
    title: state.projectData.projectTitle,
    address: state.projectData.projectAddress,
    description: state.projectData.projectDescription.join(" "),
    link: `/projects/${state.projectNo}`,
    type: state.projectData.projectType, // Assuming projectType exists in your data
  }));

  // Function to filter projects based on the selected type
  const filterProjects = () => {
    if (filterType === "All") {
      return projects;
    } else {
      return projects.filter((project) => project.type === filterType);
    }
  };

  const totalPages = Math.ceil(filterProjects().length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filterProjects().slice(startIndex, endIndex);

  return (
    <div>
      <div className="home-container">
        <div className="home-image">
          <img
            src={ParkMckinleyWestHome}
            alt="ParkMckinleyWestHome"
            style={{
              width: "800px",
              height: "250px",
              display: "block", // Ensure the image is displayed as a block element
              margin: "0 auto", // Center the image horizontally using auto margins
            }}
          />
        </div>
      </div>

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
            <select id="cityDropdown" className="dropbtn">
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
            <select id="priceDropdown" className="dropbtn">
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
            <select id="unitDropdown" className="dropbtn">
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
          <button id="search-btn1">
            <span>
              <i className="fas fa-search"></i>Search
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

      <div className="Project">
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
                className={`btn btn-secondary on-hover-btn ${
                  filterType === "All" ? "active" : ""
                }`}
                onClick={() => setFilterType("All")}
                style={{
                  backgroundColor: "rgb(8, 54, 90)",
                  borderRadius: "0px",
                }}
              >
                All
              </button>
              <button
                type="button"
                className={`btn btn-secondary on-hover-btn ${
                  filterType === "RFO" ? "active" : ""
                }`}
                onClick={() => setFilterType("RFO")}
                style={{
                  backgroundColor: "rgb(8, 54, 90)",
                  borderRadius: "0px",
                }}
              >
                RFO
              </button>
              <button
                type="button"
                className={`btn btn-secondary on-hover-btn ${
                  filterType === "PRESELLING" ? "active" : ""
                }`}
                onClick={() => setFilterType("All")}
                style={{
                  backgroundColor: "rgb(8, 54, 90)",
                  borderRadius: "0px",
                }}
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

        <div className="container-fluid my-5">
          <div className="row">
            {currentProjects.map((project, index) => (
              <ProjectCard
              key={index}
              image={require(`./assets/img/${project.image}`)}
              title={project.title}
              address={project.address}
              description={project.description}
              link={project.link}
            />
            ))}
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
      </div>

      <div className="text-banners">
        <h1 id="back-text">
          <center>LATEST NEWS FROM US</center>
        </h1>
        <h1 id="front-text">
          <center>NEWS AND UPDATES</center>
        </h1>
        {news.length > 0 &&
          news.map((item, index) => (
            // eslint-disable-next-line react/jsx-no-undef
            <NewsItem
              key={index}
              title={item.title}
              date={item.date}
              content={item.content}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
