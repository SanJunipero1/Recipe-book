import React from "react";

export default function Breadcrumbs(){
    return(
        <div className="container">
            <div className="row">
                <div className="col border-bottom pt-3 mb-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Home</li>
                            <li class="breadcrumb-item active" aria-current="page">Rezepdetails</li>
                        </ol>
                    </nav>
                </div>
            </div>  
        </div>
    )
}