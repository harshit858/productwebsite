import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ConferenceSystem.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';

import im1 from "../assets/microphone.png";
import im2 from "../assets/microphone.png";
const productData = [
    { id2: 1, img: im1, name: "Conference Wired Microphone" },
    { id2: 2, img: im2, name: "Conference Wireless Microphone" },
    
  ];
  
  function ConferenceSystem() {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { id } = useParams();
  
    // Calculate the number of placeholders needed
    const itemsPerRow = 3;
    const totalItems = productData.length;
    const placeholdersNeeded = (itemsPerRow - (totalItems % itemsPerRow)) % itemsPerRow;
  
    // Handle product click to navigate to the product's page
    const handleProductClick = (id) => {
      navigate(`/product/:id/${id2}`); // Navigate to the product's detailed page
    };
  
    return (
      <div id="products" className="container">
        <h1>Conference Systems</h1>
        <div className="product-list">
          {/* Render the product cards */}
          {productData.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleProductClick(product.id)} 
              className="product-card"
            >
              <Card
                img={product.img}
                name={product.name}
              />
            </div>
          ))}
  
          {/* Render placeholder items */}
          {Array.from({ length: placeholdersNeeded }).map((_, index) => (
            <div key={`placeholder-${index}`} className="placeholder-item"></div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ConferenceSystem;