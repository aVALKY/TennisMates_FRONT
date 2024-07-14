import React from 'react';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import Navbar from '../components/Navbar';
import '../styles/pages/ProfilePage.css';

const ProfilePage = () => {

    // State

    // Comportement

    // Affichage
  return (
    <div>
        <Navbar />
        <div id="ContenaireInformationJoueur">
            <img src={userLogo} alt="LogoUtilisateur" />
        </div>
    </div>
  )
} 

export default ProfilePage;