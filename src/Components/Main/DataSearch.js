import React from "react";
import Element from "./Elements";

export default function DataSearch(rezepte){
   console.log(rezepte.rezepte.recipefield)
    const rezeptsearch = rezepte.rezepte.recipefield
    console.log(rezeptsearch)
    
   const dataMap = rezeptsearch && rezeptsearch.map((rezept)=>{
      return <Element  key={rezept.id} title={rezept.fields.title} rating={rezept.fields.rating} image={rezept.fields.headerImage}/>
   })
    
    
   return(
   <div>
     {dataMap}
     </div>

    )
}