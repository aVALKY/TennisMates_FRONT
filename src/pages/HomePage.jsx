import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/pages/HomePage.css';
import tennisPlayer from "../Assets/images/Tennis_Player.png";
import logoRaquette from "../Assets/Logo/raquette.png";
import instance from '../api/instance';
import UserCard from '../components/UtilisateurCarte';
import '../styles/components/UtilisateurCarte.css';

const HomePage = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    instance.get('/profiles/')
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getAllUtilisateurs = () => {
    instance.get('/utilisateurs/')
      .then((response) => {
        setUtilisateurs(response.data);
        setShowResults(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const findProfileForUser = (userId) => {
    return profiles.find(profile => profile.userId === userId) || {};
  }

  return (
    <div>
      <Navbar />
      <div className='contenairPrincipal'>
        <div className='contenairPresentation'>
          <h1 className='titrePrincipal'>Trouver des partenaires de Tennis de façon simple</h1>
          <p className='textPresensation'>
            Accessible à tous, licenciés ou non, joueurs loisirs et compétiteurs, TennisMates vous propose plusieurs services :
          </p>
          <ul>
            <li>Trouve ton partenaire de Tennis/Padel</li>
            <li>Echange avec d'autre joueurs</li>
            <li>Trouve ton coach</li>
            <li>Découvre des clubs</li>
            <li>Découvre de nouveaux courts</li>
          </ul>
          <h2 id="titreRecherche">Rechercher : </h2>
          <div id="contenairRecherchePratique">
            <button className='contenairRecherche'>
              <img src={logoRaquette} alt="raquette" className='raquette' />
              <p className='pratiqueRecherche'>Tennis</p>
            </button>
            <button className='contenairRecherche'>
              <img src={logoRaquette} alt="raquette" className='raquette' />
              <p className='pratiqueRecherche'>Padel</p>
            </button>
          </div>
          <div id="contenairLocalisation">
            <div id="contenairTitreRenseignement">
              <h2 id="titreLocalisation">Localisation</h2>
              <input type="text" id="inputRenseignement" placeholder='Ville / Code Postal'/>
            </div>
            <div id="border"></div>
            <div id="contenairRayon">
              <span id="rayonResultat">RAYON : 0 km</span>
              <input type="range" id="rayonKm" min="0" max="50" step="1" defaultValue="0"/>
            </div>
            <div>
              <button id="BoutonResultatRecherche" onClick={getAllUtilisateurs}>Rechercher</button>
            </div>
          </div>
        </div>
        <div>
          <img src={tennisPlayer} alt="tennisPlayer" className="tennisPlayer" />
        </div>
      </div>
      <div id="bordureBlanche"></div>
      {showResults && (
        <>
          <h2 id="titreResultat">Résultats : </h2>
          <div className="contenairCarte">
            {utilisateurs.map((utilisateur) => {
              const profile = findProfileForUser(utilisateur.id);
              return (
                <UserCard key={utilisateur.id} utilisateur={utilisateur} profile={profile} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;