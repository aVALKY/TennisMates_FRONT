import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import { ContexteAuth } from '../context/AuthContext';
import instance from '../api/axios';
import '../styles/pages/ProfilePage.css';

const MonProfilPage = () => {
  const { utilisateur, connexion } = useContext(ContexteAuth);
  const [profile, setProfile] = useState(null);
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (utilisateur) {
        try {

          const token = localStorage.getItem('token');

          const response = await instance.get(`/utilisateurs/${utilisateur.UT_ID}` , {
            headers : {
              Authorization : "Bearer " + token
            }
          });
          const userData = response.data;

          // Mise à jour du profil dans l'état
          setProfile(userData.profile);
          setDescription(userData.profile?.PR_Description || '');

          connexion({ ...utilisateur, profile: userData.profile });
        } catch (error) {
          console.error("Erreur lors de la récupération du profil :", error);
        }
      }
    };

    fetchProfile();
  }, []);

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
        <div className="profile-description">
          <h2>Description</h2>
          {isEditing ? (
            <>
              <textarea
                className="description-field"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Modifier votre description"
              />
              <button className="btn-save-description" onClick={handleSave}>Enregistrer</button>
            </>
          ) : (
            <>
              <p>{description || "Pas de description"}</p>
              <button className="modifier-description" onClick={() => setIsEditing(true)}>
                Modifier la description
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonProfilPage;



