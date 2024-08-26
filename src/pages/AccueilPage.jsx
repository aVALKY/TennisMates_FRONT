import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/pages/AccueilPage.css';
import tennisPlayer from "../Assets/images/Tennis_Player.png";
import logoRaquette from "../Assets/Logo/raquette.png";
import UtilisateurService from '../Services/UtilisateurService';
import UserCard from '../components/UtilisateurCarte';
import '../styles/components/UtilisateurCarte.css';

const AccueilPage = () => {
  // State
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState ([]);

  // Comportement


  const fetchAllUtilisateurs = async () => {

    try {

      const response = await UtilisateurService.getAllUtilisateur();
      setUtilisateurs(response.data);
      setShowResults(true);
      
    } catch (error) {
      console.log(error);
    }
  };

  const gererChangement = (e) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)
  }
  const gererRecherche = () => {
    const userfilters = utilisateurs.filter((utilisateur) => {
      return utilisateur.UT_Ville.toLowerCase().includes(query) || utilisateur.UT_Codepostal.toLowerCase().includes(query)
    })
    setFilteredUsers(userfilters)
  }

  useEffect(() => {
    fetchAllUtilisateurs();
  }, []);

  
  // Affichage
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
            <li>Echange avec d'autres joueurs</li>
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
              <input type="text" id="inputRenseignement" onChange={gererChangement} placeholder='Ville / Code Postal' />
            </div>

            <div id="border"></div>

            <div>
              <button id="BoutonResultatRecherche" onClick={gererRecherche}>Rechercher</button>
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
          <div 
              className="contenairCarte">
              {filteredUsers.map((utilisateur) => {
              const profile = utilisateur.Profile;
              return (
                <UserCard utilisateur={utilisateur} profile={profile} 
                key={utilisateur.UT_ID}/>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default AccueilPage;