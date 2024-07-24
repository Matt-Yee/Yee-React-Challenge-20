import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = ({ scrollToComponent }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.001) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToComponent('break-bar'); }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToComponent('project-gallery'); }}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToComponent('contact'); }}>Contact</a></li>
          {/* <li><a href="#">Resume</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  scrollToComponent: PropTypes.func.isRequired,
};

export default Navbar;