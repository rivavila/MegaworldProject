import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App"> {/* Apply the App class here */}
        <div className="Navbar">
          <Navbar />
        </div>

        <div className='Content'>
          <Routes>
            <Route path='/projects' element={<Project />} />
            <Route path='/projects/:id' element={<ProjectPage />} />
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
