import React from "react";
import {Link} from "react-router-dom";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './Home.css';

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Home() {


    return (
        <>
            <ParticlesBackground />
            <div className="Home_container">
                <h1 className="Home_h1">Alicia Lowe</h1>
                <h2 className="Home_h2">Full Stack Developer</h2>
               
                <p className="Home_blurb">Hey there, thanks for visiting my portfolio.</p>
                <p className="Home_blurb">I'm a recent graduate of the School of Code, where I was selected from thousands of applicants to take part in an intensive 16 week web development course, learning the fundamentals of programming and how to work in a high performance tech team, specialising in full-stack JavaScript development.</p>
                <p className="Home_blurb">Please take a look around to find out a little bit more about me, my skills, and the projects that I've worked on so far. If you'd like to contact me to talk about my work or job opportunities, I'm available at the links below and would love to hear from you.</p>

                <div className="Home_pglinks">
                    <button className="Pglink"><Link to="/about">About Me</Link></button>
                    <button className="Pglink"><Link to="/projects">Projects</Link></button>
                </div>

                <div className="Home_socials">
                    <a href="https://www.linkedin.com/in/alicia-lowe-749a21240/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default Home;