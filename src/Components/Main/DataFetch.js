import React,{useEffect, useState} from "react";
import { client } from "../../client";
import DataSearch from "./DataSearch";
import Element from "./Elements";
import Pagination from "./Pagination";
import Category from "./Category/Index";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import Modal from "./Recipes/Modal";
import ModalElement from "./Recipes/ModalElement";
import Layout from "../Layout";
import * as Icon from 'react-bootstrap-icons';



export default function DataFetch(){
  const navigate = useNavigate()
    const [rezepte,setRezepte] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [currentPage,setCurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] = useState(4)
    const [random,setRandom]=useState(0)
    const [random2,setRandom2]=useState()

    const [openModal,setOpenModal]= useState(false)
   


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
      setOpenModal(true)
      const randomRecipe =  Math.floor(Math.random() * recipeArray.length)
      const randomRecipe2 =  Math.floor(Math.random() * recipeArray.length)
     console.log(recipeArray[randomRecipe].fields.title)
     setRandom(randomRecipe)
     setRandom2(randomRecipe2)
   
    }


    function modal(){ 
      const randomRecipe =  Math.floor(Math.random() * recipeArray.length)
      setRandom(randomRecipe)
      
      setOpenModal(true)
    }





     



  

    if(searchValue && recipeArray){ 
      return(
        <Layout>
        
            <div className="row">   
              {recipeArray.filter(  (rezept )=> rezept.fields.category == searchValue ).map((items) =>{
                return (
                  <Element  key={items.sys.id} title={items.fields.title} rating={items.fields.rating} image={items.fields.headerImage.fields.file.url} 
                  preparationTime={items.fields.preparationTime} description={items.fields.description}    category={items.fields.category}  id={items.sys.id}/>  
                );
              })}
            </div>
        
        </Layout>
      )
    }




    console.log(random)

    
    if(recipeArray){
      const lastPostIndex= currentPage * postsPerPage
      const firstPostIndex = lastPostIndex - postsPerPage
      const currentPosts =  recipeArray.slice(firstPostIndex,lastPostIndex)
     
    

      return (

        <Layout setSearchValue={setSearchValue}>
       
          <Modal open={openModal} onClose={()=>setOpenModal(false)}>
          <h2>Wir wär's damit?</h2>
          <ModalElement key={recipeArray[random].sys.id} title={recipeArray[random].fields.title} rating={recipeArray[random].fields.rating} image={recipeArray[random].fields.headerImage.fields.file.url} 
   preparationTime={recipeArray[random].fields.preparationTime} description={recipeArray[random].fields.description}    category={recipeArray[random].fields.category}  id={recipeArray[random].sys.id}/>
        </Modal>
          

   
        <div className="container">
			<div className="row">
				<Category/>
			</div>

          <DataSearch rezepte={currentPosts} />
          <div className="row">
            <Pagination totalPosts={recipeArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
            <button className="btn btn-primary text-light" id="shuffle-receipe" onClick={zufall}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg>
            </button>
            <Modal open={openModal} onClose={()=>setOpenModal(false)}>
              <h2>Wir wär's damit?</h2>
              <ModalElement key={recipeArray[random].sys.id} title={recipeArray[random].fields.title} rating={recipeArray[random].fields.rating} image={recipeArray[random].fields.headerImage.fields.file.url} 
    preparationTime={recipeArray[random].fields.preparationTime} description={recipeArray[random].fields.description}    category={recipeArray[random].fields.category}  id={recipeArray[random].sys.id}/>
            </Modal>
		      </div>
      </div>
  
    </Layout>
      )

    }
    
    
    

  

    


 }
    