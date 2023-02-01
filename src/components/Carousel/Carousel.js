import React, { useState } from "react";

import CarouselItem from "./CarouselItem";
import "./Carousel.css";

import notok from "../../assets/notok1.JPG";
import holidayhelper from "../../assets/holidayhelper.JPG";
import portfolio from "../../assets/portfolio.JPG";
import amongus from "../../assets/landingpage.JPG";
import bootcamp from "../../assets/Homepage.JPG";
import catsarelife from "../../assets/catsarelife.JPG";
import pokemon from "../../assets/pokemon.JPG";
import heriley from "../../assets/heriley.JPG";
import getsetbackup from "../../assets/getsetbackup.JPG";
import heyu from "../../assets/hey-heyu.JPG";
import fiftyprojects from "../../assets/fiftyprojects.JPG";

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const projects = [
        {
            proj_image: notok,
            orientation: "landscape",
            proj_blurb: `iAm != "ok" is a community mental health app focussed on delivering tools and information with a light, friendly, and approachable feel.`,
            proj_repo: "https://github.com/lalicia/iAm_not_ok"
        },
        {
            proj_image: fiftyprojects,
            orientation: "landscape",
            proj_blurb: `50 Projects in 50 Days - using React is a conversion of the HTML/CSS/vanilla JavaScript projects in Brad Traversy and Florin Pop's Udemy Course '50 Projects in 50 Days'`,
            proj_repo: "https://github.com/lalicia/50_projects_in_50_days"
        },
        {
            proj_image: holidayhelper,
            orientation: "portrait",
            proj_blurb: `Holiday Helper is an app to help travelers organise different elements of their holiday, designed to host various tools in one place and lessen the need to visit multiple locations to find different types of information.`,
            proj_repo: "https://github.com/lalicia/holiday_helper_frontend"
        },
        {
            proj_image: portfolio,
            orientation: "landscape",
            proj_blurb: `My professional full stack developer portfolio design.`,
            proj_repo: "https://github.com/lalicia/portfolio"
        },
        {
            proj_image: amongus,
            orientation: "landscape",
            proj_blurb: `A portfolio design based on the game Among Us, using an animated tsParticles background and creating other pages with images and buttons in-keeping with the theme.`,
            proj_repo: "https://github.com/lalicia/amongus_portfolio"
        },
        {
            proj_image: getsetbackup,
            orientation: "portrait",
            proj_blurb: `A website to assist people setting up their coding environments.`,
            proj_repo: "https://github.com/lalicia/get_set_back_up"
        },
        {
            proj_image: heyu,
            orientation: "landscape",
            proj_blurb: `An app for people working from home or spending a lot of time in front of a computer, to help remind them to practise small self-care tasks.`,
            proj_repo: "https://github.com/lalicia/hey-heyU"
        },
        {
            proj_image: heriley,
            orientation: "landscape",
            proj_blurb: `A website for Texas-based artist, Heri Ley.`,
            proj_repo: "https://github.com/lalicia/heri_ley"
        },
        {
            proj_image: bootcamp,
            orientation: "landscape",
            proj_blurb: `Bootcamp Booster is an app to provide curated resources to bootcampers who want to further their studies, to cut-down the amount of time spent searching and sifting through search results to find appropriate and helpful information.`,
            proj_repo: "https://github.com/lalicia/bootcamp_booster"
        },
        {
            proj_image: catsarelife,
            orientation: "landscape",
            proj_blurb: `School of Code Hackathon: cat pic generator app utilising React and API fetch.`,
            proj_repo: "https://github.com/lalicia/cats_are_life"
        },
        {
            proj_image: pokemon,
            orientation: "landscape",
            proj_blurb: `School of Code Hackathon: Pokemon Battle game utilising API fetch.`,
            proj_repo: "https://github.com/lalicia/pokemon_battle"
        }
    ]

    
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = projects.length -1;
        } else if(newIndex >= projects.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };


  return (
    <div className="proj-car">
        <button className="button-arrow"
        onClick={() => {updateIndex(activeIndex - 1);}}>
            <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>

        <div className="carousel">

            <div className="inner"
            style={{ transform: `translate(-${activeIndex * 100}%)`}}
            >
        
                {projects.map((item, index) => {
                    return <CarouselItem key={index} item={item} width={"100%"} />;
                })}

            </div>

        </div>

        <button className="button-arrow"
        onClick={() => {updateIndex(activeIndex + 1)}}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>
    );
};

export default Carousel;