import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';
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
            <Route path="/projects/:projectNo" element={<ProjectPage />} />
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
