import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import a1 from "../assets/images/aboutgrp.webp";
import videoPath from "../assets/images/mitwpusummit.mp4";

const About = () => {
  const handleDownload = () => {
    // Implement the brochure download functionality
  };

  return (
    <div>
      {/* Video Section */}
      <div className="teaser">
        <video src={videoPath} autoPlay loop muted />
      </div>

      {/* About Section */}
      <div className="about-div">
        <h2 className="about-title">About MIT-WPU Summit 2024</h2>
        <p className="about-subtitle">
          India’s biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University, committed towards the goal of ‘Nation
          Building through Sports’.
        </p>
      </div>
      <button className="brochure-button" onClick={handleDownload}>
    Brochure
  </button>

      {/* Image Section */}
      <div className="image-container">
        <img src={a1} alt="about" className="about-image" loading="lazy" />
      </div>
      

      <Footer />
    </div>
  );
};

export default About;
  

