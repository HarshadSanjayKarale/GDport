import React from 'react'
import './project.css'
import IMG1 from "../assets/proj1.jpg";
import IMG2 from "../assets/proj2.png";
import IMG3 from "../assets/Proj3.png";
import IMG4 from "../assets/Proj4.jpg";
import IMG5 from "../assets/Proj5.jpg";
import IMG6 from "../assets/Proj6.jpeg";
import IMG7 from "../assets/proj7.svg";
// import IMG8 from "../assets/proj8.avif";


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
          <h3>Aishwarya Jadhav, Vishal , Gopal kabra ,Ganesh Deshmukh , " A Survey : Prediction of Diabetes Mellitus Using Machine Learning Techniques", Volume 15, Issue 7, July -2020.</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>A Wakde, P Shende, S Waydande, S Uttarwar, G Deshmukh  , " Comparative analysis of Hadoop tools and spark technology , International Conference on Computing, Communication, Control And Automation-IEEE-16th - 18th Aug 2018 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>VK Ganesh Deshmukh,Kaushal Dhabadge , Neha Kuvleka ,  "E-Business in Agriculture for Effective Communication between Merchants and Farmers", ,IJCA , volume 179-NO-44,May 2018 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
          </div>
          <h3>Ganesh Deshmukh ,vedant gavade ,  “Smart Navigational Shoes for Bikers/Cyclists” ,IJCA , volume 180-NO-41,May 2018. </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
          </div>
          <h3>GD, Aniket Nikam  , Nisha Warhade  , Rohit Dhawale  , Siddhant Prabhu , " Fully Automated System for Monitoring Water Usage using SMS and Android Application" ,Volume: 0 4 Issue: 05 May 2017 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>Ganesh Deshmukh, Nidhi Mutha1, Ekta Meel2, Ruchira Rokade3 , "  Patient Health Monitoring Using Android. Application” , IJCSITR Volume 3 Issue 4, 2015 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG7} alt="" />
          </div>
          <h3>Ganesh Deshmukh ,,Bhagyashreer Bhumkar1, Tejasvini Changal2, Bhagyashri Dahifaler3 ,"Automatic billing trolley using RFID and Zigbee with android App rewarding system” in IJRISE Volume 1 Issue 6, 2015 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>GD, Nidhi Mutha1, Ekta Meel2, Ruchira Rokade3 , "  Patient Health Monitoring Using Android. Application” , IJCSITR Volume 3 Issue 4, 2015 .</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='portfolio_btn' target='_blank' rel="noreferrer">Read About</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Project
