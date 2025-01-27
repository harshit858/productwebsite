import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div id="aboutUs" className="container">
      <div className="content">
        <h1 className="title">About Us</h1>
        <p className="description">
          PENZA Audio is a Germany-based designer and manufacturer of professional sound systems established in 1998. Our mission is based on producing high-quality products for the places where sound truly matters. Today, Penza Audio specializes in designing and supplying audio and lighting systems to such facilities as:
        </p>
        <ul className="services-list">
          <li>DJ Events</li>
          <li>Hospitality and Entertainment</li>
          <li>Educational Establishments</li>
          <li>Shopping Centers and Stores</li>
          <li>Installation and Backing Services</li>
          <li>Places of Worship</li>
          <li>Government and Military Agencies</li>
        </ul>
        <p className="description">
          We believe that developing superior quality control, professional products, a considerate sales team, and comprehensive after-sales services are the foundations for customer satisfaction and company growth. Our products are sold through a network of qualified 180+ distributors in more than 300 cities.
        </p>
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>Providing the best and highest quality products and ensuring complete customer satisfaction.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>Our vision is to give the greatest sound quality to our clients, with an objective to offer the best service and products as an association of significance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
