import React, { useEffect, useState } from 'react';
import userLogo from "../Assets/Logo/USER_ACCOUNT.png";
import Navbar from '../components/Navbar';
import '../styles/pages/ProfilePage.css';
import UtilisateurService from '../Services/UtilisateurService';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

    // State
    const params = useParams();
    const [utilisateur, setUtilisateur] = useState({});
    const [profile, setProfile] = useState({});

    // Comportement
    const recupererUtilisateurEtProfile = async (idUtilisateur) => {
        try {
            const response = await UtilisateurService.getUtilisateurById(idUtilisateur);
            setUtilisateur(response.data);

            if (response.data.profile) {
                setProfile(response.data.profile);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        recupererUtilisateurEtProfile(params.idUtilisateur);
    }, [params.idUtilisateur]);

    // Affichage
    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <img src={userLogo} alt="Logo Utilisateur" className="profile-image"/>
                    <div className="profile-details">
                        <h1>{utilisateur.UT_Prenom} {utilisateur.UT_Nom}</h1>
                        <p>{utilisateur.UT_Ville}</p>
                    </div>
                    <div className="profile-rankings">
                        <div className="ranking">
                            <h2>Classement Tennis</h2>
                            <p>{profile.PR_Tennisniveau}</p>
                        </div>
                        <div className="ranking">
                            <h2>Classement Padel</h2>
                            <p>{profile.PR_Padelniveau}</p>
                        </div>
                    </div>
                </div>
                <div className="profile-description">
                    <h2>Description</h2>
                    <p>{profile.PR_Description || "Pas de description"}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;

