import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import "./Home.css";
import Founder from "../assets/images/karad.webp";
import Exe from "../assets/images/exe.webp";
import Footer from "../Components/Footer/Footer.jsx";
import HeroImg from "../assets/images/players-removebg-preview.png"; // Replace with the actual image path
import { FlipWords } from "../Components/ui/flip-words.jsx";

const Home = () => {
  const words = React.useMemo(() => ["better", "cute", "beautiful", "modern"], []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <p className="title">
            WELCOME TO
            <FlipWords words={words} /> <br />
            THE
          </p>
          <p className="sub">OFFICIAL SUMMIT WEBSITE</p>
        </div>
        <div className="hero-img-container">
          <img src={HeroImg} alt="Hero" className="hero-img" />
        </div>
      </div>

      {/* Founder's Section */}
      <div className="founder-content">
        <div className="left-content">
          <p className="sub">About the</p>
          <p className="title">Founder's Inspiration</p>
          <p>
            At the outset, I would like to congratulate the organizers of
            'Summit 2024' for their sustained & committed efforts in organizing
            this event each year for 17 long years! ...
          </p>
        </div>
        <div className="img-container">
          <img className="img_b" src={Founder} alt="about" loading="lazy" />
        </div>
      </div>

      {/* Executive President Section */}
      <div className="exe-content">
        <div className="left-content">
          <p className="title">Executive President’s Message</p>
          <p>
            Dear Students, MIT World Peace University, the Flagship University
            of MAEER’s MIT Group of Institutions, is carrying forward the legacy
            of four decades of Educational Excellence. ...
          </p>
        </div>
        <div className="img-container">
          <img className="img_c" src={Exe} alt="about" loading="lazy" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
