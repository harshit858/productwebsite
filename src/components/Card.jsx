import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

function Card({ img, name, link, isMiddle }) {
  return (
    <div className={`product-item ${isMiddle ? "middle-card" : ""}`}>
      <Link to={link}>
        <img src={img} alt={name} className="product-image" />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Card;
