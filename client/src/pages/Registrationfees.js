import React from "react";
import feeimg from "../assets/images/fees.png";
import feeqr from "../assets/images/feeqr.png";
import Footer from "../Components/Footer/Footer";
import regis1 from "../assets/images/registration/1.png";
import regis2 from "../assets/images/registration/2.png";
import regis3 from "../assets/images/registration/3.png";
import regis4 from "../assets/images/registration/4.png";


import "./Registrationfees.css";

const Registrationfees = () => {
  return (
    <div>
    
      <div className="image-container">
        <img src={regis1} alt="about" className="about-image" />
        <img src={regis2} alt ="about"className="about-image"/>
        <img src={regis3} alt="about"className="about-image"/>
        <img src={regis4} alt="about" className="about-image" />
      </div>

      
      
    </div>
  );
};

export default Registrationfees;
