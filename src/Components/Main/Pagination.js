import React from "react";

export default function Pagination({totalPosts, postsPerPage,setCurrentPage}){
    
    let pages= []
    
    for(let i =1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    
    return(
        <div className="col text-center my-5">
        {
            pages.map((page,index) =>{
                return <button className="btn btn-primary m-1 text-light" onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
            })
        }
        </div>
    )
}