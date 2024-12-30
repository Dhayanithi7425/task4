import Home from './Home';
import About from './About';
import Contact from './Conatct';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {

  const handleRefresh = (e) => {
    e.preventDefault(); 
    window.location.reload(); 
  };
  return (
    <Router>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <img
              src="./src/th.jpg"
              alt="Logo"
            />
            Dhayanithi  
          </a>
          <ul className="nav-links">
            
            <li>
              <a href="/" onClick={handleRefresh}>ABC</a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer for copyright */}
      <footer className="footer">
        <p>&copy; 2024 Dhayanithi. All Rights Reserved.</p>  {/* Updated copyright name */}
      </footer>
    </Router>
  );
}

export default App;
