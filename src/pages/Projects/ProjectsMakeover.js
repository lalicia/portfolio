import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './Projects.css';

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

import Carousel from "../../components/Carousel/Carousel.js";

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ParticlesBackground />
            <div className="Projects_container">
                <h1 className="Projects_h1">Projects</h1>

                <Carousel />

                <div className="Projects_pglinks">
                    <button className="Projects_pglink"><Link to="/">Home</Link></button>
                    <button className="Projects_pglink"><Link to="/about">About</Link></button>
                </div>

                <div className="Projects_socials">
                    <a href="https://www.linkedin.com/in/a-lowe/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>

                    {/* <a href="mailto:" alt="email" target="_blank" rel="noreferrer"><img className="socials" src={email} alt="email" /></a> */}
                    <Link to="/contact" alt="contact form link"><img className="socials" src={email} alt="email" /></Link>

                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default Projects;