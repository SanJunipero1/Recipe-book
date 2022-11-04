import React from "react";

export default function ElementCategory({image,category,description,link}){

    return(
     <div className="card" style={{width: "30rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{category}</h5>
    <p className="card-text">{description}</p>
    <a href={link} className="btn btn-primary">Zu den {category}</a>
  </div>
</div>
    )
}