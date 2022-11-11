import React from "react";
import * as Icon from 'react-bootstrap-icons';

export default function TopButton(){
    return(
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary m-1 text-light" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} >
        <Icon.ChevronDoubleUp size={40} color={'white'}/>
        </button>
        </div>
    )
}