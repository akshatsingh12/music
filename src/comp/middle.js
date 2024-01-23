import React, { useEffect } from 'react'
import './middle.css'
const Middle = () => {
  useEffect(() => {
    // Use useEffect to add the 'show' class after the component mounts
    const startingAnimation = document.querySelector('.starting-animation');
    startingAnimation.classList.add('show');
  }, []);
  return (
    <>
    <div className="starting-animation-container">
    <div className="starting-animation">
    <span className="word">Welcomec</span>
    <span className="word">to </span>
    <span className="word">Music </span>
    <span className="word">Portal</span>
  </div>
</div>
    </>
  )
}

export default Middle
