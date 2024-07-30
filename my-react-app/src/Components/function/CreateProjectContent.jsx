/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
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

    const [newFeature, setNewFeature] = useState('');
    const [newEstablishment, setNewEstablishment] = useState('');
    const [newUniqueFeature, setNewUniqueFeature] = useState('');
    const [newSlideTitle, setNewSlideTitle] = useState('');
    const [newSlideImgs, setNewSlideImgs] = useState([]);
    const [newDescription, setNewDescription] = useState('');
    const [newAmenity, setNewAmenity] = useState('');
    const [newWhatAround, setWhatAround] = useState('');
    const [coverPreview, setCoverPreview] = useState('');

    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProjectData({
            ...formData,
            projectCover: file
        });
        setCoverPreview(URL.createObjectURL(file));
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

    const onDrop = useCallback((acceptedFiles) => {
        setNewSlideImgs([...newSlideImgs, ...acceptedFiles]);
    }, [newSlideImgs]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

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

    const generateProjectNo = () => Math.floor(Math.random() * 1000000);
    const generateProjectCode = (title) => title.split(' ').join('_');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const projectStructure = [
            "projectSlideImg",
            "projectTitle",
            "projectDescription",
            "projectFeature",
            "projectAddress",
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
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="projectTitle" className="form-label fs-5">Project Title</label>
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
                    <label htmlFor="projectCover" className="form-label fs-5">Project Cover</label>
                    <input
                        type="file"
                        id="projectCover"
                        name="projectCover"
                        className="form-control"
                        onChange={handleFileChange}
                    />
                    {coverPreview && (
                        <div className="mt-2">
                            <img src={coverPreview} alt="Project Cover Preview" style={{ maxWidth: '200px' }} />
                        </div>
                    )}
                </div>

                <hr />

                {/* Slide Images */}
                <div className="mb-3">
                    <label htmlFor="slideImages" className="form-label fs-5">Slide Images</label>
                    <input
                        type="file"
                        id="slideImages"
                        name="slideImages"
                        className="form-control"
                        multiple
                        onChange={(e) => {
                            const files = Array.from(e.target.files);
                            setProjectData({
                                ...formData,
                                projectSlideImg: [...formData.projectSlideImg, ...files]
                            });
                        }}
                    />
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

                <div className="mb-3">
                    <label htmlFor="projectLocation" className="form-label fs-5">Project Location</label>
                    <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        className="form-control"
                        value={formData.projectLocation}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label fs-5">Project Description</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newDescription"
                            name="newDescription"
                            className="form-control"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addDescription}>Add</button>
                    <ul className="list-group">
                        {formData.projectDescription.map((desc, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {desc}
                                <DeleteButton onClick={() => deleteDescription(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectFeature" className="form-label fs-5">Project Feature</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newFeature"
                            name="newFeature"
                            className="form-control"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addFeature}>Add</button>
                    <ul className="list-group">
                        {formData.projectFeature.map((feature, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {feature}
                                <DeleteButton onClick={() => deleteFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectEstablishment" className="form-label fs-5">Project Establishment</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newEstablishment"
                            name="newEstablishment"
                            className="form-control"
                            value={newEstablishment}
                            onChange={(e) => setNewEstablishment(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addEstablishment}>Add</button>
                    <ul className="list-group">
                        {formData.projectEstablishment.map((establishment, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {establishment}
                                <DeleteButton onClick={() => deleteEstablishment(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectUniqueFeature" className="form-label fs-5">Project Unique Feature</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newUniqueFeature"
                            name="newUniqueFeature"
                            className="form-control"
                            value={newUniqueFeature}
                            onChange={(e) => setNewUniqueFeature(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addUniqueFeature}>Add</button>
                    <ul className="list-group">
                        {formData.projectUniqueFeature.map((uniqueFeature, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {uniqueFeature}
                                <DeleteButton onClick={() => deleteUniqueFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectSlideTitle" className="form-label fs-5">Project Slide Title</label>
                    <input
                        type="text"
                        id="projectSlideTitle"
                        name="projectSlideTitle"
                        className="form-control"
                        value={newSlideTitle}
                        onChange={(e) => setNewSlideTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectSlides" className="form-label fs-5">Project Slides</label>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag & drop some images here, or click to select files</p>
                    </div>
                    <div className="mt-3">
                        {newSlideImgs.map((file, index) => (
                            <div key={index} className="mb-2">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Slide ${index}`}
                                    style={{ maxWidth: '200px', marginRight: '10px' }}
                                />
                                <DeleteButton onClick={() => {
                                    setNewSlideImgs(newSlideImgs.filter((_, i) => i !== index));
                                }} />
                            </div>
                        ))}
                    </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={addSlide}>Add Slide</button>
                    <div className="mt-3">
                        {formData.projectSlides.map((slide, index) => (
                            <div key={index} className="mb-2">
                                <h5>{slide.projectSlideTitle}</h5>
                                {slide.projectImg.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={URL.createObjectURL(img)}
                                        alt={`Slide ${index} Img ${imgIndex}`}
                                        style={{ maxWidth: '200px', marginRight: '10px' }}
                                    />
                                ))}
                                <DeleteButton onClick={() => deleteSlide(index)} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectPricing" className="form-label fs-5">Project Pricing</label>
                    <input
                        type="text"
                        id="projectPricing"
                        name="projectPricing"
                        className="form-control"
                        value={formData.projectPricing}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectAmenities" className="form-label fs-5">Project Amenities</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newAmenity"
                            name="newAmenity"
                            className="form-control"
                            value={newAmenity}
                            onChange={(e) => setNewAmenity(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addAmenity}>Add</button>
                    <ul className="list-group">
                        {formData.projectAmenities.map((amenity, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {amenity}
                                <DeleteButton onClick={() => deleteAmenity(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectWhatAround" className="form-label fs-5">What's Around</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="newWhatAround"
                            name="newWhatAround"
                            className="form-control"
                            value={newWhatAround}
                            onChange={(e) => setWhatAround(e.target.value)}
                        />

                    </div>
                    <button type="button" className="btn btn-primary" onClick={addWhatAround}>Add</button>
                    <ul className="list-group">
                        {formData.projectWhatAround.map((whatAround, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {whatAround}
                                <DeleteButton onClick={() => deleteWhatAround(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default CreateProjectContent;
