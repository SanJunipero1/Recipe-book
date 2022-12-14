
import { useNavigate } from "react-router-dom";
import React,{useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../../client";
import RecipeDetailPageElement from "./RecipeDetailPageElement";
import Element from "../Elements";
import Layout from "../../Layout";

export default function Category(){
    const navigate = useNavigate()

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

     const rezeptParamId =rezeptParam.categoryID
     const recipeArray = rezepte.recipefield
     console.log(recipeArray)
     if(recipeArray){
        return (
                <Layout>
                    <div className="container">
                    <div className="row"><div className="col"><h1 className="mb-4">{rezeptParamId}</h1></div></div>
                <div className="row ">
                    
                {recipeArray.filter(  (rezept )=> rezept.fields.category == rezeptParamId ).map((items) =>{
                   
                   return (
                   
                 
                    <Element  key={items.sys.id} title={items.fields.title} rating={items.fields.rating} image={items.fields.headerImage.fields.file.url} 
                    preparationTime={items.fields.preparationTime} description={items.fields.description} category={items.fields.category}  id={items.sys.id}/>
                    
                   );
                })}
            </div>
            </div>
            </Layout>
          )
     }























    return(

        <>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Home</button>
        <h1>Hauptgerichte</h1>
        </>
    )
}



