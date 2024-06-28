import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic2 from './Assets/Img/sampleImage2.jpg';
import pic3 from './Assets/Img/sampleImage3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from './widgets/BreadCrumb';
import ProjectContent from './widgets/ProjectContent';
import ProjectInquire from './widgets/ProjectInquire';

function ProjectPage() {
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
            <div>
                <Slider {...settings} className="full-width-slider">
                    <div>
                        <img src={pic2} alt="Estate Pic" className="img-fluid" />
                    </div>
                    <div>
                        <img src={pic3} alt="Estate Pic" className="img-fluid" />
                    </div>
                </Slider>
            </div>

            {/* Two-column layout */}
            <div className="mx-5">
                <div className="row mt-4">
                    <div className="col-lg-9">
                        <BreadCrumb></BreadCrumb>

                        <div className="p-3 mt-3">
                            <ProjectContent></ProjectContent>
                            {/* Left Content */}

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="p-3">
                            <ProjectInquire></ProjectInquire>
                            {/* Right Content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
