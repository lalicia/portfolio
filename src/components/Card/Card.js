import React from "react";

import "./Card.css";

function Card({proj_imagel, proj_imagep, proj_blurb, proj_repo}) {


    return (
        <div className="card">
            <img className={proj_imagel ? "proj_imagel": "proj_imagep"} src={proj_imagel || proj_imagep} alt="homepage" />
            <p className="proj_blurb">{proj_blurb}</p>
            <a className="repo_link" href={proj_repo} alt="link to repo" target="_blank" rel="noreferrer">
                <p className="repo">Link to GitHub Repo</p>
            </a>
        </div>
    )



}

export default Card;