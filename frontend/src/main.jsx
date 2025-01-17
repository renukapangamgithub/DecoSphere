import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <BrowserRouter> 
        <App />
        <ToastContainer position="top-right" autoClose={5000} />  
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
