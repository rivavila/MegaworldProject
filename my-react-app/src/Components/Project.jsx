import React from "react";
import ProjectCard from "./widgets/ProjectCard";
import states from "./Assets/projects.json";

function Project() {
    const projects = states.map((state) => ({
        image: state.projectData.projectCover,
        title: state.projectData.projectTitle,
        address: state.projectData.projectAddress,
        description: state.projectData.projectDescription.join(" "), // Join description array into a single string
        link: `/projects/${state.projectNo}`
    }));

    return (
        <div className="Project">
            <div className="text-center">
                <h5>POPULAR PROJECTS</h5>
                <div className="text-center mb-3">
                    <button className="btn btn-primary mr-2 btn-no-radius">ALL</button>
                    <button className="btn btn-primary mr-2 btn-no-radius">RFO</button>
                    <button className="btn btn-primary btn-no-radius">PRESELLING</button>
                </div>
                <h5>Showing {projects.length} out of ## projects</h5>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    {projects.map((project, index) => (
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

            <div className="text-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Project;
