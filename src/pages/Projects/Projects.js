import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.js";
import './Projects.css';

import Card from "../../components/Card/Card.js";
import notok from "../../assets/notok1.JPG";
import holidayhelper from "../../assets/holidayhelper.JPG";
import portfolio from "../../assets/portfolio.JPG";
import amongus from "../../assets/landingpage.JPG";
import bootcamp from "../../assets/Homepage.JPG";
import catsarelife from "../../assets/catsarelife.JPG";
import pokemon from "../../assets/pokemon.JPG";
import heriley from "../../assets/heriley.JPG";
import getsetbackup from "../../assets/getsetbackup.JPG";

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ParticlesBackground />
            <div className="Projects_container">
                <h1 className="Projects_h1">Projects</h1>

                {/* <p className="Projects_blurb">There will be project stuff here</p> */}

                <Card
                    proj_imagel={notok}
                    proj_blurb={`iAm != "ok" is a community mental health app focussed on delivering tools and information with a light, friendly, and approachable feel.`}
                    proj_repo={"https://github.com/lalicia/iAm_not_ok"} />

                <Card
                    proj_imagep={holidayhelper}
                    proj_blurb={"Holiday Helper is an app to help travelers organise different elements of their holiday, designed to host various tools in one place and lessen the need to visit multiple locations to find different types of information."}
                    proj_repo={"https://github.com/lalicia/holiday_helper_frontend"} />

                <Card
                    proj_imagel={portfolio}
                    proj_blurb={"My professional full stack developer portfolio design."}
                    proj_repo={"https://github.com/lalicia/portfolio"} />

                <Card
                    proj_imagel={amongus}
                    proj_blurb={"A portfolio design based on the game Among Us, using an animated tsParticles background and creating other pages with images and buttons in-keeping with the theme."}
                    proj_repo={"https://github.com/lalicia/amongus_portfolio"} />

                <Card
                    proj_imagep={getsetbackup}
                    proj_blurb={"A website to assist people setting up their coding environments."}
                    proj_repo={"https://github.com/lalicia/get_set_back_up"} />

                <Card
                    proj_imagel={heriley}
                    proj_blurb={"A website for Texas-based artist, Heri Ley."}
                    proj_repo={"https://github.com/lalicia/heri_ley"} />

                <Card
                    proj_imagel={bootcamp}
                    proj_blurb={"Bootcamp Booster is an app to provide curated resources to bootcampers who want to further their studies, to cut-down the amount of time spent searching and sifting through search results to find appropriate and helpful information."}
                    proj_repo={"https://github.com/lalicia/bootcamp_booster"} />

                <Card
                    proj_imagel={catsarelife}
                    proj_blurb={"School of Code Hackathon: cat pic generator app utilising React and API fetch."}
                    proj_repo={"https://github.com/lalicia/cats_are_life"} />

                <Card
                    proj_imagel={pokemon}
                    proj_blurb={"School of Code Hackathon: Pokemon Battle game utilising API fetch."}
                    proj_repo={"https://github.com/lalicia/pokemon_battle"} />


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