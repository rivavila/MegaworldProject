import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from './widgets/BreadCrumb';
import ProjectContent from './widgets/ProjectContent';
import ProjectInquire from './widgets/ProjectInquire';
import states from './assets/projects.json';


function ProjectPage() {
    const { projectNo } = useParams();
    const project = states.find(state => state.projectNo === projectNo);

    if (!project) {
        return <div>Project not found</div>;
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            {/* Full-width slider */}
            <div className="slider-container">
                <Slider {...settings}>
                    {project.projectData.projectSlideImg.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img src={require(`./assets/img/${img}`)} alt={`Slide ${index + 1}`} style={{ width: '100%', height: "40vh"}}/>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Two-column layout */}
            <div className="mx-5">
                <div className="row mt-4">
                    <div className="col-lg-9">
                        <BreadCrumb projectTitle={project.projectData.projectTitle} />

                        <div className="p-3 mt-3">
                            <ProjectContent project={project} />
                            {/* Left Content */}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="p-3">
                            <ProjectInquire project={project} />
                            {/* Right Content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
