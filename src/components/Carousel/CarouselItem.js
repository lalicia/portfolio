import React from "react";

function CarouselItem({ item, width }) {

  return (
        <div className="carousel-item" style={{ width: width }}>
            <div></div>
            
            <img className={item.orientation === "landscape" ? 
            "carousel-img-landscape"
            : "carousel-img-portrait"
             } src={item.proj_image} alt="project capture"/>
            
            <p className="carousel-item-text">{item.proj_blurb}</p>

            <a className="repo_link" href={item.proj_repo} alt="link to repo" target="_blank" rel="noreferrer">
                <p className="repo">Link to GitHub Repo</p>
            </a>
        </div>
  );
};

export default CarouselItem;