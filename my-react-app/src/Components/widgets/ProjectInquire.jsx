import React from 'react';

function ProjectInquire({ project }) {
    const { projectTitle } = project.projectData;
    const { projectPricing, projectAmenities, projectWhatAround } = project.projectInquire;
    const projectImage = require(`../assets/img/${project.projectData.projectCover}`);
    const contactImage = require(`../assets/img/contact-us.jpg`);

    return (
        <div>
            <hr />
            <div className='my-1'>
                <h4 className='fs-5'>{projectPricing}</h4>
                <p className='my-5'>
                    Price estimate of {projectTitle} as of June 17, 2024.
                </p>

            </div>

            <hr />

            <form>
                <div className='my-1'>
                    <h4 className='fs-5'>Inquire Now</h4>
                    <p className='my-5'>
                        Interested with {projectTitle}? Send us an inquiry now so we can find the best unit for you.
                    </p>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Enter your full name' />
                </div>

                <div className="mb-3">
                    <input type="number" className="form-control" placeholder='Contact Number' />
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email Address' />
                </div>

                <div className="mb-3">
                    <textarea className="form-control" placeholder='What do you need? Tell us so we can happily help you find it!' rows="3"></textarea>
                </div>

                <div className='my-1'>
                    <h4 className='fs-5'>Are you a broker or a buyer?</h4>
                    <p className='my-3'>
                        Let us know so we can assist you better!
                    </p>
                </div>

                <div className="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Broker
                    </label>
                </div>

                <div className="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Buyer
                    </label>
                </div>

                <div className='my-1'>
                    <h4 className='fs-5'>Preferred Viewing Schedule</h4>
                    <p className='my-1'>
                        If you want to have a viewing right away enter the days and time that you are available.
                    </p>
                </div>

                <div className="mb-3">
                    <textarea className="form-control" placeholder='(e.g Monday to Sunday 8am - 12pm)' rows="3"></textarea>
                </div>

                <div className='my-1'>
                    <h4 className='fs-5'>Inquiry Feedback</h4>
                    <p className='my-1'>
                        Where do you want us to send feedback regarding your inquiry?
                    </p>
                </div>

                <div className="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="feedback" id="feedbackEmail" />
                    <label className="form-check-label" htmlFor="feedbackEmail">
                        Email Address
                    </label>
                </div>

                <div className="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="feedback" id="feedbackContact" />
                    <label className="form-check-label" htmlFor="feedbackContact">
                        Contact Number
                    </label>
                </div>

                <hr />
                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">Inquire</button>
                </div>
                <hr />
            </form>

            <img src={projectImage} alt={projectTitle} style={{ height: '25vh', width: '41vh' }} className='mb-3' />

            {projectAmenities && projectAmenities.length > 0 && (
                <div className='my-1 mb-3'>
                    <h4 className='fs-5'>Project Amenities</h4>
                    <ul>
                        {projectAmenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            )}

            {projectWhatAround && projectWhatAround.length > 0 && (
                <div className='my-1 mb-3'>
                    <h4 className='fs-5'>What's Around?</h4>
                    <ul>
                        {projectWhatAround.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            )}


            <div className="mb-3">
                <h4 className='fs-5'>Interested?</h4>
                <p className='my-1'>
                    Click the button to inquire.
                </p>
                <img src={contactImage} alt={projectTitle} style={{ height: '21vh', width: '41vh' }} />
            </div>

        </div>
    );
}

export default ProjectInquire;
