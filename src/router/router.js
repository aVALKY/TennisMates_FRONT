import { createBrowserRouter } from "react-router-dom";
import AccueilPage from "../pages/AccueilPage";
import InfoProfilePage from "../pages/InfoProfilePage";
import ConnexionPage from "../pages/ConnexionPage";
import InscriptionPage from "../pages/InscriptionPage";

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
]);

export default router;