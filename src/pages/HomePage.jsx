// rafce
import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/pages/HomePage.css'
import tennisPlayer from "../Assets/images/Tennis_Player.png"
import logoRaquette from "../Assets/Logo/raquette.png"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='contenairPrincipal'>
        <div className='contenairPresentation'>
          <h1 className='titrePrincipal'>Trouver des partenaires de Tennis de façon simple</h1>
          <p className='textPresensation'>Accessible à tous, licenciés ou non, joueurs loisirs et compétiteurs, TennisMates vous propose plusieurs services : </p>
          <ul>
            <li>Trouve ton partenaire de Tennis/Padel</li>
            <li>Echange avec d'autre joueurs</li>
            <li>Trouve ton coach</li>
            <li>Découvre des clubs</li>
            <li>Découvre de nouveau courts</li>
          </ul>
          <h2 id="titreRecherche">Rechercher : </h2>
          <div id="contenairRecherchePratique">
            <div className='contenairRecherche'>
                <img src={logoRaquette} alt="raquette" className='raquette' />
                <p className='pratiqueRecherche'>Tennis</p>
            </div>
            <div className='contenairRecherche'>
                <img src={logoRaquette} alt="raquette" className='raquette' />
                <p className='pratiqueRecherche'>Padel</p>
            </div>
          </div>
        </div>
        <div>
          <img src={tennisPlayer} alt="tennisPlayer" className="tennisPlayer" />
        </div>
      </div>
      <div>
      </div>
    </div>
  
  )
}

export default HomePage;