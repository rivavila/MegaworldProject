import React from "react";
import pic from "./Assets/Img/sample Image.jpg";

function Project() {
    return (
        <div className="Project">
            <div className="text-center">
                <h5>POPULAR PROJECTS</h5>

                <div className="text-center mb-3">
                    <button className="btn btn-primary mr-2 btn-no-radius">ALL</button>
                    <button className="btn btn-primary mr-2 btn-no-radius">RFO</button>
                    <button className="btn btn-primary btn-no-radius">PRESELLING</button>
                </div>

                <h5>Showing 8 out of ## projects</h5>

                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">
                                Previous
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
                
            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5><a href="/" className="text-decoration-none">Northwin Global City</a></h5>
                            <p>
                                <strong>Northwin Global City, Marilao/Bocaue, Bulacan</strong>
                                <br />Located just 20 kilometers north of Metro Manila along North Luzon Expressway (NLEX), Northwin Global
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                            <p>
                                Northwin Global City, Marilao/Bocaue, Bulacan
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={pic} alt="Sample" className="img-fluid" />
                        <div className="container my-3">
                            <h5>Northwin Global City</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">

                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">
                                Previous
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    );
}

export default Project;
