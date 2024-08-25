import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/images/Tennis_ball.png";
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import "../styles/components/Navbar.css";
import { ContexteAuth } from '../context/AuthContext';

const Navbar = () => {
  const { utilisateur, deconnexion } = useContext(ContexteAuth);

  return (
    <nav className="barre-navigation">
      <div className="navigation-gauche">
        <img src={logo} alt="Logo Barre de Navigation" className="logo-navigation" />
        <span className="titre-navigation">
          <span className="titre-blanc">Tennis</span>
          <span className="titre-jaune">Mates</span>
        </span>
      </div>
      <ul className="container-connexion-recherche">
        <li>
          <Link className="lien-navigation" to="/AccueilPage">
            <span>RECHERCHER</span>
          </Link>
        </li>
        {utilisateur ? (
          <li className="user-menu">
            <Link to="/MonProfil" className="lien-navigation">
              <img src={userLogo} alt="Logo Utilisateur" className="logo-utilisateur" />
              <span>{utilisateur.UT_Prenom}</span>
            </Link>
            <button className="btn-deconnexion" onClick={deconnexion}>Déconnexion</button>
          </li>
        ) : (
          <li>
            <Link className="lien-navigation" to="/ConnexionPage">
              <img src={userLogo} alt="Logo Utilisateur" className="logo-utilisateur" />
              <span>CONNEXION</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


