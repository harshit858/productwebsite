import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ConferenceSystem.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';

import im1 from "../assets/microphones/Alexa Z3.jpg";
import im2 from "../assets/microphones/Aqua 99.png";
import im3 from "../assets/microphones/AT-500(1).png";
import im4 from "../assets/microphones/CV-9000.jpg";
import im5 from "../assets/microphones/DH-744.jpeg";
import im6 from "../assets/microphones/DH-769.jpeg";
import im7 from "../assets/microphones/MIC.jpg";
import im8 from "../assets/microphones/microphone.png";
import im9 from "../assets/microphones/penza beta.jpg";
import im10 from "../assets/microphones/pga-48.jpg";
import im11 from "../assets/microphones/Promax 58S Beta.png";
import im12 from "../assets/microphones/PWM-222.jpg";
import im13 from "../assets/microphones/PWM-955-3.jpg";
import im14 from "../assets/microphones/pwm-955.jpg";
import im15 from "../assets/microphones/PZ-57A Beta.png";
import im16 from "../assets/microphones/pz-200.png";
import im17 from "../assets/microphones/PZ-286 f.png";
import im18 from "../assets/microphones/PZ-286.jpg";
import im19 from "../assets/microphones/PZ-369.png";
import im20 from "../assets/microphones/PZ-600 front.png";
import im21 from "../assets/microphones/St-968.jpeg";
import im22 from "../assets/microphones/TABLETOP-101.jpg";
import im23 from "../assets/microphones/TABLETOP-202.jpg";
import im24 from "../assets/microphones/XTU90H.jpg";

const productData = [
  { id2: 1, img: im1, name: "Alexa Z3 Microphone" },
  { id2: 2, img: im2, name: "Aqua 99 Microphone" },
  { id2: 3, img: im3, name: "AT-500(1) Microphone" },
  { id2: 4, img: im4, name: "CV-9000 Microphone" },
  { id2: 5, img: im5, name: "DH-744 Microphone" },
  { id2: 6, img: im6, name: "DH-769 Microphone" },
  { id2: 7, img: im7, name: "MIC" },
  { id2: 8, img: im8, name: "Microphone" },
  { id2: 9, img: im9, name: "Penza Beta Microphone" },
  { id2: 10, img: im10, name: "PGA-48 Microphone" },
  { id2: 11, img: im11, name: "Promax 58S Beta Microphone" },
  { id2: 12, img: im12, name: "PWM-222 Microphone" },
  { id2: 13, img: im13, name: "PWM-955-3 Microphone" },
  { id2: 14, img: im14, name: "PWM-955 Microphone" },
  { id2: 15, img: im15, name: "PZ-57A Beta Microphone" },
  { id2: 16, img: im16, name: "PZ-200 Microphone" },
  { id2: 17, img: im17, name: "PZ-286 F Microphone" },
  { id2: 18, img: im18, name: "PZ-286 Microphone" },
  { id2: 19, img: im19, name: "PZ-369 Microphone" },
  { id2: 20, img: im20, name: "PZ-600 Front Microphone" },
  { id2: 21, img: im21, name: "St-968 Microphone" },
  { id2: 22, img: im22, name: "Tabletop-101 Microphone" },
  { id2: 23, img: im23, name: "Tabletop-202 Microphone" },
  { id2: 24, img: im24, name: "XTU90HJ Microphone" },
];

  
  function Microphone() {
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
        <h1>Microphones</h1>
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
  
  export default Microphone;