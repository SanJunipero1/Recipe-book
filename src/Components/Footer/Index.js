import React from 'react'

function index() {
	return (
		<footer className="bg-dark py-5 mt-5">

			<div className="container">
				{/* Footer Reihe: Aufteilung: 2 + 2 + 2 + 3 + 3 = 12 */}
				<div className="row">
					{/* Erste Reihe */}
					<div className="col-sm-12 col-md-2 mb-3 text-light">
						<h4>Rechtliches</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Datenschutzvereinbarung</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Cookie-Richtlinien</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Nutzungsbedingungen</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Impressum</a></li>
						</ul>
					</div>

					<div className="col-sm-12 col-md-2 mb-3 text-light">
						<h4>FAQ & Service</h4>
						<ul className="nav flex-column ">
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Häufig gestellte Fragen</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Warum sind wir so geil?</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Fanpaket</a></li>
						</ul>
					</div>

					<div className="col-sm-12 col-md-2 mb-3 text-light">
						<h4>Lob & Kritik</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Rezeptkritik</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Verbesserungsvorschlaege</a></li>
							<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Commmunity</a></li>
						</ul>
					</div>
					<div className="col-sm-12 col-md-3 mb-3 text-light">
						<h4>Unser Versprechen</h4>
						<div id="quality-batch-wrapper">
							<p id="quality-batch-text"><span>100%</span><span>Quality</span></p>
						</div>
					</div>
					<div className="col-sm-12 col-md-3 mb-3 text-light">
						<h4>Newsletter</h4>
						<form>
							<div className="mb-4">
								<label for="customer-name" className="form-label visually-hidden">Dein Name</label>
								<input type="text" className="form-control" id="customer-name" placeholder="Dein Name" aria-describedby="customer-name-help" />
								<div id="customer-name-help" className="form-text text-light visually-hidden">We'll never share your email with anyone else.</div>
							</div>
							<div className="mb-4">
								<label for="customer-email" className="form-label visually-hidden">Password</label>
								<input type="password" className="form-control" placeholder="Deine E-Mail" id="customer-email" />
							</div>
							<button type="submit" className="btn btn-outline-primary w-100">Subscribe</button>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col py-1">
						<hr style={{color:"white"}} />
					</div>
				</div>
				<div className="row mt-4">
					<div className="col text-center">
						<p className="text-light mb-0">All rights reserved. MyDailyReceipe &copy; 2022.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default index