import React from "react";
import Element from "./Elements";

export default function DataSearch({rezepte}){

    const rezeptsearch = {rezepte}.rezepte.recipefield
 

   const dataMap = rezeptsearch && rezeptsearch.map((rezept)=>{    
      return <Element  key={rezept.sys.id} title={rezept.fields.title} rating={rezept.fields.rating} image={rezept.fields.headerImage.fields.file.url} />
   })
    
    
   return(
   <div className="d-flex flex-column">
     {dataMap}
     </div>

    )
}