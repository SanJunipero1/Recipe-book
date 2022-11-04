
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
        <div class="wrap-slideshow">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="input-group">
                            <div className="form-outline">
                                <input onChange={handleChange} type="search" id="form1" className="form-control" />
                                <label className="form-label" for="form1">Search</label>
                            </div>
                            <button type="button" onClick={runSearch} className="btn btn-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}







