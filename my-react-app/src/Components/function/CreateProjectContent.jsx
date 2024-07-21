import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/slide-show.css';
import { useDropzone } from 'react-dropzone';
import DeleteButton from '../widgets/DeleteButton';

function CreateProjectContent() {
    const [projectData, setProjectData] = useState({
        projectTitle: '',
        projectDescription: '',
        projectAddress: '',
        projectLocation: '',
        projectFeature: [],
        projectEstablishment: [],
        projectUniqueFeature: [],
        projectSlides: [],
        projectStartDate: '',
        projectEndDate: '',
        projectBudget: '',
        projectVideo: '', // Added projectVideo to the state
    });

    const [newFeature, setNewFeature] = useState('');
    const [newEstablishment, setNewEstablishment] = useState('');
    const [newUniqueFeature, setNewUniqueFeature] = useState('');
    const [newSlideTitle, setNewSlideTitle] = useState('');
    const [newSlideImgs, setNewSlideImgs] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectData);
        // Add form submission logic here
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

                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label fs-5">Project Description</label>
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        className="form-control"
                        value={projectData.projectDescription}
                        onChange={(e) => setProjectData({ ...projectData, projectDescription: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectAddress" className="form-label fs-5">Project Address</label>
                    <input
                        type="text"
                        id="projectAddress"
                        name="projectAddress"
                        className="form-control"
                        value={projectData.projectAddress}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectLocation" className="form-label fs-5">Project Location (Google Maps Embed URL)</label>
                    <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        className="form-control"
                        value={projectData.projectLocation}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectStartDate" className="form-label fs-5">Project Start Date</label>
                    <input
                        type="date"
                        id="projectStartDate"
                        name="projectStartDate"
                        className="form-control"
                        value={projectData.projectStartDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectEndDate" className="form-label fs-5">Project End Date</label>
                    <input
                        type="date"
                        id="projectEndDate"
                        name="projectEndDate"
                        className="form-control"
                        value={projectData.projectEndDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectBudget" className="form-label fs-5">Project Budget</label>
                    <input
                        type="number"
                        id="projectBudget"
                        name="projectBudget"
                        className="form-control"
                        value={projectData.projectBudget}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectVideo" className="form-label fs-5">Project Video (YouTube ID)</label>
                    <input
                        type="text"
                        id="projectVideo"
                        name="projectVideo"
                        className="form-control"
                        value={projectData.projectVideo}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectFeature" className="form-label fs-5">Feature</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectFeature"
                            className="form-control"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={addFeature}
                        >
                            Add
                        </button>
                    </div>
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

                <div className="mb-3">
                    <label htmlFor="projectEstablishment" className="form-label fs-5">Establishment</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectEstablishment"
                            className="form-control"
                            value={newEstablishment}
                            onChange={(e) => setNewEstablishment(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={addEstablishment}
                        >
                            Add
                        </button>
                    </div>
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

                <div className="mb-3">
                    <label htmlFor="projectUniqueFeature" className="form-label fs-5">Unique Feature</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="projectUniqueFeature"
                            className="form-control"
                            value={newUniqueFeature}
                            onChange={(e) => setNewUniqueFeature(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={addUniqueFeature}
                        >
                            Add
                        </button>
                    </div>
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

                <div className="mb-3">
                    <label htmlFor="projectSlideTitle" className="form-label fs-5">Slide Title</label>
                    <input
                        type="text"
                        id="projectSlideTitle"
                        className="form-control"
                        value={newSlideTitle}
                        onChange={(e) => setNewSlideTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectSlideImg" className="form-label fs-5">Slide Images</label>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop images here, or click to select multiple</p>
                    </div>
                    {newSlideImgs.length > 0 && (
                        <div className="mt-2">
                            {newSlideImgs.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Preview ${index}`}
                                    className="img-thumbnail me-2"
                                    style={{ width: '25%', height: '25%' }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={addSlide}
                >
                    Add Slide
                </button>

                <div className="mb-3">
                    <ul className="list-group">
                        {projectData.projectSlides.map((slide, index) => (
                            <li key={index} className="list-group-item mb-3">
                                <h5>Slide Title: {slide.projectSlideTitle}</h5>
                                <div className="d-flex flex-wrap">
                                    {slide.projectImgs.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={img}
                                            alt={`Slide ${index} Image ${imgIndex}`}
                                            className="img-thumbnail me-2 mb-2"
                                            style={{ width: '25%', height: '25%' }}
                                        />
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3 mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProjectContent;
