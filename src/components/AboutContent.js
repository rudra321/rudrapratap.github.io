import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import me4 from "../assets/me4.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Namaste!! I'm Rudra Pratap Singh Chouhan</h1>
        <p>
          I am a graduate student holding a degree in Computer Science from
          Birla Institute of Technology and Science, Pilani. Proficient in
          Python, JavaScript, React, Data Structures and Algorithms, and C++, my
          academic focus lies in Cognitive Neuroscience and Human-Computer
          Interaction (HCI). Beyond academics, I am an enthusiastic reader with
          a penchant for Western and East-Asian literature, constantly seeking
          new perspectives and insights through the written word.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right>">
        <div className="img-container">
          <div className="img-stack top">
            <img src={me4} className="img" alt="img" />
          </div>
          {/* <div className="img-stack top">
            <img src={bdome} className="img" alt="img" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
