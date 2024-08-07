/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjectCard from "./widgets/ProjectCard";
import states from "./assets/projects.json";
import "./assets/css/pagination.css"; // Import pagination styles

const itemsPerPage = 8; // Number of items to show per page

const Townships = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Filter the projects to include only those with type "Townships"
    const townshipProjects = states.filter(state => state.type === "Townships").map((state) => ({
        image: state.projectData.projectCover,
        title: state.projectData.projectTitle,
        address: state.projectData.projectAddress,
        description: state.projectData.projectDescription.join(" "), // Join description array into a single string
        link: `/projects/${state.projectNo}`
    }));

    const totalPages = Math.ceil(townshipProjects.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = townshipProjects.slice(startIndex, endIndex);

    return (
        <div className="Township">
            <div className="text-banners">
                <div id="back-text">
                    <center>EXPLORE, STAY OR WORK</center>
                </div>
                <h1 id="front-text">
                    <center>EXPERIENCE THE FINEST TOWNSHIPS</center>
                </h1>
            </div>

            <div className="text-banners">

                <div style={{fontSize: "24px"}}>
                    <center>Choose from these 17 Townships of Megaworld!</center>
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
    );
}

export default Townships;
