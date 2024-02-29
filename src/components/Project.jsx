import React from 'react'
import './project.css'
import IMG1 from "../assets/project.jpg";
import IMG2 from "../assets/project.jpg";
import IMG3 from "../assets/project.jpg";
import IMG4 from "../assets/project.jpg";
import IMG5 from "../assets/project.jpg";
import IMG6 from "../assets/project.jpg";


const Project = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Research & Publications</h2>

      <div className='portfolio__container'>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Project
