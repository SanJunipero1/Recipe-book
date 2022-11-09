import React,{useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../../client";
import RecipeDetailPageElement from "./RecipeDetailPageElement";
import Layout from "../../Layout";



export default function RecipeDetailPage(){
    const rezeptParam = useParams()
    const [rezepte,setRezepte] = useState([])

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

     const rezeptParamId =rezeptParam.recipeID


     const recipeArray = rezepte.recipefield


    

    
    
    
    
    if(recipeArray){
        return (
                <>
                {recipeArray.filter(  (rezept )=> rezept.sys.id === rezeptParamId ).map((items) =>{
                   console.log(items)
                   return (
                    <Layout>
                   <RecipeDetailPageElement key={items.sys.id} title={items.fields.title} preparation={items.fields.preparation}
                   image={items.fields.headerImage.fields.file.url} preparationTime={items.fields.preparationTime} 
                   ingredients={items.fields.Ingredients}/>
                      </Layout>
                    );
                })}
            </>
          )
     }





       

    


    

   


    


 

    
    
    
    
    
    
}