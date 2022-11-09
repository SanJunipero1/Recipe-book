import React from 'react'

function index() {
  return (
<div class=" bg-dark ">
  <footer class="py-5 container ">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-light">
        <h5>Rechtliches</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Datenschutzvereinbarung</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Cookie-Richtlinien</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Nutzungsbedingungen</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Impressum</a></li>
          
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-light">
        <h5>FAQ & Service</h5>
        <ul class="nav flex-column ">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Häufig gestellte Fragen</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Placeholder</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Fanpaket</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-light">
        <h5>Lob & Kritik</h5>
        <ul class="nav flex-column ">
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-light ">Rezeptkritik</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-light">Verbesserungsvorschlaege</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Commmunity</a></li>
        
        </ul>
      </div>
 

      <div class="col-md-5 offset-md-1 mb-3 text-light ">
        <form>
          <h5>Newsletter</h5>
        
          <div class=" w-50">
          <label for="newsletter1" class="visually-hidden ">Dein Name</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Dein Name"/>
            <label for="newsletter1" class="visually-hidden ">E-Mail Adresse</label>
            <input id="newsletter1" type="text" class="form-control mt-3" placeholder="E-Mail Adresse"/>
            <button class="btn btn-dark border-primary w-100 mt-3" type="button">Newsletter abonnieren</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-light">
      <p className='m-auto'>Alle Rechte vorbehalten. MyDailyRecipe © 2022</p>
      <ul class="list-unstyled d-flex">
        
      </ul>
    </div>
  </footer>
</div>

  )
}

export default index