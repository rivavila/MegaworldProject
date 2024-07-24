/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/slide-show.css';
import { useDropzone } from 'react-dropzone';
import DeleteButton from '../widgets/DeleteButton';
import axiosInstance from '../../axiosConfig';

function CreateProjectContent() {
    const [projectData, setProjectData] = useState({
        projectTitle: '',
        projectDescription: [],
        projectAddress: '',
        projectLocation: '',
        projectFeature: [],
        projectEstablishment: [],
        projectUniqueFeature: [],
        projectSlides: [],
        projectStartDate: '',
        projectEndDate: '',
        projectBudget: '',
        projectVideo: '',
        projectCover: '',
        type: 'Project',
        projectPricing: '',
        projectAmenities: []
    });

    const [newFeature, setNewFeature] = useState('');
    const [newEstablishment, setNewEstablishment] = useState('');
    const [newUniqueFeature, setNewUniqueFeature] = useState('');
    const [newSlideTitle, setNewSlideTitle] = useState('');
    const [newSlideImgs, setNewSlideImgs] = useState([]);
    const [newDescription, setNewDescription] = useState('');
    const [newAmenity, setNewAmenity] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setProjectData({
            ...projectData,
            projectCover: e.target.files[0]
        });
    };

    const addFeature = () => {
        if (newFeature.trim() !== '') {
            setProjectData({
                ...projectData,
                projectFeature: [...projectData.projectFeature, newFeature]
            });
            setNewFeature('');
        }
    };

    const deleteFeature = (index) => {
        setProjectData({
            ...projectData,
            projectFeature: projectData.projectFeature.filter((_, i) => i !== index)
        });
    };

    const addEstablishment = () => {
        if (newEstablishment.trim() !== '') {
            setProjectData({
                ...projectData,
                projectEstablishment: [...projectData.projectEstablishment, newEstablishment]
            });
            setNewEstablishment('');
        }
    };

    const deleteEstablishment = (index) => {
        setProjectData({
            ...projectData,
            projectEstablishment: projectData.projectEstablishment.filter((_, i) => i !== index)
        });
    };

    const addUniqueFeature = () => {
        if (newUniqueFeature.trim() !== '') {
            setProjectData({
                ...projectData,
                projectUniqueFeature: [...projectData.projectUniqueFeature, newUniqueFeature]
            });
            setNewUniqueFeature('');
        }
    };

    const deleteUniqueFeature = (index) => {
        setProjectData({
            ...projectData,
            projectUniqueFeature: projectData.projectUniqueFeature.filter((_, i) => i !== index)
        });
    };

    const addDescription = () => {
        if (newDescription.trim() !== '') {
            setProjectData({
                ...projectData,
                projectDescription: [...projectData.projectDescription, newDescription]
            });
            setNewDescription('');
        }
    };

    const deleteDescription = (index) => {
        setProjectData({
            ...projectData,
            projectDescription: projectData.projectDescription.filter((_, i) => i !== index)
        });
    };

    const addAmenity = () => {
        if (newAmenity.trim() !== '') {
            setProjectData({
                ...projectData,
                projectAmenities: [...projectData.projectAmenities, newAmenity]
            });
            setNewAmenity('');
        }
    };

    const deleteAmenity = (index) => {
        setProjectData({
            ...projectData,
            projectAmenities: projectData.projectAmenities.filter((_, i) => i !== index)
        });
    };

    const onDrop = useCallback((acceptedFiles) => {
        setNewSlideImgs([...newSlideImgs, ...acceptedFiles.map(file => URL.createObjectURL(file))]);
    }, [newSlideImgs]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    const addSlide = () => {
        if (newSlideTitle.trim() !== '' && newSlideImgs.length > 0) {
            setProjectData({
                ...projectData,
                projectSlides: [
                    ...projectData.projectSlides,
                    { projectSlideTitle: newSlideTitle, projectImgs: newSlideImgs }
                ]
            });
            setNewSlideTitle('');
            setNewSlideImgs([]);
        }
    };

    const deleteSlide = (index) => {
        setProjectData({
            ...projectData,
            projectSlides: projectData.projectSlides.filter((_, i) => i !== index)
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
        ].filter(key => projectData[key] && projectData[key].length > 0);

        const finalData = {
            projectNo: generateProjectNo(),
            projectCode: generateProjectCode(projectData.projectTitle),
            type: projectData.type,
            projectData: {
                ...projectData,
                projectCover: projectData.projectCover.name, // assuming you want to save only the file name
                projectSlides: projectData.projectSlides
            },
            projectInquire: {
                projectPricing: projectData.projectPricing,
                projectAmenities: projectData.projectAmenities
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
                        value={projectData.projectTitle}
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
                        value={projectData.type}
                        onChange={handleChange}
                    >
                        <option value="Townfield">Townfield</option>
                        <option value="Project">Project</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectCover" className="form-label fs-5">Project Cover</label>
                    <input
                        type="file"
                        id="projectCover"
                        name="projectCover"
                        className="form-control"
                        onChange={handleFileChange}
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label fs-5">Project Description</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectDescription"
                            className="form-control"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />

                    </div>
                </div>

                <div className='mb-3'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addDescription}
                    >
                        Add
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectDescription.map((description, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="d-flex align-items-center fs-6 flex-grow-1 me-2">
                                    {description}
                                </span>
                                <DeleteButton onClick={() => deleteDescription(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectFeature" className="form-label fs-5">Features</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectFeature"
                            className="form-control"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                        />

                    </div>
                </div>

                <div className='mb-3'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addFeature}
                    >
                        Add
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectFeature.map((feature, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="d-flex align-items-center fs-6 flex-grow-1 me-2">
                                    {feature}
                                </span>
                                <DeleteButton onClick={() => deleteFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectEstablishment" className="form-label fs-5">Establishments</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectEstablishment"
                            className="form-control"
                            value={newEstablishment}
                            onChange={(e) => setNewEstablishment(e.target.value)}
                        />

                    </div>
                </div>

                <div className='mb-3'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addEstablishment}
                    >
                        Add
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectEstablishment.map((establishment, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="d-flex align-items-center fs-6 flex-grow-1 me-2">
                                    {establishment}
                                </span>
                                <DeleteButton onClick={() => deleteEstablishment(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectUniqueFeature" className="form-label fs-5">Unique Features</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectUniqueFeature"
                            className="form-control"
                            value={newUniqueFeature}
                            onChange={(e) => setNewUniqueFeature(e.target.value)}
                        />

                    </div>
                </div>

                <div className='mb-3'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addUniqueFeature}
                    >
                        Add
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectUniqueFeature.map((uniqueFeature, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="d-flex align-items-center fs-6 flex-grow-1 me-2">
                                    {uniqueFeature}
                                </span>
                                <DeleteButton onClick={() => deleteUniqueFeature(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectAmenities" className="form-label fs-5">Amenities</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectAmenities"
                            className="form-control"
                            value={newAmenity}
                            onChange={(e) => setNewAmenity(e.target.value)}
                        />

                    </div>
                </div>


                <div className='mb-3'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addAmenity}
                    >
                        Add
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectAmenities.map((amenity, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="d-flex align-items-center fs-6 flex-grow-1 me-2">
                                    {amenity}
                                </span>
                                <DeleteButton onClick={() => deleteAmenity(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="projectSlideTitle" className="form-label fs-5">Slide Title</label>
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
                    <label htmlFor="projectSlideImg" className="form-label fs-5">Slide Images</label>
                    <div {...getRootProps()} className="dropzone border border-secondary rounded p-3 text-center">
                        <input {...getInputProps()} />
                        <p className="mb-0">Drag & drop images here, or click to select images</p>
                    </div>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {newSlideImgs.map((img, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <img src={img} alt={`Slide ${index + 1}`} className="img-thumbnail me-2" style={{ width: '25%', height: '25%' }} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <button type="button" className="btn btn-secondary" onClick={addSlide}>
                        Add Slide
                    </button>
                </div>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectSlides.map((slide, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <div className="flex-grow-1 me-2">
                                    <h5 className="mb-1">{slide.projectSlideTitle}</h5>
                                    <div className="d-flex">
                                        {slide.projectImgs.map((img, imgIndex) => (
                                            <img key={imgIndex} src={img} alt={`Slide ${index + 1} - Image ${imgIndex + 1}`} className="img-thumbnail me-2" style={{ width: '25%', height: '25%' }} />
                                        ))}
                                    </div>
                                </div>
                                <DeleteButton onClick={() => deleteSlide(index)} />
                            </li>
                        ))}
                    </ul>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default CreateProjectContent;
