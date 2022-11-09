import React from "react";
import { useNavigate } from 'react-router-dom';
import Layout from "../../Layout";

export default function RecipeDetailPageElement({title,preparation,image,ingredients,preparationTime}){
    
    const ing =(ingredients)
    const desc =preparation.content[0].content[0].value
    

    
    
  
    const zutatsliste = ingredients.map((item)=>{
      console.log(item)
      return  <tr>
              <td class="p-3">{item.fields.amount} {item.fields.unit}</td>
              <td>{item.fields.ingredient}</td>
            </tr>
     
        
      
    })
    






    
    
    
    
    const navigate = useNavigate()
    
    
    
    
    
    return(
       
        <>
        <div>

       
       
        </div>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Home</button>
          <div class="container ">
          <div class="row d-flex justify-content-center m-2 ">
            <div class="col-md-8 col-sm-12 bg-white border border-opacity-25 rounded">
              <h2 class="d-flex justify-content-center p-3">{title}</h2>
            </div>
          </div>
      
          <div  class="row d-flex justify-content-center ">
            <div class="col-md-8 col-sm-12" >
              <img src={`https:${image}`}
            class="img-fluid img-responsive img-thumbnail"
            alt="Responsice image"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={title}
          />
            </div>
          </div>
      
        </div>
      
  
        <div class="container mt-4">
          <div class="row">
            <div class="col border border-opacity-25 rounded p-4 bg-white">
              <p>
           {desc}
              </p>
      
              
            </div>
          </div>
          <div class="row mt-4">
           
            <div class="col-6">
              <p class="text-end"><strong>Zubereitungsdauer: </strong>{preparationTime} min</p>
            </div>
          </div>
        </div>
        <div class="container mt-4">
    <div class="row">
      <div class="col">
        <table class="table table-striped  border border-opacity-25 rounded table-hover">
          <thead>
            <tr>
              <th  class="p-3">
                <h4>Menge</h4>
              </th>
              <th  class="p-3">
                <h4>Zutat</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {zutatsliste}
          </tbody>
  
        </table>
      </div>
    </div>

  </div>
       
        </>
    
    
     )
}