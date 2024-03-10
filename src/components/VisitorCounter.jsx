import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, runTransaction, get } from 'firebase/database';

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBel8REOvKGPOp4-vVLDnbBovvj9wsHmdY",
  authDomain: "ganeshdeshmukh-6492e.firebaseapp.com",
  projectId: "ganeshdeshmukh-6492e",
  storageBucket: "ganeshdeshmukh-6492e.appspot.com",
  messagingSenderId: "847036173619",
  appId: "1:847036173619:web:d2cca31ea5435bd829c246",
  measurementId: "G-6W6FWY83LN",
  databaseURL: "https://ganeshdeshmukh-6492e-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const visitorCountRef = ref(database, 'visitorCount');

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        // Use transaction to increment visitor count atomically
        await runTransaction(visitorCountRef, (currentCount) => {
          return (currentCount || 0)+1;
        });

        // Retrieve updated visitor count
        const snapshot = await get(visitorCountRef);
        const updatedCount = snapshot.val();
        setVisitorCount((updatedCount-1) || 0);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    // Increment visitor count when component mounts
    incrementVisitorCount();
  }, []);

  return (
    <div className="visitor-counter-container">
      <div className="visitor-counter"> 
        <h2>Visitor Count: {(visitorCount - 1)} +</h2>
      </div>
    </div>
  );
};

export default VisitorCounter;
