import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import BreakBar from './components/BreakBar';
import ContactForm from './components/ContactForm';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const scrollToComponent = (id) => {
    const component = document.getElementById(id);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrolled={scrolled} scrollToComponent={scrollToComponent} />
      <Hero className={scrolled? 'scrolled' : ''} />
      <BreakBar id="break-bar" />
      <ProjectGallery id="project-gallery" />
      <ContactForm id="contact" />
    </div>
  );
}

export default App;