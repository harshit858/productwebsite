import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Amplifier.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';

import light1 from "../assets/lights/DMX-512.png";
import light2 from "../assets/lights/DSC01709.jpg";
import light3 from "../assets/lights/DSC01709.png";
import light4 from "../assets/lights/DSC01711.jpg";
import light5 from "../assets/lights/DSC01715.jpg";
import light6 from "../assets/lights/DSC01724.jpg";
import light7 from "../assets/lights/DSC01725.jpg";
import light8 from "../assets/lights/Flight Peti.png";
import light9 from "../assets/lights/Heat sink.png";
import light10 from "../assets/lights/mini sharpy.png";
import light11 from "../assets/lights/PILOT 2000.png";
import light12 from "../assets/lights/PZ-54 front.png";
import light13 from "../assets/lights/PZ-60 front.png";
import light14 from "../assets/lights/Smoke PM1200SL.png";

const productData = [
  { id2: 1, img: light1, name: "DMX-512 Light" },
  { id2: 2, img: light2, name: "DSC01709 Light" },
  { id2: 3, img: light3, name: "DSC01709 Light" },
  { id2: 4, img: light4, name: "DSC01711 Light" },
  { id2: 5, img: light5, name: "DSC01715 Light" },
  { id2: 6, img: light6, name: "DSC01724 Light" },
  { id2: 7, img: light7, name: "DSC01725 Light" },
  { id2: 8, img: light8, name: "Flight Peti Light" },
  { id2: 9, img: light9, name: "Heat Sink Light" },
  { id2: 10, img: light10, name: "Mini Sharpy Light" },
  { id2: 11, img: light11, name: "PILOT 2000 Light" },
  { id2: 12, img: light12, name: "PZ-54 Front Light" },
  { id2: 13, img: light13, name: "PZ-60 Front Light" },
  { id2: 14, img: light14, name: "Smoke PM1200SL Light" },
];

  
  function DJ() {
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
        <h1>DJ Lights</h1>
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
  
  export default DJ;