import React from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {
    FaTachometerAlt,
    FaAddressBook,
    FaChartBar,
    FaYoutube,
    FaChalkboard
  } from "react-icons/fa";

  import title from "../../assets/title.png";


  import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
            <FaBars id='btn' />
            <IoCloseSharp id='cancel' />
            </label>
                <img src={title}></img>
            <ul>

                <li><Link to="/"><FaTachometerAlt />  Home</Link></li>
                <li><Link to="/about"><FaAddressBook /> Publication</Link></li>
                <li><a href='https://drive.google.com/drive/folders/1Tw2jrl7RBJQeBfp9DfU8kj7BxrT1ITSr?usp=drive_link'><FaChalkboard/> Study Material</a></li>
                <li><a href='https://www.youtube.com/channel/UC5d03LHy5Ny82hrnhw3ZMTQ'><FaYoutube/> Youtube</a></li>
                <li><Link to="/gallery"><FaChartBar /> Gallery</Link></li>
                <li><Link to="/contact"><IoIosContact /> Contact</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;
