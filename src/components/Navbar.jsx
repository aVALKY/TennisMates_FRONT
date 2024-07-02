import React from 'react'
import logo from "../Assets/images/Tennis_ball.png"
import userLogo from "../Assets/Logo/USER_ACCOUNT.png"
import "../styles/components/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="LogoNavbar" className="LogoNavbar" />
        <span className="titleNavbar">
          <span className="titleWhite">Tennis</span>
          <span className="titleYellow">Mates</span>
        </span>
      </div>
      <div className="navbar-right">
        <button className="navbarRechercher">
          RECHERCHER
        </button>
        
        <button className="navbarConnexion">
          <img src={userLogo} alt="UserLogo" className="UserLogo" />
          Connexion/Inscription
        </button>
      </div>
    </nav>
  );
}

export default Navbar;