import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { FournisseurAuth } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FournisseurAuth>
      <RouterProvider router={router} />
      <ToastContainer />
    </FournisseurAuth>
  </React.StrictMode>
);

