import React from "react";
import { useNavigate } from 'react-router-dom';

export default function RecipeDetailPageElement({title,preparation,image}){
    console.log(preparation)
    
    const navigate = useNavigate()
    
    
    
    
    
    return(
        <div>
         <button className="btn btn-primary" onClick={() => navigate(-1)}>Home</button>
        <h1>{title}</h1>
        <img src={`https:${image}`} style={{height: "50rem"}}/>
        <h2>Zubereitung</h2>
        <p></p>
       
       
        </div>
    
    
    
    
     )
}