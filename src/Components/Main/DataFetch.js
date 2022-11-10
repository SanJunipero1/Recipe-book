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
    

    //<Modal open={openModal} random={random} recipeArray={recipeArray}/>
   

   
    

    

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


    //<Element key={recipeArray[random2].sys.id} title={recipeArray[random2].fields.title} rating={recipeArray[random2].fields.rating} image={recipeArray[random2].fields.headerImage.fields.file.url} 
    //preparationTime={recipeArray[random2].fields.preparationTime} description={recipeArray[random2].fields.description}    category={recipeArray[random2].fields.category}  id={recipeArray[random2].sys.id}/>



 
   // if(random){

    //  const lastPostIndex= currentPage * postsPerPage
   //   const firstPostIndex = lastPostIndex - postsPerPage
   //   const currentPosts =  recipeArray.slice(firstPostIndex,lastPostIndex)
   //   return(
   ///    <div>
   //     <Search setSearchValue={setSearchValue}/>
   //    <Category/>
    //   <DataSearch rezepte={currentPosts} />
    //   <Pagination totalPosts={recipeArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    //      <div >
   //   <Element key={recipeArray[random].sys.id} title={recipeArray[random].fields.title} rating={recipeArray[random].fields.rating} image={recipeArray[random].fields.headerImage.fields.file.url} 
   //  preparationTime={recipeArray[random].fields.preparationTime} description={recipeArray[random].fields.description}    category={recipeArray[random].fields.category}  id={recipeArray[random].sys.id}/>
       
   //    </div>
    
   // <button className="btn btn-primary " onClick={zufall}>Zufallsrezept</button>
   //     </div>
    // )
    // }


     



  

    if(searchValue && recipeArray){ 
      return(
        <Layout>
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
        </Layout>
      )
    }
   // <div style={{height: '500px', backgroundColor: 'black',width: '500px'}}>
   // <Element key={recipeArray[random].sys.id} title={recipeArray[random].fields.title} rating={recipeArray[random].fields.rating} image={recipeArray[random].fields.headerImage.fields.file.url} 
   // preparationTime={recipeArray[random].fields.preparationTime} description={recipeArray[random].fields.description}    category={recipeArray[random].fields.category}  id={recipeArray[random].sys.id}/>
  // </div>


//<button className="btn btn-primary " onClick={zufall}>Zufallsrezept</button>    
  




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
          <div className="d-flex m-2">
        <Pagination totalPosts={recipeArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
        <button className="btn btn-primary text-light" onClick={zufall}>Keine Idee?</button>
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
    