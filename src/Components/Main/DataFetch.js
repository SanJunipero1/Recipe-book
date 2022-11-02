import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import Element from "./Elements";

 export default function DataFetch(){

    const [rezepte,setRezepte] = useState([])
    const [rezeptImage,setRezeptImage] =useState([])





   function fetchRecipes(){
    
        client.getEntries({
            content_type: 'recipes'
        })
        .then((entry)=>{

   
     

  
        const recipefield = entry.items
        setRezepte({
            recipefield
        })
        })
    
    }
    
    
   

   
    

    
     useEffect(()=>{
       fetchRecipes()
        
    },[])
  
 
  
  
    
    
    
    
    return(
      <DataSearch rezepte={rezepte} />
    )

 }
    