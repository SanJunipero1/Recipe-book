import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faClock } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-bootstrap-icons';

const logo = <FontAwesomeIcon icon={faUtensils} />



function Header() {
    return (
      
        <nav className="navbar navbar-expand-md navbar-dark bg-primary" aria-label="Fourth navbar example">
            <div className="container-md">
            <a className="navbar-brand" href="/">{logo}&nbsp;MyDailyReceipe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
               
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/"><Icon.House/> Start </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/"><Icon.CardList/> Kategorie</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active"><Icon.PlusSquare/> Rezept einreichen</a>
                    </li>
                    
                </ul>
            </div>
            </div>
        </nav>


     
    )
}

export default Header