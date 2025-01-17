import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS for styling

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Wrap your App with AuthProvider */}
      <BrowserRouter> {/* Wrap your App with BrowserRouter */}
        <App />
        <ToastContainer position="top-right" autoClose={5000} />  {/* Add ToastContainer here */}
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
