
import React from 'react';
import './Intro.css';
import { Link } from "react-scroll";
import bag from "../../../images/briefcase.png";
import myphotor from "../../../images/myphotor.png";
import design1 from "../../../images/design1.jpeg"

const Intro = () => {
  return (
    <section id="Intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-left">
          <span className="hello">
            Hello,<br></br>
          </span>
          <span className="introText">
            I'm <span className="introName">Priyanshu</span>
            <br />
            <span className="introRole">Front/Back End Developer</span>
          </span>
          <p className="intropara">
            <span className='intro-para'>
              I am a skilled web designer with experience in creating web pages.
            </span>
          </p>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              <img src={bag} alt="Hire Me" className="btn-icon" /> Hire Me
            </button>
          </Link>
        </div>
        <div className="intro-right">
          <img src={myphotor} alt="Profile" className="profile-img" />
        </div>
      </div>
      <img src={design1} className='design'/>
    </section>
  );
};

export default Intro;
