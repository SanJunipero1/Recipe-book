import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';



export default function RecipeDetailPageElement({title,preparation,image,ingredients,preparationTime}){
    
  const navigate = useNavigate()
    const [person,setPerson]=useState(1)
    const [amountCalc,setCalcAmount]=useState([])
    const desc =preparation.content[0].content[0].value
    const amount=[]




    
    
  
  
    
    function calculatorPlus(){
      setPerson(zahl=> zahl+1)
      setCalcAmount( amount.map(function(x) { return x * (person +1 ); }))
     
      
      
      
   
    }

    function calculatorMinus(){
      if(person > 1){
        setPerson(zahl=> zahl-1)
        setCalcAmount( amount.map(function(x) { return x * (person -1); }))
      }
      
    }




 


   const zutatsliste = ingredients.map((item)=>{
    amount.push(item.fields.amount)


    return <tr>
            
      <td class="p-3"> {item.fields.amount} {item.fields.unit}</td>
         <td>{item.fields.ingredient}</td>
       </tr>

    })


 

    


    
   

    






    if(person > 1 && amount){
      const unit = amountCalc.map(item=>({...item, item}))



      const ingAndAmount = ingredients.map((value,index)=>{
        const amountIndex = unit[index].item;
        console.log(amountIndex)
        return(
    
          <tr>     
          <td class="p-3"> {amountIndex} {value.fields.unit}</td>
             <td>{value.fields.ingredient}</td>
           </tr>
    
        )
    
    
    
      })
    
      console.log( unit)
      
      return(
        <>
        <div>

       
       
        </div>
        
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
           
            <div class="col-6 d-flex justify-content-between">
            <p class="text-end"><strong>Personen: {person} <button className="btn btn-primary m-1 text-light" onClick={calculatorPlus}>+</button> <button className="btn btn-primary m-1 text-light" onClick={calculatorMinus}>-</button></strong> </p>
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
           
          {ingAndAmount}
         
       
          
             




           
            
          </tbody>
  
        </table>
      </div>
    </div>

  </div>
       
        </>
    



      )


    }









    
    
    
    
    
    
    return(
       
        <>
        <div>

       
       
        </div>
        
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
           
            <div class="col-6 d-flex justify-content-between">
            <p class="text-end"><strong>Personen: {person} <button className="btn btn-primary m-1 text-light" onClick={calculatorPlus}>+</button> <button className="btn btn-primary m-1 text-light" onClick={calculatorMinus}>-</button></strong> </p>
              <p class="text-end"><strong>  Zubereitungsdauer: </strong>{preparationTime} min</p>
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