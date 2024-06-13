import React from 'react';
import './css/news.css';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header>
            <div className="contact-info">
                <p>
                    <i className="fas fa-phone"></i> +63 9178403037 <i className="fas fa-envelope"></i> sales@megaworldproperties.com
                </p>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li>
                        <a href="#">Townships</a>
                        <ul className="dropdown">
                            <li><a href="#">Township 1</a></li>
                            <li><a href="#">Township 2</a></li>
                        </ul>
                    </li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="logo">
                <h1>www.MEGAWORLDPROPERTIES.com</h1>
            </div>
        </header>
    );
}

function Main() {
    return (
        <main>
            <section className="news-updates">
                <h2>NEWS AND UPDATES</h2>
                <p>Latest news from us</p>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <div className="footer-section contact-us">
                <h3>CONTACT US</h3>
                <p><i className="fas fa-phone"></i> +63 9178403037</p>
                <p><i className="fas fa-envelope"></i> sales@megaworldproperties.com</p>
            </div>
            <div className="footer-section quick-links">
                <h3>QUICK LINKS</h3>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Townships</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
            <div className="footer-section information">
                <h3>INFORMATION</h3>
                <ul>
                    <li><a href="#">News and Updates</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Awards</a></li>
                    <li><a href="#">About Megaworld</a></li>
                </ul>
            </div>
            <div className="footer-section newsletter">
                <h3>NEWSLETTER</h3>
                <p>To be updated on our news and promotions, join our mailing list.</p>
                <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Join</button>
                </form>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default App;
