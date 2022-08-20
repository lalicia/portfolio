import React from "react";
import {Link} from "react-router-dom";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './About.css';

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import pixelme from "../../assets/pixel_final.svg";

function Home() {


    return (
        <>
            <ParticlesBackground />
            <div className="About_container">
                <h1 className="About_h1">About Me</h1>

                <img className="About_pic" src={pixelme} alt="pixel alicia" />
               
                <p className="About_blurb">I don't know what to say...</p>
                <p className="About_blurb">Some stuff about how awesome I am...</p>
                <p className="About_blurb">Round it off somehow...</p>

                <div className="About_pglinks">
                    <button className="About_pglink"><Link to="/">Home</Link></button>
                    <button className="About_pglink"><Link to="/projects">Projects</Link></button>
                </div>

                <div className="About_socials">
                    <a href="https://www.linkedin.com/in/alicia-lowe-749a21240/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default Home;