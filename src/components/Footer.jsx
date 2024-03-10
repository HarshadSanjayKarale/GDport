import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import VisitorCounter from './VisitorCounter';



const Footer = () => {
  return (
    <footer>
      <img src='src\assets\title.png'></img>
    <div className="footer__socials">
        <a href="https://www.facebook.com/ganesh.deshmukh.505523"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/ganeshdeshmukh1205/"><FiInstagram/></a>
        <a href="https://www.youtube.com/@ganeshdeshmukh7469"><FiYoutube /></a>
        <a href="https://www.linkedin.com/in/ganesh-deshmukh-45a96372/"><CiLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;All rights reserved.</small>
      </div>

      <div className="visitorcount">
        <VisitorCounter/>
      </div>
     </footer>
  )
}

export default Footer
