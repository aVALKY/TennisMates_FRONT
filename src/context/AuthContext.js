import React, { createContext, useState } from 'react';

export const ContexteAuth = createContext();

export const FournisseurAuth = ({ children }) => {
    const [utilisateur, setUtilisateur] = useState(() => {
        const utilisateurSauvegarde = localStorage.getItem('utilisateur');
        try {
            return utilisateurSauvegarde ? JSON.parse(utilisateurSauvegarde) : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    });

    const connexion = (donneesUtilisateur) => {
        setUtilisateur(donneesUtilisateur);
        localStorage.setItem('utilisateur', JSON.stringify(donneesUtilisateur));
    };

    const deconnexion = () => {
        setUtilisateur(null);
        localStorage.removeItem('utilisateur');
        localStorage.removeItem('token');
    };

    return (
        <ContexteAuth.Provider value={{ utilisateur, connexion, deconnexion }}>
            {children}
        </ContexteAuth.Provider>
    );
};


