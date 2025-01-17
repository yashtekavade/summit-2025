import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import a1 from "../assets/images/aboutsport.png";
import { FlipWords } from "../Components/ui/flip-words";
// import { FloatingDock } from "../Components/ui/floating-dock";
// import {
//   IconHome,
//   IconTerminal2,
//   IconNewSection,
//   IconBrandGithub,
//   IconBrandX,
// } from "@tabler/icons-react";
// import { AnimatedTestimonials } from "../Components/ui/animated-testimonials";

const About = () => {
  const flipWords = ["unite", "inspire", "compete", "celebrate"];
  
  return (
    <div>
      <div className="about-div">
        <h2 className="about-title">
          ABOUT MIT-WPU <FlipWords words={flipWords} /> SUMMIT 2025.
        </h2>
        <p className="about-subtitle">
          India's biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of 'Nation
          Building through Sports'.
        </p>
      </div>
      {/* <div className="image-container">
        <img src={a1} alt="about" className="about-image" loading="lazy" />
      </div> */}
      {/* <div className="flex items-center justify-center h-[35rem] w-full mt-16">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={dockItems}
        />
      </div> */}
    
      <Footer />
    </div>
  );
};

export default About;