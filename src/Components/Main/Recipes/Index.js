import React from "react";
import { useNavigate } from "react-router-dom";
export default function Recipes(){
    const navigate = useNavigate()
    
    return(

        <>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Home</button>
        <h1>Recipes</h1>
        </>
    )
}