import React from 'react';
import project3Image from '../assets/ff.png';
import project2Image from '../assets/pokemonbanner.png';
import project1Image from '../assets/weatherbanner.png';

import './projectGallery.css';

const projects = [
  {
    id: 1,
    image: project3Image,
    description: 'Finance Frenzy: A MERN stack application to track personal finances, built with React, Node.js, Express, and MongoDB to help users manage their money. As a contributor, I implemented the backend API routes and the frontend components, and worked on the database schema and queries to store and retrieve user data.',
    githubUrl: 'https://github.com/Dylanslyter/HaukTuahFinance',
  },
  {
    id: 2,
    image: project2Image,
    description: 'Pokemon Team Builder: A SQL database application to build Pokemon teams, built with HTML, CSS, JavaScript, and MySQL to help users create and manage their Pokemon teams. As a contributor, I implemented the backend API routes and the favorite Pokemon feature that populates the user’s favorite Pokemon on the homepage, worked on the database schema and queries to store and retrieve user data, and log in and sign up functionality.',
    githubUrl: 'https://github.com/Dylanslyter/Pok-mon-deck-builder',
  },
  {
    id: 3,
    image: project1Image,
    description: 'Weather Dashboard: A weather dashboard application to check the weather, built with HTML, CSS, JavaScript, and the OpenWeather API to help users check the weather. As a contributor, I implemented the frontend components and the API requests to fetch and display the weather data, and worked on the design and layout of the dashboard.',
    githubUrl: 'https://github.com/Matt-Yee/Yee-Server-Side-API-Challenge-6',
  }
];

function ProjectGallery() {
    return (
      <div className="project-gallery" id="project-gallery">
        <h2>Project Gallery</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={project.image} alt={project.image} />
                </div>
              </a>
              <div className="project-info">
                <p>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/favicon.ico" alt="GitHub" className="github-icon" />
                View on GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default ProjectGallery;