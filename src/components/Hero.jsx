import React from 'react';
import css from './Hero.module.scss';
import './hero.css'
import {motion} from "framer-motion";
import { FcSearch } from "react-icons/fc";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import {fadeIn, slideIn, staggerContainer} from "../utils/motion";
import IMG from "../assets/GD-HD.png"
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.25}}
        
        className={`innerWidth ${css.container}`}>


            {/* {Upper Elements} */}
            <div className={css.upperElements}>
                <motion.span 
                variants={fadeIn("right","tween",0.2,1)}
                className="primaryText">
                    Hello, I'm <br/>
                    Professor <br/> Ganesh Deshmukh
                </motion.span>
                <motion.span 
                 variants={fadeIn("left","tween",0.2,1)}
                className="secondaryText">  
                   Unleashing Creativity in Engineering <br/>Education and Innovation
                </motion.span>
            </div>
            {/* Person Image */}
            <motion.div 
            variants={fadeIn("up","tween",0.3,1)}
            className={css.person}>
                <motion.img
                 variants={slideIn("up","tween",0.5,1.3)}
                src={IMG} alt="person" />
            </motion.div>

            {/* lower elements */}
            <div className={css.lowerElements}>
                <div className={css.experience}>
                    <div className="primaryText">
                        12 +
                    </div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                    </div>
                    <div className={css.certificate}>
                    <div className="about__cards">
        


          <article className="about__card">
          <FcSearch  className="about__icon"/>
            <h5>Reaserch Papers</h5>
            <small>8+ Published</small>
          </article>


          <article className="about__card">
          <FcPodiumWithSpeaker className="about__icon"/>
            <h5>Talks</h5>
            <small>12+ Invited Talks</small>
          </article>
          </div>

                    </div>
                </div>
            </motion.div>
    </section>
  )
}

export default Hero
