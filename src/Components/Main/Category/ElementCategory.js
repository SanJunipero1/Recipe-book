import React from "react";

export default function ElementCategory({image,category,description,link}){

	return(
		<div className="col-md-4 text-center frontpage-receipe-category">
			<img src={image} class="category-receipe-image rounded" alt="Category image"/>
			<h2>{category}</h2>
			<p className="card-text">{description}</p>
			<a href={link} className="btn btn-primary text-light">Zeige {category}</a>
		</div>
	)
}