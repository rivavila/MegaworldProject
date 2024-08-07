/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/slide-show.css';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function UploadImage() {
    const [newSlideImgs, setNewSlideImgs] = useState([]);
    const [files, setFiles] = useState([]);

    // Handle file drop
    const onDrop = useCallback((acceptedFiles) => {
        const newImgs = acceptedFiles.map(file => URL.createObjectURL(file));
        setNewSlideImgs(prevImgs => [...prevImgs, ...newImgs]);
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
        multiple: true // Allow multiple files
    });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload response:', response.data);
            // Reset the image list after submission
            setNewSlideImgs([]);
            setFiles([]);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };

    return (
        <div className='container mt-3'>
            <div className="mb-3">
                <label htmlFor="projectSlideImg" className="form-label fs-5">Upload Images</label>
                <div
                    {...getRootProps()}
                    className="dropzone border border-secondary rounded p-3 text-center"
                    style={{ cursor: 'pointer' }}  // Inline style to set cursor
                >
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default UploadImage;
