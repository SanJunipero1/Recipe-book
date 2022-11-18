import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar,faClock } from '@fortawesome/free-solid-svg-icons';

export default function Element({title,rating,image,preparationTime,description,category,id}){
    
  const starIcon = <FontAwesomeIcon icon={faStar} style={{color:"#DEE13A"}}/>
  const timeIcon =<FontAwesomeIcon icon={faClock} />
  let starNumber= []
  console.log( rating)
  console.log( starNumber)
    
  for(let i = 0; i < rating; i++){
    starNumber.push(i)
  }
  
  const star = starNumber.map((stern)=>{
  return starIcon
  })

  const rezeptImage = `https:${image})`
  const linkId= `/recipes/${id}`
    return(
        
      <div className="col-sm-6 col-md-3">
          <div className="receipe-card">
              <img src={`https:${image}`} className="rounded img-fluid" alt="receipe-image"/>
              <div  className="receipe-body">
                  <h3 className="receipe-category">{category}</h3>
                  <h2 className="receipe-title">{title}</h2>
                  <p className="receipe-description">{description}</p>
                  <div className="d-flex justify-content-between">
                      <p>{star} </p>         
                      <p >{timeIcon} {preparationTime} min.</p>
                  </div>
                  <a href={linkId} className="btn btn-primary d-flex justify-content-center w-100 text-white">Zum Rezept</a>
              </div>
          </div>
      </div>
    )
}