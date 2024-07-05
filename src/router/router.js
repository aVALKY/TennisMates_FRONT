import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ConnexionPage from "../pages/ConnexionPage";

const router = createBrowserRouter([
    {
      path: "/HomePage",
      element: <HomePage />,
    },
    {
      path: "/Profiles",
      element: <ProfilePage />,
    },
    {
      path: "/connexionPage",
      element: <ConnexionPage />,
    },
  ]);

export default router;