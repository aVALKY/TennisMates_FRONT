import React from 'react';
import logo from "../Assets/images/Tennis_ball.png";
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import "../styles/components/Navbar.css";

const Navbar = () => {
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
          <a className="lien-navigation" href="/homePage">
            <span>RECHERCHER</span>
          </a>
        </li>
        <li>
          <a className="lien-navigation" href="/connexionPage">
            <img src={userLogo} alt="Logo Utilisateur" className="logo-utilisateur" />
            <span>CONNEXION</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;