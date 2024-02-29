import React, { useState } from 'react';
import data from './data-acc';
import SingleQuestion from './Question-acc';
import './Accordian.css'

function Accordian() {
  const [questions, setQuestions] = useState(data);
  
  return (
    <main>
      <div className='container'>
        <h3>About Me</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordian;
