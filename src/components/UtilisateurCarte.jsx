import React from 'react';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import { useNavigate } from 'react-router-dom';

const UtilisateurCarte = ({ utilisateur, profile }) => {

  // State

  

  // Comportement
  const navigate = useNavigate();

  const profilePageRedirect = (idUtilisateur) => {
    navigate('/ProfilePage/'+idUtilisateur);
  }


  // Affichage
  return (
    <div onClick={ () => profilePageRedirect(utilisateur.UT_ID)} className="carteUtilisateur">
      <div className="utilisateurPrenom">{utilisateur.UT_Prenom}</div>
      <img src={userLogo} alt="User Logo" className="userLogo" />
        <div className="profilesClassement">Classement: {profile?.PR_Tennisniveau}</div>
      <div className="utilisateurVille">{utilisateur.UT_Ville}</div>
    </div>
  );
}

export default UtilisateurCarte;