/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjectCard from "./widgets/ProjectCard";
import states from "./assets/projects.json";
import "./assets/css/pagination.css"; // Import pagination styles

const itemsPerPage = 8; // Number of items to show per page

const Project = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const projects = states.map((state) => ({
        image: state.projectData.projectCover,
        title: state.projectData.projectTitle,
        address: state.projectData.projectAddress,
        description: state.projectData.projectDescription.join(" "), // Join description array into a single string
        link: `/projects/${state.projectNo}`
    }));

    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    return (
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

            {/* New Button */}
            <button className="fixed-bottom-right-button">
                <a className="nav-link text-white" href="/create-project" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </a>
            </button>


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
    );
}

export default Project;
