import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img className="square-img" src={props.image} alt="img"/>
            <div className="card-info">
                <h3 className="main-text">{props.mealName}</h3>
                <p className="subtitle">Start your day with exclusive breakfast options.</p>
            </div>
        </div> 
    )
}