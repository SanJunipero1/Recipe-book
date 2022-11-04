import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faStar,faClock } from '@fortawesome/free-solid-svg-icons';


export default function Element({title,rating,image,preparationTime,description,category,id}){
    
  const starIcon = <FontAwesomeIcon icon={faStar} style={{color:"#DEE13A"}}/>
  const timeIcon =<FontAwesomeIcon icon={faClock} />
  let starNumber= []
    
  for(let i = 0; i < rating; i++){
    starNumber.push(i)
  }
  
 
  const star = starNumber.map((stern)=>{
  return starIcon
  })



  const rezeptImage = `https:${image})`
  const linkId= `/recipes/${id}`
    return(
        
      <div className="card m-auto"  style={{width: "306px", height: "488px"}}>
    <img src={`https:${image}`} className="card-img-top" style={{height: "13rem"}} alt="..."/>
   <div  className="card-body">
        <p>{category}</p>
      <h5 className="card-title">{title}</h5>
      <p style={{height: "10rem"}} className="card-text" >{description}</p>
      <div className="d-flex justify-content-between">
      <p>Sterne: {star} </p>         
      <p >{timeIcon} {preparationTime} min.</p>
      </div>
      <a href={linkId} className="btn btn-primary d-flex justify-content-center   " style={{width:"306px"}}>Zum Rezept</a>
    </div>
    
   </div>


   

    )


}