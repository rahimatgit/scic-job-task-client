import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import  { Toaster } from 'react-hot-toast';
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    <App />
    <Toaster></Toaster>
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
