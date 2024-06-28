import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Project from './Components/Project';
import ProjectPage from './Components/ProjectPage';
import Contact from './Components/Contact';
// import Settings from './Components/Settings';
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
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/contact/:id" element={<Contact />} />
            {/* <Route path="/settings/:id" element={<Settings />} /> */}
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
