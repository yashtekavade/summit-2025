import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import { FlipWords } from "../Components/ui/flip-words";
import img1 from "../assets/images/sports/1.JPG";
import img2 from "../assets/images/sports/2.JPG";

const About = () => {
  const flipWords = ["unite", "inspire", "compete", "celebrate"];

  return (
    <div>
      {/* About Section */}
      <div className="about-div">
        <h2 className="about-title">
          ABOUT MIT-WPU <FlipWords words={flipWords} /> SUMMIT 2025
        </h2>
        <p className="about-subtitle">
          India's biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of 'Nation
          Building through Sports'.
        </p>
      </div>

      {/* Journey So Far Section */}
      <div className="about-content">
        {/* Section 1 */}
        <div className="content-section">
          <h3 className="content-heading">JOURNEY SO FAR</h3>
          <p className="content-paragraph">
            Dr. Vishwanath Karad MIT World Peace University, Pune, Bharat, is
            the realization of a visionary dream by esteemed educationist Prof.
            Dr. Vishwanath D. Karad. Since its inception in 1983 with the
            founding of Maharashtra Institute of Technology, MIT has redefined
            the boundaries of higher education.
          </p>
          <img src={img1} alt="Journey 1" className="about-image" />
        </div>

        {/* Section 2 */}
        <div className="content-section">
          <p className="content-paragraph">
            Catering to the aspirations of over 65,000 students across
            Maharashtra, MIT WPU exemplifies a harmonious blend of academic
            rigor and a commitment to global peace and progress. Books may be
            the quiet architects of wisdom, building our understanding brick by
            brick, but it’s the playing fields that serve as life’s roaring
            crucibles.
          </p>
          <img src={img2} alt="Journey 2" className="about-image" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
