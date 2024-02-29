import React from 'react'
import './about.css'
import aboutimg from '../assets/GDimg1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
 <section id="about">
  <h5>Get to Know</h5>
  <h2>About Me</h2>
  <div className="about__container">

    <div className="about__me">
      <div className="about__me-image">
      </div>
    </div>

    <div className="about__content">

        <div className="about__cards">
          <article className="about__card">
          <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>10+ Years Working</small>
          </article>


          <article className="about__card">
          <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>


          <article className="about__card">
          <VscFolderActive className="about__icon"/>
            <h5>Projects</h5>
            <small>10+ Years Working</small>
          </article>
          </div>

          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, impedit soluta sequi, omnis quia magnam fugit laborum exercitationem voluptatibus ipsa excepturi adipisci sunt nemo ut voluptates esse deserunt et aspernatur?</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

      
    </div>
  </div>
 </section>
  )
}

export default About
