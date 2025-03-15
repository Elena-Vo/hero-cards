
import React from "react";
import HeroCard from "../card/card"
import './cards-list.css';
import heroes from "../../data/heroes"; 


function CardsList () {
    
    return (
        <div className="heroes-container">
            <h1 className="heroes-title">Супергерои</h1>
            <div className="heroes-grid">
                {heroes.map((hero, index) => (
                    <HeroCard key={index} hero={hero} />
                ))}
            </div>
        </div>
    );
}

export default CardsList