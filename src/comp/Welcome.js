// WelcomeComponent.jsx

import React, { useEffect } from 'react';
import './WelcomeComponent.css'; // Import your CSS file

const Welcome = () => {
  useEffect(() => {
    // Use useEffect to add the 'show' class after the component mounts
    const welcomeAnimation = document.querySelector('.welcome-animation');
    welcomeAnimation.classList.add('show');
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-animation">
        <span className="word">Welcome</span>
        <span className="word">to</span>
        <span className="word">Music</span>
        <span className="word">Portal</span>
      </div>
    </div>
  );
};

export default Welcome;
