import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/pages/ConnexionPage.css';
import instance from '../api/axios';
import { toast } from 'react-toastify';

const ConnexionPage = () => {
  
  // State
  const [UT_Email, setUT_Email] = useState("");
  const [UT_Motdepasse, setUT_Motdepasse] = useState("");
  const navigate = useNavigate();

  // Comportement
  const inscriptionRedirect = () => {
    navigate('/InscriptionPage');
  }

  const connexion = () => {
    instance
      .post("/authenticate/login", {
        UT_Email,
        UT_Motdepasse
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        toast.success("Connexion réussie");
        navigate('/AccueilPage');
      })
      .catch((error) => {
        toast.error("Erreur de connexion");
        console.log(error);
      });
  }

  // Affichage
  return (
    <div>
      <Navbar />
      <div className="container-information-connexion">
        <h1 className="title-connexion">S'identifier</h1>
        <div className="container-identification">
          <input
            type="email"
            className="input-identification"
            placeholder="E-mail"
            value={UT_Email}
            onChange={(e) => setUT_Email(e.target.value)}
          />
          <input
            type="password"
            className="input-identification"
            placeholder="Mot de passe"
            value={UT_Motdepasse}
            onChange={(e) => setUT_Motdepasse(e.target.value)}
          />
        </div>
        <div className="container-identification">
          <button className="button button-identifier" onClick={connexion}>S'identifier</button>
        </div>
        <h2 className="text-separation">OU</h2>
        <div className="container-identification">
          <button className="button button-inscription" onClick={inscriptionRedirect}>Inscription</button>
        </div>
        <p className="text-info-connexion">Connexion nécessaire pour trouver votre partenaire.</p>
      </div>
    </div>
  );
}

export default ConnexionPage;