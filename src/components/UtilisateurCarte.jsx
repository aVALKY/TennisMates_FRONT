import React from 'react';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";

const UtilisateurCarte = ({ utilisateur, profile }) => {
  return (
    <div className="carteUtilisateur">
      <div className="utilisateurPrenom">{utilisateur.UT_Prenom}</div>
      <img src={userLogo} alt="User Logo" className="userLogo" />
      <div className="profilesClassement">Classement: {profile.PR_Tennisniveau || 'NC'}</div>
      <div className="utilisateurVille">{utilisateur.UT_Ville}</div>
    </div>
  );
}

export default UtilisateurCarte;