import React from "react";
import Card from "./Card"
import SearchList from "./SearchList";

function createCard(searchimg){
    return(
        <Card 
            image={searchimg.src}  
            mealName={searchimg.mealName}   
        />
    )
}

export default function Searches(props){
    return (
        <div className="border">
            <h1>Quick Searches</h1>
            <h4>Discover restaurants by type of meal</h4>
            <div className="flex">
                {SearchList.map(createCard)}
            </div>
        </div>
    );
}