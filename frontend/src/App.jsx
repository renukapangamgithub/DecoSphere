import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ViewAllProducts from './pages/ViewAllProducts/ViewAllProducts';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SaleSection from './pages/SaleSection/SaleSection';
import ExploreSection from './pages/ExploreSection/ExploreSection';
import TrendingCollections from './pages/TrendingCollections/TrendingCollections';
import Bedding from './pages/Bedding/Bedding';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/view-all-products" element={isAuthenticated ? <ViewAllProducts /> : <Navigate to="/login" />} />
          <Route path="/sale" element={isAuthenticated ? <SaleSection /> : <Navigate to="/login" />} />
          <Route path="/explore" element={isAuthenticated ? <ExploreSection /> : <Navigate to="/login" />} />
          <Route path="/trending" element={isAuthenticated ? <TrendingCollections /> : <Navigate to="/login" />} />
          <Route path="/bedding" element={isAuthenticated ? <Bedding /> : <Navigate to="/login" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
