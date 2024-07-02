import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/profiles",
      element: <ProfilePage />,
    },
  ]);

export default router;