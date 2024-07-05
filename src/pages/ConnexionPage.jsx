import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/pages/ConnexionPage.css'

const ConnexionPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container-information-connexion">
            <h1 className="title-connexion">S'identifier</h1>
            <div className="container-identification">
                <input type="email" className="input-identification" placeholder="E-mail"/>
                <input type="password" className="input-identification" placeholder="Mot de passe"/>
            </div>
            <div className="container-identification">
                <button className="button button-identifier">S'identifier</button>
            </div>
            <h2 className="text-separation">OU</h2>
            <div className="container-identification">
                <button className="button button-inscription">Inscription</button>
            </div>
            <p className="text-info-connexion">Connexion nécessaire pour trouver votre partenaire.</p>
        </div>
    </div>
  )
}

export default ConnexionPage;