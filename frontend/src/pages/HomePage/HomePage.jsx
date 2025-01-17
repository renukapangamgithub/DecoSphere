import React from 'react';
import { Link } from 'react-router-dom';  
import SaleSection from '../SaleSection/SaleSection';
import TrendingCollections from '../TrendingCollections/TrendingCollections';
import ExploreSection from '../ExploreSection/ExploreSection';
import Bedding from '../Bedding/Bedding';
import ViewAllProducts from '../ViewAllProducts/ViewAllProducts';

const HomePage = () => {
  return (
    <div>
      {/* Sale Section */}
      <SaleSection />
      
      {/* Trending Collections */}
      <TrendingCollections />

      {/* Explore Section */}
      <ExploreSection />

      {/* Bedding Section */}
      <Bedding />

      {/* View All Products Section with Button */}
       <ViewAllProducts/>
    </div>
  );
};

export default HomePage;
