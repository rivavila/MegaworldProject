/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/slide-show.css';
import { useDropzone } from 'react-dropzone';
import DeleteButton from '../widgets/DeleteButton';
import axiosInstance from '../../axiosConfig';

function CreateProjectContent() {
    const [formData, setProjectData] = useState({
        projectTitle: '',
        projectSlideImg: [],
        projectDescription: [],
        projectAddress: '',
        projectLocation: '',
        projectFeature: [],
        projectEstablishment: [],
        projectUniqueFeature: [],
        projectSlides: [],
        projectStartDate: '',
        projectEndDate: '',
        projectVideo: '',
        projectCover: '',
        type: 'Project',
        projectPricing: '',
        projectAmenities: [],
        projectWhatAround: []
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const [newFeature, setNewFeature] = useState('');
    const [newEstablishment, setNewEstablishment] = useState('');
    const [newUniqueFeature, setNewUniqueFeature] = useState('');
    const [newSlideTitle, setNewSlideTitle] = useState('');
    const [newSlideImgs, setNewSlideImgs] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(null);
    const [newDescription, setNewDescription] = useState('');
    const [newAmenity, setNewAmenity] = useState('');
    const [newWhatAround, setWhatAround] = useState('');
    const [coverPreview, setCoverPreview] = useState('');
    const [newSlideImages, setSlideImages] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setProjectData({
            ...formData,
            projectSlideImg: [...formData.projectSlideImg, ...files]
        });
    };

    // Toast state
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type = 'error') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ ...toast, show: false }), 3000); // Hide toast after 3 seconds
    };

    const addSlideImage = () => {
        if (currentSlideIndex !== null && newSlideImgs.trim() !== '') {
            const imgArray = newSlideImgs.split(',').map(img => img.trim());
            const updatedSlides = [...formData.projectSlides];
            updatedSlides[currentSlideIndex].projectImg = [
                ...updatedSlides[currentSlideIndex].projectImg,
                ...imgArray
            ];

            setProjectData({
                ...formData,
                projectSlides: updatedSlides
            });
            setNewSlideImgs('');
        }
    };


    const addSildeImages = () => {
        if (newSlideImages.trim() !== '') {
            setProjectData({
                ...formData,
                projectSlideImg: [...formData.projectSlideImg, newSlideImages]
            });
            setSlideImages('');
        }
    };

    const deleteSlideImages = (index) => {
        setProjectData({
            ...formData,
            projectSlideImg: formData.projectSlideImg.filter((_, i) => i !== index)
        });
    };

    const addFeature = () => {
        if (newFeature.trim() !== '') {
            setProjectData({
                ...formData,
                projectFeature: [...formData.projectFeature, newFeature]
            });
            setNewFeature('');
        }
    };

    const deleteFeature = (index) => {
        setProjectData({
            ...formData,
            projectFeature: formData.projectFeature.filter((_, i) => i !== index)
        });
    };

    const addEstablishment = () => {
        if (newEstablishment.trim() !== '') {
            setProjectData({
                ...formData,
                projectEstablishment: [...formData.projectEstablishment, newEstablishment]
            });
            setNewEstablishment('');
        }
    };

    const deleteEstablishment = (index) => {
        setProjectData({
            ...formData,
            projectEstablishment: formData.projectEstablishment.filter((_, i) => i !== index)
        });
    };

    const addUniqueFeature = () => {
        if (newUniqueFeature.trim() !== '') {
            setProjectData({
                ...formData,
                projectUniqueFeature: [...formData.projectUniqueFeature, newUniqueFeature]
            });
            setNewUniqueFeature('');
        }
    };

    const addSlideTitle = () => {
        if (newSlideTitle.trim() !== '') {
            setProjectData({
                ...formData,
                projectSlides: [
                    ...formData.projectSlides,
                    {
                        projectSlideTitle: newSlideTitle,
                        projectImg: []
                    }
                ]
            });
            setNewSlideTitle('');
            setCurrentSlideIndex(formData.projectSlides.length); // Set index to the newly added slide
        }
    };

    const deleteUniqueFeature = (index) => {
        setProjectData({
            ...formData,
            projectUniqueFeature: formData.projectUniqueFeature.filter((_, i) => i !== index)
        });
    };

    const addDescription = () => {
        if (newDescription.trim() !== '') {
            setProjectData({
                ...formData,
                projectDescription: [...formData.projectDescription, newDescription]
            });
            setNewDescription('');
        }
    };

    const deleteDescription = (index) => {
        setProjectData({
            ...formData,
            projectDescription: formData.projectDescription.filter((_, i) => i !== index)
        });
    };

    const addAmenity = () => {
        if (newAmenity.trim() !== '') {
            setProjectData({
                ...formData,
                projectAmenities: [...formData.projectAmenities, newAmenity]
            });
            setNewAmenity('');
        }
    };

    const deleteAmenity = (index) => {
        setProjectData({
            ...formData,
            projectAmenities: formData.projectAmenities.filter((_, i) => i !== index)
        });
    };

    const addWhatAround = () => {
        if (newWhatAround.trim() !== '') {
            setProjectData({
                ...formData,
                projectWhatAround: [...formData.projectWhatAround, newWhatAround]
            });
            setWhatAround('');
        }
    };

    const deleteWhatAround = (index) => {
        setProjectData({
            ...formData,
            projectWhatAround: formData.projectWhatAround.filter((_, i) => i !== index)
        });
    };

    const addSlide = () => {
        if (newSlideTitle.trim() !== '' && newSlideImgs.length > 0) {
            setProjectData({
                ...formData,
                projectSlides: [
                    ...formData.projectSlides,
                    {
                        projectSlideTitle: newSlideTitle,
                        projectImg: newSlideImgs
                    }
                ]
            });
            setNewSlideTitle('');
            setNewSlideImgs([]);
        }
    };

    const deleteSlide = (index) => {
        setProjectData({
            ...formData,
            projectSlides: formData.projectSlides.filter((_, i) => i !== index)
        });
    };

    const generateProjectNo = () => Math.floor(Math.random() * 1000000).toString();
    const generateProjectCode = (title) => title.split(' ').join('_');

    const validateForm = () => {
        const newErrors = {};
        if (!formData.projectTitle) newErrors.projectTitle = 'Project Title is required';
        if (!formData.projectCover) newErrors.projectCover = 'Project Cover is required';
        if (formData.projectSlideImg.length === 0) newErrors.projectSlideImg = 'At least one Slide Image is required';
        if (formData.projectDescription.length === 0) newErrors.projectDescription = 'At least one Description is required';
        if (!formData.projectPricing) newErrors.projectPricing = 'Project Pricing is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            showToast('Please fix the errors in the form.');
            return;
        }

        const projectStructure = [
            "projectSlideImg",
            "projectTitle",
            "projectDescription",
            "projectFeature",
            "projectUniqueFeature",
            "projectEstablishment",
            "projectAddress",
            "projectVideo",
            "projectLocation",
            "projectSlideTitle",
            "projectSlides"
        ].filter(key => formData[key] && formData[key].length > 0);

        const finalData = {
            projectNo: generateProjectNo(),
            projectCode: generateProjectCode(formData.projectTitle),
            type: formData.type,
            projectData: {
                projectTitle: formData.projectTitle,
                projectSlideImg: formData.projectSlideImg,
                projectDescription: formData.projectDescription,
                projectFeature: formData.projectFeature,
                projectAddress: formData.projectAddress,
                projectLocation: formData.projectLocation,
                projectVideo: formData.projectVideo,
                projectCover: formData.projectCover,
                projectSlides: formData.projectSlides,
                projectEstablishment: formData.projectEstablishment,
                projectUniqueFeature: formData.projectUniqueFeature
            },
            projectInquire: {
                projectPricing: formData.projectPricing,
                projectAmenities: formData.projectAmenities,
                projectWhatAround: formData.projectWhatAround
            },
            projectStructure,
            suggestedProjects: []
        };

        try {
            await axiosInstance.post('/projects', finalData);
            console.log('Project added successfully');
            navigate('/projects');
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="projectTitle" className="form-label fs-5">
                        Project Title
                        {errors.projectTitle && <span className="text-danger"> - {errors.projectTitle}</span>}
                    </label>
                    <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        className="form-control"
                        value={formData.projectTitle}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="type" className="form-label fs-5">Type</label>
                    <select
                        id="type"
                        name="type"
                        className="form-select"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="Townfield">Townfield</option>
                        <option value="Project">Project</option>
                    </select>
                </div>

                {/* Project Cover */}
                <div className="mb-3">
                    <label htmlFor="projectCover" className="form-label fs-5">
                        Project Cover
                        {errors.projectCover && <span className="text-danger"> - {errors.projectCover}</span>}
                    </label>
                    <input
                        type="text"
                        id="projectCover"
                        name="projectCover"
                        className="form-control"
                        value={formData.projectCover}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                {/* Slide Images */}
                <div className="mb-3">
                    <label className="form-label fs-5">
                        Slide Images (File Name ex. sample.jpeg)
                        {errors.projectSlideImg && <span className="text-danger"> - {errors.projectSlideImg}</span>}
                    </label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newSlideImages}
                            onChange={(e) => setSlideImages(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addSildeImages}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectSlideImg.map((feature, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {feature}
                                <DeleteButton onClick={() => deleteSlideImages(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectAddress" className="form-label fs-5">Project Address</label>
                    <input
                        type="text"
                        id="projectAddress"
                        name="projectAddress"
                        className="form-control"
                        value={formData.projectAddress}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectLocation" className="form-label fs-5">Project Location (Get the value of the iframe src from embed a map)</label>
                    <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        className="form-control"
                        value={formData.projectLocation}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectVideo" className="form-label fs-5">Project Video (get the key from the url ex. "WGd4dtHTw5Q")</label>
                    <input
                        type="text"
                        id="projectVideo"
                        name="projectVideo"
                        className="form-control"
                        value={formData.projectVideo}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectPricing" className="form-label fs-5">
                        Project Pricing
                        {errors.projectPricing && <span className="text-danger"> - {errors.projectPricing}</span>}
                    </label>
                    <input
                        type="text"
                        id="projectPricing"
                        name="projectPricing"
                        className="form-control"
                        value={formData.projectPricing}
                        onChange={handleChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Feature</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addFeature}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectFeature.map((feature, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {feature}
                                <DeleteButton onClick={() => deleteFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Establishment</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newEstablishment}
                            onChange={(e) => setNewEstablishment(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addEstablishment}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectEstablishment.map((establishment, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {establishment}
                                <DeleteButton onClick={() => deleteEstablishment(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Unique Feature</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newUniqueFeature}
                            onChange={(e) => setNewUniqueFeature(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addUniqueFeature}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectUniqueFeature.map((uniqueFeature, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {uniqueFeature}
                                <DeleteButton onClick={() => deleteUniqueFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">
                        Project Description
                        {errors.projectDescription && <span className="text-danger"> - {errors.projectDescription}</span>}</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addDescription}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectDescription.map((description, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {description}
                                <DeleteButton onClick={() => deleteDescription(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Amenity</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newAmenity}
                            onChange={(e) => setNewAmenity(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addAmenity}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectAmenities.map((amenity, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {amenity}
                                <DeleteButton onClick={() => deleteAmenity(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project What Around</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newWhatAround}
                            onChange={(e) => setWhatAround(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addWhatAround}>Add</button>
                    </div>
                    <ul className="mt-2">
                        {formData.projectWhatAround.map((whatAround, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                {whatAround}
                                <DeleteButton onClick={() => deleteWhatAround(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Slide Title</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newSlideTitle}
                            onChange={(e) => setNewSlideTitle(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addSlideTitle}>Add Slide Title</button>
                    </div>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Slide Images (Comma-separated filenames)</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={newSlideImgs}
                            onChange={(e) => setNewSlideImgs(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary ms-2" onClick={addSlideImage}>Add Slide Images</button>
                    </div>
                </div>

                <hr />

                <div className="mb-3">
                    <label className="form-label fs-5">Project Slides</label>
                    <ul className="mt-2">
                        {formData.projectSlides.map((slide, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{slide.projectSlideTitle}</strong>
                                    <ul>
                                        {slide.projectImg.map((img, imgIndex) => (
                                            <li key={imgIndex}>{img}</li>
                                        ))}
                                    </ul>
                                </div>
                                <DeleteButton onClick={() => deleteSlide(index)} />
                            </li>
                        ))}
                    </ul>
                </div>



                <hr />

                <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-block">Submit</button>
                </div>
            </form>

            {/* New Button */}
            <button className="fixed-bottom-right-button">
                <a className="nav-link text-white" href="/upload-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                </a>
            </button>

            {/* Toast Container */}
            {toast.show && (
                <div className={`toast align-items-center text-bg-${toast.type} border-0`} role="alert">
                    <div className="d-flex">
                        <div className="toast-body">
                            {toast.message}
                        </div>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateProjectContent;
