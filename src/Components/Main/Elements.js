import React from "react";

export default function Element({title,rating,image}){
    console.log(image)
    
    
    return(
        <div  style={{backgroundColor: "lightblue",display:"flex",height:"100px",width:"400px",margin:"20px"}}>
        <h3>{title}</h3>
        <p>{rating} Sterne</p>
        <p></p>
        </div>


    )


}