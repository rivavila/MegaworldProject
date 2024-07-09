import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard({ image, title, address, description, link }) {
    return (
        <div className="col-md-3">
            <img src={image} alt={title} className="img-fluid" style={{ height: '25vh', width: '50vh' }} />
            <div className="container my-3">
                <h5><Link to={link} className="text-decoration-none">{title}</Link></h5>
                {address && <p style={{ fontSize: '13px' }}>{address}</p>}
                {description && <p className="description">{description}</p>}
            </div>
        </div>
    );
}

export default ProjectCard;
