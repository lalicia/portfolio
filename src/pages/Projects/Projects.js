import React from "react";
import {Link} from "react-router-dom";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './Projects.css';

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Projects() {


    return (
        <>
            <ParticlesBackground />
            <div className="Projects_container">
                <h1 className="Projects_h1">Projects</h1>
               
                <p className="Projects_blurb">There will be project stuff here</p>

                <div className="Projects_pglinks">
                    <button className="Projects_pglink"><Link to="/">Home</Link></button>
                    <button className="Projects_pglink"><Link to="/about">About</Link></button>
                </div>

                <div className="Projects_socials">
                    <a href="https://www.linkedin.com/in/alicia-lowe-749a21240/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default Projects;