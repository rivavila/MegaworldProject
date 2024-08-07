import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/slide-show.css';

function ProjectContent({ project }) {
    const [mainImages, setMainImages] = useState([]);
    const sliderRefs = useRef([]);

    useEffect(() => {
        if (project.projectData.projectSlides?.length > 0) {
            const initialImages = project.projectData.projectSlides.map(slide => slide.projectImg[0]);
            setMainImages(initialImages);
        }
    }, [project]);

    const settings = {
        initialSlide: 0,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
    };

    const handleSlideClick = (img, slideIndex) => {
        const newMainImages = [...mainImages];
        newMainImages[slideIndex] = img;
        setMainImages(newMainImages);

        const index = project.projectData.projectSlides[slideIndex].projectImg.indexOf(img);
        if (sliderRefs.current[slideIndex]) {
            sliderRefs.current[slideIndex].slickGoTo(index);
        }
    };

    return (
        <div>
            {project.projectStructure.includes('projectTitle') && (
                <div className='my-3'>
                    <h4>{project.projectData.projectTitle}</h4>
                </div>
            )}

            {project.projectStructure.includes('projectDescription') && (
                <div className='my-3'>
                    {project.projectData.projectDescription.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>
            )}

            {project.projectStructure.includes('projectVideo') && (
                <div className='my-5'>
                    <h4>{project.projectData.projectTitle} Video</h4>
                    <div className='text-center'>
                        <iframe
                            width="100%"
                            height="500"
                            src={`https://www.youtube.com/embed/${project.projectData.projectVideo}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

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

            {project.projectStructure.includes('projectEstablishment') && (
                <div className='my-5'>
                    <h4>Establishment</h4>
                    <ul className='mt-3'>
                        {project.projectData.projectEstablishment.map((est, index) => (
                            <li key={index}>{est}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.projectStructure.includes('projectUniqueFeature') && (
                <div className='my-5'>
                    <h4>Unique Features</h4>
                    {project.projectData.projectUniqueFeature.map((unique, index) => (
                        <p key={index}>{unique}</p>
                    ))}
                </div>
            )}

            {project.projectStructure.includes('projectAddress') && (
                <div className='my-5'>
                    <h4>Address</h4>
                    <p>{project.projectData.projectAddress}</p>
                </div>
            )}

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

            {project.projectStructure.includes('projectSlides') && project.projectData.projectSlides?.map((slide, slideIndex) => (
                <div key={slideIndex} className='my-5'>
                    <h4>{slide.projectSlideTitle}</h4>
                    {mainImages[slideIndex] && (
                        <div className='text-center'>
                            <img src={require(`../assets/img/${mainImages[slideIndex]}`)} alt="Main" className="img-fluid" style={{ height: '38vh', width: '55vh' }} />
                        </div>
                    )}
                    <div className='text-center'>
                        <div className="my-2" style={{ width: '70%', margin: '0 auto' }}>
                            <Slider {...settings} ref={el => (sliderRefs.current[slideIndex] = el)}>
                                {slide.projectImg.map((img, index) => (
                                    <div key={index} onClick={() => handleSlideClick(img, slideIndex)}>
                                        <img src={require(`../assets/img/${img}`)} alt={`Slide ${index + 1}`} className="img-fluid" style={{ height: '150px' }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectContent;
