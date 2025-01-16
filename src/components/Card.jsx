import React from 'react';
import './Card.css';

function Card({ img, name, link, isMiddle }) {
  return (
    <div className={`product-item ${isMiddle ? "middle-card" : ""}`}>
      <a href={link}>
        <img src={img} alt={name} className="product-image" />
        <p>{name}</p>
      </a>
    </div>
  );
}

export default Card;
