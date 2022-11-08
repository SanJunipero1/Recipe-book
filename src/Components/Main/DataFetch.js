import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import Element from "./Elements";
import Pagination from "./Pagination";
import Category from "./Category/Index";
import Search from "../Header/Search";
import { useNavigate } from "react-router-dom";

export default function DataFetch(){
  const navigate = useNavigate()
    const [rezepte,setRezepte] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [currentPage,setCurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] = useState(4)
    const [random,setRandom]=useState()
    const [random2,setRandom2]=useState()

    // console.log(searchValue)

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
   
    const recipeArray = rezepte.recipefield

    function zufall(){
      const randomRecipe =  Math.floor(Math.random() * recipeArray.length)
      const randomRecipe2 =  Math.floor(Math.random() * recipeArray.length)
     console.log(recipeArray[randomRecipe].fields.title)
     setRandom(randomRecipe)
     setRandom2(randomRecipe2)
   
    }

     if(random){
      return(
        <div>
           <Search setSearchValue={setSearchValue}/>
          <Category/>
          <div className="d-flex">
        <Element key={recipeArray[random].sys.id} title={recipeArray[random].fields.title} rating={recipeArray[random].fields.rating} image={recipeArray[random].fields.headerImage.fields.file.url} 
        preparationTime={recipeArray[random].fields.preparationTime} description={recipeArray[random].fields.description}    category={recipeArray[random].fields.category}  id={recipeArray[random].sys.id}/>
        <Element key={recipeArray[random2].sys.id} title={recipeArray[random2].fields.title} rating={recipeArray[random2].fields.rating} image={recipeArray[random2].fields.headerImage.fields.file.url} 
        preparationTime={recipeArray[random2].fields.preparationTime} description={recipeArray[random2].fields.description}    category={recipeArray[random2].fields.category}  id={recipeArray[random2].sys.id}/>
        </div>
    
    <button className="btn btn-primary " onClick={zufall}>Zufallsrezept</button>
        
        
        
        
        </div>
      )
     }

    if(searchValue && recipeArray){ 
      return(
        <div class="asdasdasdasd">
            <div className="d-flex">   
              {recipeArray.filter(  (rezept )=> rezept.fields.category == searchValue ).map((items) =>{
                return (
                  <Element  key={items.sys.id} title={items.fields.title} rating={items.fields.rating} image={items.fields.headerImage.fields.file.url} 
                  preparationTime={items.fields.preparationTime} description={items.fields.description}    category={items.fields.category}  id={items.sys.id}/>  
                );
              })}
            </div>
        </div>

      )
    }


    
    
    if(recipeArray){
      const lastPostIndex= currentPage * postsPerPage
      const firstPostIndex = lastPostIndex - postsPerPage
      const currentPosts =  recipeArray.slice(firstPostIndex,lastPostIndex)
     
    
      return(
        
        <div className="container">
			<div className="row">
				<div className="col">
					<Search setSearchValue={setSearchValue}/>
					<Category/>
					<DataSearch rezepte={currentPosts} />
					<Pagination totalPosts={recipeArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
					<button className="btn btn-primary " onClick={zufall}>Zufallsrezept</button>
				</div>
			</div>
        </div>
      
      )

    }
    
    
    

  

    


 }
    