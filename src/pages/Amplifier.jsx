import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Amplifier.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';

import im1 from "../assets/amplifiers/1st amp. CA20+.jpg";
import im2 from"../assets/amplifiers/3rd amp. CA18+.jpg";
import im3 from "../assets/amplifiers/5th amp. CA12+.jpg";

import im4 from "../assets/amplifiers/CA20.jpg";
import im5 from "../assets/amplifiers/4th amp. CA18.jpg";
import im6 from "../assets/amplifiers/6th Amp. CA12.jpg";


import im7 from "../assets/amplifiers/mt1201_front.jpg";
import im8 from"../assets/amplifiers/mt1601_front.jpg";


import im9 from "../assets/amplifiers/ND 4000.png";
import im10 from "../assets/amplifiers/ND 5000 png.png";

import im11 from "../assets/amplifiers/PJ-2K2.png";
import im12 from "../assets/amplifiers/PJ-3K2 front.png";
import im13 from "../assets/amplifiers/PJ-4K2 front.png";

import im14 from "../assets/amplifiers/PZA-160DP.png";
import im15 from "../assets/amplifiers/PRO-1000 .png";
import im16 from "../assets/amplifiers/SPA-5000EM .png";
import im17 from "../assets/amplifiers/SSA 160DO Z BLACK1.png";
import im18 from "../assets/amplifiers/SSA 300DX FRONT - Copy.jpg";
import im19 from "../assets/amplifiers/SSA 5000DP Front.png";
import im20 from "../assets/amplifiers/SSA000DP Front.jpg";
import im21 from "../assets/amplifiers/SSA350USB FRONT.png";







// Array of image links and product names
const productData = [
  { id: 1, img: im1, name: "1st Amp CA20+" },
  { id: 2, img: im2, name: "3rd Amp CA18+" },
  { id: 3, img: im3, name: "5th Amp CA12+" },
  { id: 4, img: im4, name: "CA20" },
  { id: 5, img: im5, name: "4th Amp CA18" },
  { id: 6, img: im6, name: "6th Amp CA12" },
  { id: 7, img: im7, name: "MT1201 Front" },
  { id: 8, img: im8, name: "MT1601 Front" },
  { id: 9, img: im9, name: "ND 4000" },
  { id: 10, img: im10, name: "ND 5000" },
  { id: 11, img: im11, name: "PJ-2K2" },
  { id: 12, img: im12, name: "PJ-3K2 Front" },
  { id: 13, img: im13, name: "PJ-4K2 Front" },
  { id: 14, img: im14, name: "PZA-160DP" },
  { id: 15, img: im15, name: "PRO-1000" },
  { id: 16, img: im16, name: "SPA-5000EM" },
  { id: 17, img: im17, name: "SSA 160DO Z Black" },
  { id: 18, img: im18, name: "SSA 300DX Front" },
  { id: 19, img: im19, name: "SSA 5000DP Front" },
  { id: 20, img: im20, name: "SSA000DP Front" },
  { id: 21, img: im21, name: "SSA350USB Front" }
  
];

  function Amplifier() {
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
        <h1>Amplifiers</h1>
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
  
  export default Amplifier;