import React from "react";

export default function ElementCategory({image,category,description,link}){

	return(
		<div className="col-md-4 text-center frontpage-receipe-category">
			<img src={image} class="category-receipe-image rounded" alt="Category image"/>
			<h2>{category}</h2>
			<p className="category-description">{description}</p>
			<a href={link} className="btn btn-primary text-light">Zu den {category}</a>
		</div>
	)
}