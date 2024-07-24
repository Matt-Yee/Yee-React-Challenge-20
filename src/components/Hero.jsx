import React, { useState, useEffect } from 'react';
import './hero.css';
import backgroundReelUrl from '../assets/backgroundReel.mp4?url';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <video
        autoPlay
        loop
        muted
        className={isScrolled ? 'blurred' : ''}
      >
        <source src={backgroundReelUrl} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Matt Yee</h1>
        <p>web developer</p>
      </div>
    </div>
  );
};

export default Hero;