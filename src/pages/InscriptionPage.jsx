import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import '../styles/pages/InscriptionPage.css';
import instance from '../api/axios';

const InscriptionPage = () => {
  const navigate = useNavigate();

  // State
  const [UT_Email, setUT_Email] = useState("");
  const [UT_Motdepasse, setUT_Motdepasse] = useState("");
  const [UT_Nom, setUT_Nom] = useState("");
  const [UT_Prenom, setUT_Prenom] = useState("");
  const [UT_Ville, setUT_Ville] = useState("");
  const [UT_Codepostal, setUT_Codepostal] = useState("");
  const [complet, setComplet] = useState(false);

  useEffect(() => {
    if (UT_Email && UT_Motdepasse && UT_Nom && UT_Prenom && UT_Ville && UT_Codepostal) {
      setComplet(true);
    } else {
      setComplet(false);
    }
  }, [UT_Email, UT_Motdepasse, UT_Nom, UT_Prenom, UT_Ville, UT_Codepostal]);

  // Comportement
  const inscription = () => {
    instance
      .post("authenticate/register/", {
        UT_Email,
        UT_Motdepasse,
        UT_Nom,
        UT_Prenom,
        UT_Ville,
        UT_Codepostal
      })
      .then((response) => {
        toast.success(response.data.message);
        navigate('/ConnexionPage');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Affichage
  return (
    <div>
      <Navbar />
      <div className="container-information-connexion">
        <h1 className="title-connexion">Inscription</h1>
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
          <input
            type="text"
            className="input-identification"
            placeholder="Nom"
            value={UT_Nom}
            onChange={(e) => setUT_Nom(e.target.value)}
          />
          <input
            type="text"
            className="input-identification"
            placeholder="Prenom"
            value={UT_Prenom}
            onChange={(e) => setUT_Prenom(e.target.value)}
          />
          <input
            type="text"
            className="input-identification"
            placeholder="Ville"
            value={UT_Ville}
            onChange={(e) => setUT_Ville(e.target.value)}
          />
          <input
            type="text"
            className="input-identification"
            placeholder="Code Postal"
            value={UT_Codepostal}
            onChange={(e) => setUT_Codepostal(e.target.value)}
          />
        </div>
        <div className="container-identification">
          <button
            className="button button-identifier"
            onClick={inscription}
            disabled={!complet}
          >
            S'inscrire
          </button>
        </div>
        <p className="text-info-connexion">Connexion nécessaire pour trouver votre partenaire.</p>
      </div>
    </div>
  );
};

export default InscriptionPage;