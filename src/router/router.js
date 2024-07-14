import { createBrowserRouter } from "react-router-dom";
import AccueilPage from "../pages/AccueilPage";
import InfoProfilePage from "../pages/InfoProfilePage";
import ConnexionPage from "../pages/ConnexionPage";
import InscriptionPage from "../pages/InscriptionPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/AccueilPage",
    element: <AccueilPage />,
  },
  {
    path: "/InfoProfilePage",
    element: <InfoProfilePage />,
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
    path: "/ProfilePage", 
    element: <ProfilePage />, 
  },
]);

export default router;