import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/pages/InfoProfilePage.css';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';
import { toast } from 'react-toastify';

const InfoProfilePage = () => {

  // State 
  const [PR_Tennisniveau, setPR_Tennisniveau] = useState("");
  const [PR_Padelniveau, setPR_Padelniveau] = useState("");
  const [PR_Description, setPR_Description] = useState("");
  const navigate = useNavigate();

  // Comportement 
  const AccueilRedirect = () => {
    navigate('/AccueilPage');
  }

  const ValiderInfos = () => {
    const UT_ID = localStorage.getItem('UT_ID');
    instance
      .post("/profiles/", {
        UT_ID,
        PR_Tennisniveau,
        PR_Padelniveau,
        PR_Description,
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
        <p id="TextRenseignement">Quelque renseignement afin de trouver votre partenaire idéal</p>
        <div className="container-identification">
          <select
            className="SelectInfosProfile"
            value={PR_Tennisniveau}
            onChange={(e) => setPR_Tennisniveau(e.target.value)}
          >
            <option value="" disabled>Classement Tennis</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermediaire">Intermediaire</option>
            <option value="Expert">Expert</option>
          </select>

          <select
            className="SelectInfosProfile"
            value={PR_Padelniveau}
            onChange={(e) => setPR_Padelniveau(e.target.value)}
          >
            <option value="" disabled>Classement Padel</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermediaire">Intermediaire</option>
            <option value="Expert">Expert</option>
          </select>

          <textarea
            id="DescriptionProfile"
            placeholder="Description"
            value={PR_Description}
            onChange={(e) => setPR_Description(e.target.value)}
          />
        </div>

        <div className="container-identification">
          <button
            className="button button-identifier"
            onClick={()=>{ValiderInfos();  AccueilRedirect();}}
          >
            Valider
          </button>
        </div>
        <p className="text-info-connexion">Connexion nécessaire pour trouver votre partenaire.</p>
      </div>
    </div>
  )
}

export default InfoProfilePage;