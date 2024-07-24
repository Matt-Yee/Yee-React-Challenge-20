import React from 'react';
import myImageSrc from '../assets/Selfie.jpg';
import './breakBar.css';

const BreakBar = () => {
    return (
        <div className="break-bar" id="break-bar">
            <img src={myImageSrc} alt="Image" className="image" />
            <div className="text">
                <p> I'm Matt Yee, and I'm thrilled to bring my unique background to the world of coding.   
                </p><p>Before starting this journey, I spent years as a jib operator, contributing to projects like Sprite commercials, Jeep Auto Show announcements, and various talk shows. Now, fueled by my passion for technology and creativity, I've shifted gears to pursue a career in coding.</p>
                <p>I combine my eye for detail and problem-solving skills to create practical and innovative solutions. Please take a look at my gallery below and feel free to reach out.</p>
            </div>
        </div>
    );
};

export default BreakBar;