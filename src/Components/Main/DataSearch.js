import React from "react";
import Element from "./Elements";

export default function DataSearch({rezepte}){
  
   
 

   const dataMap = rezepte && rezepte.map((rezept)=>{    
      return <Element  key={rezept.sys.id} title={rezept.fields.title} rating={rezept.fields.rating} image={rezept.fields.headerImage.fields.file.url} 
      preparationTime={rezept.fields.preparationTime} description={rezept.fields.description}    category={rezept.fields.category}  id={rezept.sys.id}/>
   })
    
    
   return(
   <>
      <h3 className="receipe-overview mb-1">Rezepte</h3>
      <div className="row">
      {dataMap}
      </div>
   </>

    )
}