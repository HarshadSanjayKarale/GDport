import React from 'react';
import css from './Publication.module.scss';
import {motion} from 'framer-motion';
import { staggerChildren } from '../utils/motion';

const publication = () => {
  return (
    <motion.section
        variants = {staggerChildren}
        intial = "hidden"
        whileInView = "show"
        viewport = {{once:false,amount:0.25}}
        className={`paddings ${css.wrapper}`}
    >
        <div className={`flexCe${css.container}`}>
         <span className="primaryText yPaddings">
            My work experience
         </span>
        </div>
    </motion.section>
  )
}

export default publication
