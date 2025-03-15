
import React from "react";
import "./card.css"

function HeroCard ({ hero }) {
    return (
        <div className="hero-card">
            <img src={hero.url} alt={hero.name} className="hero-card-img" />
            <div className="hero-card-body">
                <h3 className="hero-card-title">{hero.name}</h3>
                <h4 className="hero-card-subtitle">{hero.universe}</h4>
                <p className="hero-card-text"><strong>Альтер эго:</strong> {hero.alterego}</p>
                <p className="hero-card-text"><strong>Род занятий:</strong> {hero.occupation}</p>
                <p className="hero-card-text"><strong>Суперсилы:</strong> {hero.superpowers}</p>
                <p className="hero-card-text">{hero.info}</p>
            </div>
        </div>
    );
};


export default HeroCard