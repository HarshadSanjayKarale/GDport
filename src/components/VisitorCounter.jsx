import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        await axios.get('https://api.countapi.xyz/hit/gdcount/gdcounter');
        setVisitorCount(prevCount => prevCount + 1);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    // Automatically increment visitor count when component mounts
    incrementVisitorCount();
  }, []);

  return (
    <div className="visitor-counter-container">
      <div className="visitor-counter">
        <h2>Visitor Count: {visitorCount}</h2>
      </div>
    </div>
  );
};

export default VisitorCounter;
