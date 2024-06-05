function Footer() {
    return (
        <div className="Footer" style={{ backgroundColor: '#13385d' }}>
            <div className="container">

                <div className="row text-white">

                    <div className="col-md-3 my-3">
                        <h6>CONTACT US</h6>
                        <hr className="me-5" style={{ borderColor: 'white', borderWidth: '4px' }} />
                        <div className="my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <text className="text-decoration-none text-white mx-1">
                                (+63)9178403037
                            </text>
                        </div>
                        <div className="my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <text className="text-decoration-none text-white mx-1">
                                sales@megaworldproperties.com
                            </text>
                        </div>
                    </div>

                    <div className="col-md-3 my-3">
                        <h6>QUICK LNKS</h6>
                        <hr className="me-5" style={{ borderColor: 'white', borderWidth: '4px' }} />
                        <ul className="list-unstyled">
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Projects</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Townships</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">News</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">About</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 my-3">
                        <h6>INFORMATION</h6>
                        <hr className="me-5" style={{ borderColor: 'white', borderWidth: '4px' }} />
                        <ul className="list-unstyled">
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">News and Update</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Videos</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">Awards</a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link text-white" href="/">About Megaworld</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 my-3">
                        <h6>NEWSLETTER</h6>
                        <hr className="me-5" style={{ borderColor: 'white', borderWidth: '4px' }} />
                        <p>To be updated on our news and promotions, join our mailing list.</p>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" aria-label="Search"></input>
                            <button class="btn btn-primary" type="submit">Join</button>
                        </form>

                        <h6 className="mt-3">Follow Us</h6>
                        <hr className="me-5" style={{ borderColor: 'white', borderWidth: '4px' }} />
                        <div>
                            <a href="/" className="text-decoration-none text-white mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>

                            <a href="/" className="text-decoration-none text-white mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                            </a>

                            <a href="/" className="text-decoration-none text-white mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row text-white text-center">
                <p>
                    All information, pictures and images on this site are copyrighted material and owned by their respective creators or owners.
                </p>
                <p>
                    Copyright © 2005-2024 www.megaworldproperties.com
                </p>
                <p>
                    All plans, information in this website are for identification and reference only. All details are subject to change without prior notice and do not form part of an offer or contract.
                </p>
            </div>
        </div>
    );
}

export default Footer;
