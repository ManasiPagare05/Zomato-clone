import React from "react"

export default function Image(props){
    return(
        <img src={props.image} alt="img" width={props.width} height={props.height}/>
    )
}