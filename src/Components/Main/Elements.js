import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";

export default function Element({title,rating,image}){
 

   
   
   

    return(
        <div  style={{backgroundColor: "lightblue",display:"flex",height:"400px",width:"600px",margin:"20px",backgroundImage : `url(https:${image})`,backgroundSize: "100%"}}>
        <h3>{title}</h3>
        <p>{rating} Sterne</p>
        
        

        <p></p>
        </div>


    )


}