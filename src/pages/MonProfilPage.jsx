import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import { ContexteAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import instance from '../api/axios';
import '../styles/pages/ProfilePage.css';

const MonProfilPage = () => {
  const { utilisateur } = useContext(ContexteAuth);
  const [profile, setProfile] = useState(null);
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    const fetchProfile = async () => {
      if (utilisateur) {
        try {
          const token = localStorage.getItem('token');

          const response = await instance.get(`/utilisateurs/${utilisateur.UT_ID}`, {
            headers: {
              Authorization: "Bearer " + token
            }
          });

          const userData = response.data;

          setProfile(userData.profile);
          setDescription(userData.profile?.PR_Description || '');
        } catch (error) {
          console.error("Erreur lors de la récupération du profil :", error);
        }
      }
    };

    fetchProfile();
  }, [utilisateur]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await instance.patch(`/profiles/${profile.PR_ID}`, 
        { PR_Description: description }, 
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      alert('Description mise à jour avec succès !');
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la description :", error);
    }
  };

  const handleDeleteRedirect = () => {
    navigate('/supprimerCompte');
  };

  if (!profile) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img src={userLogo} alt="Logo Utilisateur" className="profile-image" />
          <div className="profile-details">
            <h1>{utilisateur.UT_Prenom} {utilisateur.UT_Nom}</h1>
            <p>{utilisateur.UT_Ville}</p>
            <div className="profile-rankings">
              <div className="ranking">
                <h2>Classement Tennis</h2>
                <p>{profile.PR_Tennisniveau || 'N/C'}</p>
              </div>
              <div className="ranking">
                <h2>Classement Padel</h2>
                <p>{profile.PR_Padelniveau || 'N/C'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profilDescription">
          <h2>Description</h2>
          {isEditing ? (
            <>
              <textarea
                className="descriptionChamp"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Modifier votre description"
              />
              <button className="enregistrerDescription" onClick={handleSave}>Enregistrer</button>
            </>
          ) : (
            <>
              <p>{description || "Pas de description"}</p>
              <button className="modifierDescription" onClick={() => setIsEditing(true)}>
                Modifier la description
              </button>
            </>
          )}
          <button className="deleteRedirect" onClick={handleDeleteRedirect}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonProfilPage;

