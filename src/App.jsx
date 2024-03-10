import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accordian from './components/Accordian';
import Project from './components/Project';
import Hero from './components/Hero';
import Footer from './components/Footer';
import css from './styles/app.module.scss';
import { FaBars } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={css.navbar}>
//       <div className={css['navbar-toggle']} aria-label="Toggle navigation" onClick={toggleNavbar}>
//         <FaBars className={css['navbar-toggle-icon']} />
//       </div>
//       <div className={css.title}>
//         Ganesh Deshmukh
//       </div>
//       <ul className={`${css['navbar-list']} ${isOpen ? css.show : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">Publication</Link></li>
//         <li><a href='https://drive.google.com/drive/folders/1Tw2jrl7RBJQeBfp9DfU8kj7BxrT1ITSr?usp=drive_link'>StudyMaterial</a></li>
//         <li><a href='https://www.youtube.com/channel/UC5d03LHy5Ny82hrnhw3ZMTQ'>Youtube</a></li>
//         <li><Link to="/gallery">Gallery</Link></li>
//       </ul>
//     </nav>
//   );
// };

const App = () => {
  return (
    <Router>
      <div className={`bg-primary ${css.container}`}>
          <div className="css.navbar">
              <Navbar/>
          </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Project />} />
        </Routes>
        <Accordian />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
