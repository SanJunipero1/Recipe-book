
import React,{useEffect, useState} from "react";

export default function Search ({setSearchValue}){
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
       setSearchTerm(event.target.value)
    }

    function runSearch(){
        setSearchValue(searchTerm)
    }

    return(
        <div className="App-receipe-search">
            <div className="container">
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div className="wrap-receipe-search">
                            <div className="input-group">
                                <input onChange={handleChange} type="search" id="form1" className="form-control form-control-lg" placeholder="Was essen wir heute?" />
                                <label className="form-label visually-hidden" for="form1">Rezeptsuche</label>
                            
                                <button type="button" onClick={runSearch} className="btn btn-primary btn-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
                   
    )
}







