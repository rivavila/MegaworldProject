import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/CSS/slide-show.css';

function ProjectContent({ project }) {
    const [mainImage, setMainImage] = useState('');
    const sliderRef = useRef(null);

    useEffect(() => {
        if (project.projectData.projectDevelopmentImg.length > 0) {
            setMainImage(project.projectData.projectDevelopmentImg[0]);
        }
    }, [project]);

    const settings = {
        initialSlide: 1, // Start with the first image centered
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
        beforeChange: (current, next) => {
            // Accessing the slider images and setting main image when slider changes
            const sliderImages = project.projectData.projectDevelopmentImg;
            setMainImage(sliderImages[next]);
        }
    };

    const handleSlideClick = (img) => {
        setMainImage(img);
        // Find the index of clicked image in the slider images and move slider to that index
        const index = project.projectData.projectDevelopmentImg.indexOf(img);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div>
            {/* Render project title if included */}
            {project.projectStructure.includes('projectTitle') && (
                <div className='my-3'>
                    <h4>{project.projectData.projectTitle}</h4>
                </div>
            )}

            {/* Render project description if included */}
            {project.projectStructure.includes('projectDescription') && (
                <div className='my-3'>
                    {project.projectData.projectDescription.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>
            )}

            {/* Render project feature if included */}
            {project.projectStructure.includes('projectFeature') && (
                <div className='my-5'>
                    <h4>Feature</h4>
                    <ul className='mt-3'>
                        {project.projectData.projectFeature.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Render project establishment if included */}
            {project.projectStructure.includes('projectEstablisment') && (
                <div className='my-5'>
                    <h4>Establishment</h4>
                    <ul className='mt-3'>
                        {project.projectData.projectEstablisment.map((est, index) => (
                            <li key={index}>{est}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Render project unique features if included */}
            {project.projectStructure.includes('projectUniqueFeatured') && (
                <div className='my-5'>
                    <h4>Unique Features</h4>
                    {project.projectData.projectUniqueFeatured.map((unique, index) => (
                        <p key={index}>{unique}</p>
                    ))}
                </div>
            )}

            {/* Render project address if included */}
            {project.projectStructure.includes('projectAddress') && (
                <div className='my-5'>
                    <h4>Address</h4>
                    <p>{project.projectData.projectAddress}</p>
                </div>
            )}

            {/* Render project location map if included */}
            {project.projectStructure.includes('projectLocation') && (
                <div className='my-5'>
                    <h4>Location</h4>
                    <div style={{ width: '100%', height: '310px' }}>
                        <iframe
                            title="Project Location"
                            src={project.projectData.projectLocation}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Render project development images title if included */}
            {project.projectStructure.includes('projectDevelopmentImg') && (
                <div className='my-5'>
                    <h4>{project.projectData.projectSlideTitle}</h4>
                </div>
            )}

            {/* Render main image */}
            {project.projectStructure.includes('projectDevelopmentImg') && mainImage && (
                <div className='text-center'> {/* Centering the main image */}
                    <img src={require(`../assets/img/${mainImage}`)} alt="Main" className="img-fluid" style={{ height: '38vh', width: '55vh' }} />
                </div>
            )}

            {/* Render slider with development images if included */}
            {project.projectStructure.includes('projectDevelopmentImg') && (
                <div className='text-center'>
                    <div className="my-2" style={{ width: '70%', margin: '0 auto' }}>
                        <Slider {...settings} ref={sliderRef}>
                            {project.projectData.projectDevelopmentImg.map((img, index) => (
                                <div key={index} onClick={() => handleSlideClick(img)}>
                                    <img src={require(`../assets/img/${img}`)} alt={`Slide ${index + 1}`} className="img-fluid" style={{ height: '150px' }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ProjectContent;
