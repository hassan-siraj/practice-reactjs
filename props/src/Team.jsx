import React from 'react';
import './App.css';

function Team(props) {
    return(
        <div className="card">
            <img src={props.teamImgSrc} alt="Avatar" style={{ width: "100%" }} />
            <div className="cardText">
                <h4><b>{props.teamName}</b></h4> 
                <p>{props.teamPosition}</p>
                <a href="{props.teamLink}" title="Read More">Read More</a>
            </div>
        </div>
    )
}


export default Team;