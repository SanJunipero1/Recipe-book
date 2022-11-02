import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import Element from "./Elements";
import Pagination from "./Pagination";

 export default function DataFetch(){

    const [rezepte,setRezepte] = useState([])
    


    const [currentPage,setCurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] = useState(8)





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
   
   // PAGINATION ///////////
    // const recipeArray= rezepte.recipefield
    //const lastPostIndex= currentPage * postsPerPage
    //const firstPostIndex = lastPostIndex - postsPerPage
   // const currentPosts = recipeArray.slice(firstPostIndex,lastPostIndex)
    //<Pagination totalPosts={recipeArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
   // console.log(currentPosts)
  //////////////////////////////////////////////////////
    return(
      <div>
      <DataSearch rezepte={rezepte} />
      
      </div>
    )

 }
    