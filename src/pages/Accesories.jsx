import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Accesories.css';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';




import extra1 from "../assets/extras/KB89A.jpg";
import extra2 from "../assets/extras/KB89A.png";
import extra3 from "../assets/extras/KC13.jpg";
import extra4 from "../assets/extras/KC13.png";
import extra5 from "../assets/extras/KC31.jpg";
import extra6 from "../assets/extras/KC31.png";
import extra7 from "../assets/extras/KD13.jpg";
import extra8 from "../assets/extras/KD13.png";
import extra9 from "../assets/extras/KD13.png f.png";
import extra10 from "../assets/extras/KD31.jpg";
import extra11 from "../assets/extras/KD31.png";
import extra12 from "../assets/extras/KD35.jpg";
import extra13 from "../assets/extras/KD35.png";
import extra14 from "../assets/extras/KR04.jpg";
import extra15 from "../assets/extras/KR04.png";
import extra16 from "../assets/extras/KR07.jpg";
import extra17 from "../assets/extras/KR10.jpg";
import extra18 from "../assets/extras/KR10.png";
import extra19 from "../assets/extras/KW10.jpg";
import extra20 from "../assets/extras/KW10.png";
import extra21 from "../assets/extras/PENZA YC-210 CABLE.jpg";
import extra22 from "../assets/extras/TB17.jpg";
import extra23 from "../assets/extras/TB19.jpg";
import extra24 from "../assets/extras/TB22.jpg";
import extra25 from "../assets/extras/TB35A.jpg";
import extra26 from "../assets/extras/TB96 bk.jpg";
import extra27 from "../assets/extras/TB98.jpg";
import extra28 from "../assets/extras/TC01(1).jpg";
import extra29 from "../assets/extras/TK29B.jpg";
import extra30 from "../assets/extras/TK36.jpg";
import extra31 from "../assets/extras/TK47.jpg";
import extra32 from "../assets/extras/TT33.jpg";
import extra33 from "../assets/extras/TV202.jpg";
import extra34 from "../assets/extras/TV204.jpg";
import extra35 from "../assets/extras/TV205.jpg";
import extra36 from "../assets/extras/X73.jpg";

const productData = [
  { id2: 1, img: extra1, name: "KB89A Extra" },
  { id2: 2, img: extra2, name: "KB89A Extra" },
  { id2: 3, img: extra3, name: "KC13 Extra" },
  { id2: 4, img: extra4, name: "KC13 Extra" },
  { id2: 5, img: extra5, name: "KC31 Extra" },
  { id2: 6, img: extra6, name: "KC31 Extra" },
  { id2: 7, img: extra7, name: "KD13 Extra" },
  { id2: 8, img: extra8, name: "KD13 Extra" },
  { id2: 9, img: extra9, name: "KD13 Extra" },
  { id2: 10, img: extra10, name: "KD31 Extra" },
  { id2: 11, img: extra11, name: "KD31 Extra" },
  { id2: 12, img: extra12, name: "KD35 Extra" },
  { id2: 13, img: extra13, name: "KD35 Extra" },
  { id2: 14, img: extra14, name: "KR04 Extra" },
  { id2: 15, img: extra15, name: "KR04 Extra" },
  { id2: 16, img: extra16, name: "KR07 Extra" },
  { id2: 17, img: extra17, name: "KR10 Extra" },
  { id2: 18, img: extra18, name: "KR10 Extra" },
  { id2: 19, img: extra19, name: "KW10 Extra" },
  { id2: 20, img: extra20, name: "KW10 Extra" },
  { id2: 21, img: extra21, name: "PENZA YC-210 Cable" },
  { id2: 22, img: extra22, name: "TB17 Extra" },
  { id2: 23, img: extra23, name: "TB19 Extra" },
  { id2: 24, img: extra24, name: "TB22 Extra" },
  { id2: 25, img: extra25, name: "TB35A Extra" },
  { id2: 26, img: extra26, name: "TB96 bk Extra" },
  { id2: 27, img: extra27, name: "TB98 (1) Extra" },
  { id2: 28, img: extra28, name: "TC01(1) Extra" },
  { id2: 29, img: extra29, name: "TK29B Extra" },
  { id2: 30, img: extra30, name: "TK36 Extra" },
  { id2: 31, img: extra31, name: "TK47 Extra" },
  { id2: 32, img: extra32, name: "TT33 (1) Extra" },
  { id2: 33, img: extra33, name: "TV202 Extra" },
  { id2: 34, img: extra34, name: "TV204 Extra" },
  { id2: 35, img: extra35, name: "TV205 Extra" },
  { id2: 36, img: extra36, name: "X73 Extra" },
];

  function Accessories() {
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
        <h1>Accesories</h1>
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
  
  export default Accessories;