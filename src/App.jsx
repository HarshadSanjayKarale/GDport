import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure to import Routes
// import About from './components/About';
import Accordian from './components/Accordian';
import Project from './components/Project';
import Hero from './components/Hero';
// import Publication from './components/publication';
import css from './styles/app.module.scss';
import { FaBars } from 'react-icons/fa';
import Footer from './components/Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={css.navbar}>
      <div className={css['navbar-toggle']} aria-label="Toggle navigation" onClick={toggleNavbar}>
        <FaBars className={css['navbar-toggle-icon']} />
      </div>
      <div className={css.title}>
        Ganesh Deshmukh
      </div>
      <ul className={`${css['navbar-list']} ${isOpen ? css.show : ''}`}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Publication</Link></li>
        <li><a href='https://drive.google.com/drive/folders/1Tw2jrl7RBJQeBfp9DfU8kj7BxrT1ITSr?usp=drive_link'>StudyMaterial</a></li>
         <li><a href='https://www.youtube.com/channel/UC5d03LHy5Ny82hrnhw3ZMTQ'>Youtube</a></li>
       <li><Link to="/gallery">Gallary</Link></li>
      </ul>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <div className={`bg-primary ${css.container}`}>
        <Navbar />
        <Routes> {/* Wrap your Routes within a Routes component */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={  <Project />} />
          {/* Add more routes for other components */}
        </Routes>
        <Accordian/>
        <Footer/>
        {/* <Publication /> */}
      </div>
    </Router>
  );
};

export default App;
