import { createBrowserRouter } from "react-router-dom";
import AccueilPage from "../pages/AccueilPage";
import ConnexionPage from "../pages/ConnexionPage";
import InscriptionPage from "../pages/InscriptionPage";
import ProfilePage from "../pages/ProfilePage";
import MonProfilPage from '../pages/MonProfilPage';
import SupprimerComptePage from "../pages/SupprimerComptePage";

const router = createBrowserRouter([
  {
    path: "/AccueilPage",
    element: <AccueilPage />,
  },
  {
    path: "/ConnexionPage",
    element: <ConnexionPage />,
  },
  {
    path: "/InscriptionPage", 
    element: <InscriptionPage />, 
  },
  {
    path: "/ProfilePage/:idUtilisateur", 
    element: <ProfilePage />, 
  },
  {
    path: "/MonProfil", 
    element: <MonProfilPage />, 
  },
  {
    path: "/supprimerCompte",
    element: <SupprimerComptePage />
  }
]);

export default router;