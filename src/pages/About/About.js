import React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './About.css';

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import pixelme from "../../assets/pixel_final.svg";

// import css from "../../assets/cssbadge.svg";
// import cypress from "../../assets/cypressbadge.svg";
// import express from "../../assets/expressbadge.svg";
// import figma from "../../assets/figmabadge.svg";
// import git from "../../assets/gitbadge.svg";
// import heroku from "../../assets/herokubadge.svg";
// import html from "../../assets/htmlbadge.svg";
// import javascript from "../../assets/javascriptbadge.svg";
// import jest from "../../assets/jestbadge.svg";
// import miro from "../../assets/mirobadge.svg";
// import netlify from "../../assets/netlifybadge.svg";
// import node from "../../assets/nodebadge.svg";
// import npm from "../../assets/npmbadge.svg";
// import postgresql from "../../assets/postgresqlbadge.svg";
// import postman from "../../assets/postmanbadge.svg";
// import react from "../../assets/reactbadge.svg";
// import reactrouter from "../../assets/reactrouterbadge.svg";
// import slack from "../../assets/slackbadge.svg";
// import trello from "../../assets/trellobadge.svg";
// import vscode from "../../assets/vscodebadge.svg";


function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <ParticlesBackground />
            <div className="About_container">
                <h1 className="About_h1">About Me</h1>

                <img className="About_pic" src={pixelme} alt="pixel alicia" />
               
                <p className="About_blurb">Before starting the application process for School of Code, the only time I'd touched HTML had been a brief dabble changing the text and images on a website someone made for me when I was about sixteen; so to say the bootcamp was an extreme learning experience is an understatement!</p>
                <p className="About_blurb">Though it might have been a circuitous route into tech - via football memberships, insurance, finance...I wouldn't have it any other way. I'm exactly where I'm supposed to be right now and looking forward to a future working in a field I love.</p>
                <p className="About_blurb">Saying that, there's much more to me than someone sitting in front of a computer coding, so here're a few other things about me...</p>

                {/* <div className="tech_and_facts">
                    <div className="tech">
                        <p className="About_title">Tech</p>
                        <div className="tech_section">
                            <img className="tech_badge" src={html} alt="html" />
                            <img className="tech_badge" src={css} alt="css" />
                            <img className="tech_badge" src={javascript} alt="javascript" />
                            <img className="tech_badge" src={node} alt="node" />
                            <img className="tech_badge" src={express} alt="express" />
                            <img className="tech_badge" src={postgresql} alt="postgresql" />
                            <img className="tech_badge" src={postman} alt="postman" />
                            <img className="tech_badge" src={react} alt="react" />
                            <img className="tech_badge" src={reactrouter} alt="react router" />
                            <img className="tech_badge" src={npm} alt="npm" />
                            <img className="tech_badge" src={heroku} alt="heroku" />
                            <img className="tech_badge" src={netlify} alt="netlify" />
                            <img className="tech_badge" src={vscode} alt="vs code" />
                            <img className="tech_badge" src={jest} alt="jest" />
                            <img className="tech_badge" src={cypress} alt="cypress" />
                            <img className="tech_badge" src={git} alt="git" />
                            <img className="tech_badge" src={slack} alt="slack" />
                            <img className="tech_badge" src={miro} alt="miro" />
                            <img className="tech_badge" src={figma} alt="figma" />
                            <img className="tech_badge" src={trello} alt="trello" />
                        </div>
                    </div> */}

                    {/* <div className="skills">
                        <p className="About_title">Skills</p>
                        <div className="skills_section">
                            <p className="skill">Agile practices</p>
                            <p className="skill">Remote collaboration</p>
                            <p className="skill">Project management</p>
                            <p className="skill">Pair programming</p>
                        </div>
                    </div>
                </div>*/}

                <div className="facts_section">
                    {/* <p className="facts_title">Rumours, hearsay, perhaps facts?</p> */}
                    <p className="facts">🤓 I write Young Adult and Popular fiction in my spare time and would love to self-publish one day.</p>
                    <p className="facts">🤩 I love music and singing, and am in an international karaoke group on Smule (mobile app). No, I'm not very good!</p>
                    <p className="facts">🤤 I once made a vegetarian lasagne so convincing that a family of carnivorous Americans ate it without noticing and then refused to believe me afterwards.</p>
                </div>

                <div className="About_pglinks">
                    <button className="About_pglink"><Link to="/">Home</Link></button>
                    <button className="About_pglink"><Link to="/projects">Projects</Link></button>
                </div>

                <div className="About_socials">
                    <a href="https://www.linkedin.com/in/alicia-lowe-749a21240/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>

                    {/* <a href="mailto:" alt="email" target="_blank" rel="noreferrer"><img className="socials" src={email} alt="email" /></a> */}
                    <Link to="/contact" alt="contact form link"><img className="socials" src={email} alt="email" /></Link>

                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default About;