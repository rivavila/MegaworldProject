import './App.css';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Footer from './Components/Footer';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <div className="NavbarContainer">
        <Navbar />
      </div>
      <div className='my-5'>
        <Project />
      </div>
      <div className= "FooterContainer position-fluid bottom-0 w-100">
        <Footer />
      </div>
    </div>
  );
}

export default App;
