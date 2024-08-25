import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ContexteAuth } from '../context/AuthContext';
import instance from '../api/axios';
import "../styles/pages/SupprimerComptePage.css";

const SupprimerComptePage = () => {
  const { utilisateur, deconnexion } = useContext(ContexteAuth);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) {
      try {
        const token = localStorage.getItem('token');
        await instance.delete(`/utilisateurs/${utilisateur.UT_ID}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        });
        alert('Compte supprimé avec succès.');
        deconnexion();
        navigate('/accueilPage');
      } catch (error) {
        console.error("Erreur lors de la suppression du compte :", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="delete-container">
        <h1>Supprimer mon compte</h1>
        <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
        <button className="btn-delete-account" onClick={handleDeleteAccount}>Confirmer la suppression</button>
        <button className="btn-cancel" onClick={() => navigate('/MonProfil')}>Annuler</button>
      </div>
    </div>
  );
};

export default SupprimerComptePage;
