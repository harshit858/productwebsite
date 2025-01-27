import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Events from './pages/Events';
import Career from './pages/Career';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceSystem from './pages/ConferenceSystem';
import Amplifier from './pages/Amplifier';
import Microphone from './pages/Microphone';
import Speaker from './pages/Speaker';
import Portable from './pages/Portable';
import DJ from './pages/DJ';
import Accessories from './pages/Accesories';
import FloatingIcon from './components/FloatingIcon';

function App() {
  return (
    
    
    //  <div>
    //   <Header />
    //   <Home />
    //   <AboutUs />
    //   <ContactUs />
    //   <Products />
    //   <Events />
    //   <Career />
    // </div> 

     

    //  {<Router>
    //   /* <Header />
    // <Routes>
    //   <Route path="/" element={<Home />} /> 
    //   <Route path="/about-us" element={<AboutUs />} />
    //   <Route path="/contact-us" element={<ContactUs />} />
    //   <Route path="/products" element={<Products />} />
    //   <Route path="/events" element={<Events />} />
    //   <Route path="/career" element={<Career />} />
    //   <Route path="/product/:id" element={<ProductDetails />} />
    // </Routes>

    // </Router> */}

    <Router>
      <div>
        <Header />
        {/* Define routes for the main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/career" element={<Career />} />
          
          {/* Route for the individual product details page */}
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          <Route path="/product/1" element={<ConferenceSystem />} />
          <Route path="/product/2" element={<Amplifier />} />
          <Route path="/product/3" element={<Microphone />} />
          <Route path="/product/4" element={<Speaker />} />
          <Route path="/product/5" element={<Portable />} />
          <Route path="/product/6" element={<DJ />} />
          <Route path="/product/7" element={<Accessories />} />
        </Routes>
        <FloatingIcon/>
      </div>
    </Router>
  );
}

export default App;
