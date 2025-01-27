import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Amplifier.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';

import sp1 from "../assets/speakers/1st PCE-65T.jpg";
import sp2 from "../assets/speakers/1st PW-081.jpg";
import sp3 from "../assets/speakers/2nd PCE-66T.jpg";
import sp4 from "../assets/speakers/2nd PW-2401S.jpg";
import sp5 from "../assets/speakers/3rd PCE-68T.jpg";
import sp6 from "../assets/speakers/3rd PW-2501S.jpg";
import sp7 from "../assets/speakers/4th PCE-75T.jpg";
import sp8 from "../assets/speakers/4th PW-2601S.jpg";
import sp9 from "../assets/speakers/5th PCE-76T.jpg";
import sp10 from "../assets/speakers/5th PW-2801S.jpg";
import sp11 from "../assets/speakers/6th PCE-78T.jpg";
import sp12 from "../assets/speakers/6th PW-0302S.jpg";
import sp13 from "../assets/speakers/7th PCE-55T.jpg";
import sp14 from "../assets/speakers/7th PW-0402S.jpg";
import sp15 from "../assets/speakers/8th PCE-56T.jpg";
import sp16 from "../assets/speakers/8th PW-0502S.jpg";
import sp17 from "../assets/speakers/9th PCE-58T.jpg";
import sp18 from "../assets/speakers/9th PW-0602S.jpg";
import sp19 from "../assets/speakers/9th PW-0602s.png";
import sp20 from "../assets/speakers/10t back.png";
import sp21 from "../assets/speakers/10T front.png";
import sp22 from "../assets/speakers/10th PCE-45T.jpg";
import sp23 from "../assets/speakers/10th PW-1603.jpg";
import sp24 from "../assets/speakers/11th PCE-46T.jpg";
import sp25 from "../assets/speakers/12th PCE-48T.jpg";
import sp26 from "../assets/speakers/15T.jpg";
import sp27 from "../assets/speakers/501G-2.jpg";
import sp28 from "../assets/speakers/501G.jpg";
import sp29 from "../assets/speakers/506A.jpg";
import sp30 from "../assets/speakers/6308T.jpg";
import sp31 from "../assets/speakers/ceiling Speaker.png";
import sp32 from "../assets/speakers/PCO-04 EDIT.jpg";
import sp33 from "../assets/speakers/PCO-05 EDIT.jpg";
import sp34 from "../assets/speakers/PCO-06 EDIT.jpg";
import sp35 from "../assets/speakers/PCO-07 EDIT.jpg";
import sp36 from "../assets/speakers/pj-6308T.jpg";
import sp37 from "../assets/speakers/PW-0302.png";
import sp38 from "../assets/speakers/YS-401A.jpg";
import sp39 from "../assets/speakers/YS-606.jpg";

const productData = [
  { id: 1, img: sp1, name: "1st PCE-65T Speaker" },
  { id: 2, img: sp2, name: "1st PW-081 Speaker" },
  { id: 3, img: sp3, name: "2nd PCE-66T Speaker" },
  { id: 4, img: sp4, name: "2nd PW-2401S Speaker" },
  { id: 5, img: sp5, name: "3rd PCE-68T Speaker" },
  { id: 6, img: sp6, name: "3rd PW-2501S Speaker" },
  { id: 7, img: sp7, name: "4th PCE-75T Speaker" },
  { id: 8, img: sp8, name: "4th PW-2601S Speaker" },
  { id: 9, img: sp9, name: "5th PCE-76T Speaker" },
  { id: 10, img: sp10, name: "5th PW-2801S Speaker" },
  { id: 11, img: sp11, name: "6th PCE-78T Speaker" },
  { id: 12, img: sp12, name: "6th PW-0302S Speaker" },
  { id: 13, img: sp13, name: "7th PCE-55T Speaker" },
  { id: 14, img: sp14, name: "7th PW-0402S Speaker" },
  { id: 15, img: sp15, name: "8th PCE-56T Speaker" },
  { id: 16, img: sp16, name: "8th PW-0502S Speaker" },
  { id: 17, img: sp17, name: "9th PCE-58T Speaker" },
  { id: 18, img: sp18, name: "9th PW-0602S Speaker" },
  { id: 19, img: sp19, name: "9th PW-06025 Speaker" },
  { id: 20, img: sp20, name: "10t Back Speaker" },
  { id: 21, img: sp21, name: "10T Front Speaker" },
  { id: 22, img: sp22, name: "10th PCE-45T Speaker" },
  { id: 23, img: sp23, name: "10th PW-1603 Speaker" },
  { id: 24, img: sp24, name: "11th PCE-46T Speaker" },
  { id: 25, img: sp25, name: "12th PCE-48T Speaker" },
  { id: 26, img: sp26, name: "15T Speaker" },
  { id: 27, img: sp27, name: "501G-2 Speaker" },
  { id: 28, img: sp28, name: "501G Speaker" },
  { id: 29, img: sp29, name: "506A Speaker" },
  { id: 30, img: sp30, name: "6308T Speaker" },
  { id: 31, img: sp31, name: "Ceiling Speaker" },
  { id: 32, img: sp32, name: "PCO-04 EDIT Speaker" },
  { id: 33, img: sp33, name: "PCO-05 EDIT Speaker" },
  { id: 34, img: sp34, name: "PCO-06 EDIT Speaker" },
  { id: 35, img: sp35, name: "PCO-07 EDIT Speaker" },
  { id: 36, img: sp36, name: "PJ-6308T Speaker" },
  { id: 37, img: sp37, name: "PW-0302 Speaker" },
  { id: 38, img: sp38, name: "YS-401A Speaker" },
  { id: 39, img: sp39, name: "YS-606 Speaker" },
];

  
  function Speaker() {
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
        <h1>Speakers</h1>
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
  
  export default Speaker;