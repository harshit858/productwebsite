import React from 'react';
import './ContactUs.css';
import im1 from "../assets/phone.png";
import im2 from "../assets/email.png";
import im3 from "../assets/instagram.png";

function ContactUs() {
  return (
    <div id="contactUs" className="container">
      <h1>Contact Us</h1>
      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-item">
          <img src={im1} alt="Phone" className="contact-icon" />
          <span>+1 234 567 890</span>
        </div>
        <div className="contact-item">
          <img src={im2} alt="Email" className="contact-icon" />
          <span>contact@example.com</span>
        </div>
        <div className="contact-item">
          <img src={im3} alt="Instagram" className="contact-icon" />
          <span>@exampleInstagram</span>
        </div>
      </div>
      
    </div>
  );
}

export default ContactUs;
