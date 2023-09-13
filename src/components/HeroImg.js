import "./HeroImgStyles.css";

import React from "react";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={hero} alt="introimg" />
      </div>
      <div className="content">
        <h1>Rudra Pratap Singh Chouhan.</h1>
        <h1>Graduate, Developer & Neuroscience</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
