import React from "react";
import "./Bedding.css";
import image7 from "../../assets/images/image7.jpg"; 
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";

const Bedding = () => {
  const products = [
    {
      name: "Luxury Bed Set",
      description: "A premium quality bedding set made from soft, breathable fabric.",
      price: "$199.99",
      image: image7,
    },
    {
      name: "Cotton Pillow",
      description: "Soft and supportive cotton pillows for a good night's sleep.",
      price: "$29.99",
      image: image8, 
    },
    {
      name: "Comforter Set",
      description: "A cozy comforter set designed to keep you warm throughout the night.",
      price: "$89.99",
      image: image9,
    },
  ];

  return (
    <div className="bedding-container">
      <h1 className="bedding-title">Premium Bedding Collection</h1>
      <div className="bedding-products">
        {products.map((product, index) => (
          <div key={index} className="bedding-item">
            <div className="bedding-image-container">
              <img src={product.image} alt={product.name} className="bedding-image" />
              <div className="quick-view">Quick View</div>
            </div>
            <div className="bedding-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bedding;
