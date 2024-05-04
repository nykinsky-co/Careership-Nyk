import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Info</h3>
          <p> CareerShip Practice Projects is world's first Practice based organization to perform, Plan, Practice and Produce product for Clients and Business need. Our Concept & Mantra for Career : Think | Design | Plan | Practice | Product | Product.</p>
        </div>
       
        <div className="footer-column products">
          <h3>Our Products </h3>
          <Link to="/leadahead" >
                LeadAhead
              </Link> 
              <br></br>
              <br></br>

              <Link to="/bluelead">
                BlueLead
              </Link>
              <br></br>
              <br></br>

              <Link to="/earlylead" className="">
                EarlyLead
              </Link>
              <br></br>
        </div>
       

         
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>For any query call us or send a mail at email and phone number mentioned below.</p>
          <p>Email: careership@nykinsky.com</p>
          <p>Phone: +91 9717698567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 | Powered by NyKinSky Analytics | CareerShip Theme by NyKinSky & Company</p>
      </div>
    </footer>
  );
};

export default Footer;
