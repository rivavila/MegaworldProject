import React from 'react';


function ProjectInquire() {
    return (
        <div>
            <hr />
            <div className='my-1'>
                <h4>Pricing Available Upon Inquiry</h4>
                <p className='my-5'>
                    Price estimate of Northwin Global City as of June 17, 2024.
                </p>
            </div>

            <hr />


            <form>
                <div className='my-1'>
                    <h4>Inquire Now</h4>
                    <p className='my-5'>
                        Interested with Northwin Global City? Send us an inquiry now so we can find the best unit for you.
                    </p>
                </div>

                <div class="mb-3">
                    <input type="fullName" class="form-control" id="exampleInputFullName" placeholder='Enter your full name' aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <input type="number" class="form-control" id="exampleInputNumber" placeholder='Contact Number' aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail" placeholder='Email Address' aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <input type="comment" class="form-control" id="exampleInputNumber" placeholder='Contact Number' aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='What do you need? Tell us so we can happily help you find it!' rows="3"></textarea>
                </div>

                <div className='my-1'>
                    <h4>Are you a broker or a buyer?</h4>
                    <p className='my-3'>
                        Let us know so we can assist you better!
                    </p>
                </div>

                <div class="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Broker
                    </label>
                </div>

                <div class="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Buyer
                    </label>
                </div>

                <div className='my-1'>
                    <h4>Preferred Viewing Schedule</h4>
                    <p className='my-1'>
                        If you want to have a viewing right away enter the days and time that you are available.
                    </p>
                </div>

                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='(e.g Monday to Sunday 8am - 12pm)' rows="3"></textarea>
                </div>

                <div className='my-1'>
                    <h4>Inquiry Feedback</h4>
                    <p className='my-1'>
                        Where do you want us to send feedback regarding your inquiry?
                    </p>
                </div>

                <div class="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Email Address
                    </label>
                </div>

                <div class="mb-3">
                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Contact Number
                    </label>
                </div>


                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="button">Inquire</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectInquire;
