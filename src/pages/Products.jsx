import React from 'react';
import './Products.css';

function Products() {
  return (
    <div id="products" className="container">
      <h1>Our Products</h1>
      <div className="product-list">
        <div className="product-item">Product 1</div>
        <div className="product-item">Product 2</div>
        <div className="product-item">Product 3</div>
        <div className="product-item">Product 4</div>
        <div className="product-item">Product 5</div>
        <div className="product-item">Product 6</div>
        <div className="product-item">Product 7</div>
      </div>
    </div>
  );
}

export default Products;
