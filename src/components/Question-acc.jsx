import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>  
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <IoIosArrowDown />}
        </button>
      </header>
      {showInfo && (
        <section>
          {info.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
      )}
    </article>
  );
};

export default Question;
