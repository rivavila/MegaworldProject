import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Townships from './components/Townhips';
import CreateProject from './components/function/CreateProjectContent';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <Navbar />
        </div>

        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:projectNo" element={<ProjectPage />} />
            <Route path="/townships" element={<Townships />} />
            <Route path="/townships/:projectNo" element={<Townships />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="Footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
