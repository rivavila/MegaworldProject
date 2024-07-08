import React from 'react';
import '../assets/CSS/custom-breadcrumb.css';

const BreadCrumb = ({ projectTitle }) => {
    return (
        <div className='breadcrumb-container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" className="breadcrumb-link">Home</a></li>
                    <li className="breadcrumb-item"><a href="/projects" className="breadcrumb-link">Projects</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{projectTitle}</li>
                </ol>
            </nav>
        </div>
    );
}

export default BreadCrumb;
