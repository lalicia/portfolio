import React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './Home.css';

import css from "../../assets/cssbadge.svg";
import cypress from "../../assets/cypressbadge.svg";
import express from "../../assets/expressbadge.svg";
import figma from "../../assets/figmabadge.svg";
import git from "../../assets/gitbadge.svg";
import heroku from "../../assets/herokubadge.svg";
import html from "../../assets/htmlbadge.svg";
import javascript from "../../assets/javascriptbadge.svg";
import jest from "../../assets/jestbadge.svg";
import miro from "../../assets/mirobadge.svg";
import netlify from "../../assets/netlifybadge.svg";
import node from "../../assets/nodebadge.svg";
import npm from "../../assets/npmbadge.svg";
import postgresql from "../../assets/postgresqlbadge.svg";
import postman from "../../assets/postmanbadge.svg";
import react from "../../assets/reactbadge.svg";
import reactrouter from "../../assets/reactrouterbadge.svg";
import slack from "../../assets/slackbadge.svg";
import trello from "../../assets/trellobadge.svg";
import vscode from "../../assets/vscodebadge.svg";
import nextjs from "../../assets/nextjsbadge.svg";
import tailwind from "../../assets/tailwindbadge.svg";
import vercel from "../../assets/vercelbadge.svg";
import railway from "../../assets/railwaybadge.svg";
import fontawesome from "../../assets/fontawesomebadge.svg";
import msazure from "../../assets/msazurebadge.svg";
import canva from "../../assets/canvabadge.svg";
import affinitydesigner from "../../assets/affinitydesignerbadge.svg";

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <ParticlesBackground />
            <div className="Home_container">
                <h1 className="Home_h1">Alicia Lowe</h1>
                <h2 className="Home_h2">Full Stack Developer</h2>
               
                <p className="Home_blurb">Hey there, thanks for visiting my portfolio.</p>
                <p className="Home_blurb">I'm a recent graduate of the School of Code, an intensive 16 week web development course learning the fundamentals of programming and how to work in a high performance tech team, specialising in full stack JavaScript development.</p>
                <p className="Home_blurb">Please take a look around to find out a little bit more about me, my skills, and the projects that I've worked on so far. If you'd like to contact me to talk about my work or job opportunities, I'm available at the links below and would love to hear from you.</p>


                <div className="tech_and_facts">
                    <div className="tech">
                        <p className="Home_title">The tech I've worked with</p>
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
                            <img className="tech_badge" src={nextjs} alt="next js" />
                            <img className="tech_badge" src={npm} alt="npm" />
                            <img className="tech_badge" src={fontawesome} alt="font awesome" />
                            <img className="tech_badge" src={tailwind} alt="tailwind" />
                            <img className="tech_badge" src={msazure} alt="microsoft azure" />
                            <img className="tech_badge" src={heroku} alt="heroku" />
                            <img className="tech_badge" src={railway} alt="railway" />
                            <img className="tech_badge" src={netlify} alt="netlify" />
                            <img className="tech_badge" src={vercel} alt="vercel" />
                            <img className="tech_badge" src={vscode} alt="vs code" />
                            <img className="tech_badge" src={jest} alt="jest" />
                            <img className="tech_badge" src={cypress} alt="cypress" />
                            <img className="tech_badge" src={git} alt="git" />
                            <img className="tech_badge" src={slack} alt="slack" />
                            <img className="tech_badge" src={canva} alt="canva" />
                            <img className="tech_badge" src={miro} alt="miro" />
                            <img className="tech_badge" src={figma} alt="figma" />
                            <img className="tech_badge" src={affinitydesigner} alt="affinity designer" />
                            <img className="tech_badge" src={trello} alt="trello" />
                        </div>
                    </div>
                </div>

                <div className="Home_pglinks">
                    <button className="Pglink"><Link to="/about">About Me</Link></button>
                    <button className="Pglink"><Link to="/projects">Projects</Link></button>
                </div>

                <div className="Home_socials">
                    <a href="https://www.linkedin.com/in/a-lowe/" alt="linkedin profile" target="_blank" rel="noreferrer"><img className="socials" src={linkedin} alt="linkedin" /></a>

                    {/* <a href="mailto:" alt="email" target="_blank" rel="noreferrer"><img className="socials" src={email} alt="email" /></a> */}
                     <Link to="/contact" alt="contact form link"><img className="socials" src={email} alt="email" /></Link>

                    <a href="https://github.com/lalicia" alt="github profile" target="_blank" rel="noreferrer"><img className="socials" src={github} alt="github" /></a>
                </div>

            </div>
        </>
    )
}

export default Home;