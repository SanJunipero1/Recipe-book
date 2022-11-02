import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";


 export default function DataFetch(){

    const [rezepte,setRezepte] = useState([])





   function fetchRecipes(){
    
        client.getEntries({
            content_type: 'recipes'
        })
        .then((entry)=>{
        console.log(entry)
        const recipefield = entry.items
        setRezepte({
            recipefield
        })
        })
    
    }
    
    
    
   
    

    
     useEffect(()=>{
       fetchRecipes()
        
    },[])
  

  
  
    console.log(rezepte.recipefield)
    
    
    
    return(
      <DataSearch rezepte={rezepte}/>
    )

 }
    