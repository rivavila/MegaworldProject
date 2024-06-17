import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ image, title, description, link }) {
    return (
        <div className="col-md-3">
            <img src={image} alt={title} className="img-fluid" />
            <div className="container my-3">
                <h5><Link to={link} className="text-decoration-none">{title}</Link></h5>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

export default ProjectCard;
