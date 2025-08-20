import React from 'react'
import "./Skills.css"
import web from "../assests/web.webp"
import app from "../assests/app_design.webp"
import figma from "../assests/figma.webp"

const Skills = () => {
  return (
    <div>
      <section id="Skills">
        <span className="skillTitle">
          What I Do ?<br></br>
        </span>
        <span className="skillDesc">
          <ul>
            
                Skilled in designing, building, and deploying complete
                applications from scratch, covering frontend, backend, and
                database layers.
           
              Capable of taking an idea from concept to production, including
              UI/UX design, API development, database modeling, and deployment.
           
              Focused on writing optimized, scalable, and maintainable code that
              handles growth without compromising speed.
          
              Hands-on with latest frameworks, libraries, and cloud services to
              stay ahead in the tech curve.
         
              Adept at working with designers, testers, and stakeholders to
              deliver user-centric solutions.
         
              Always exploring new technologies, tools, and design patterns to
              improve development workflows.
         
          </ul>
        </span>
        <div className="skillbars">
          <div className="skillbar">
            <img src={web} alt="" className="skillImage" />
            <div className="skillText">
              <h2> Web Designing</h2>
              <p>
                Crafting visually appealing, responsive, and user-friendly
                websites with modern UI trends.
              </p>
            </div>
          </div>

          <div className="skillbar">
            <img src={app} alt="" className="skillImage" />
            <div className="skillText">
              <h2>App Designing</h2>
              <p>
                Designing intuitive, mobile-first app interfaces that prioritize
                user flow and usability.
              </p>
            </div>
          </div>

          <div className="skillbar">
            <img src={figma} alt="" className="skillImage" />
            <div className="skillText">
              <h2>Figma</h2>
              <p>
                Proficient in creating wireframes, prototypes, and design
                systems using Figma
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
