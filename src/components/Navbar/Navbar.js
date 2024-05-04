import React from 'react';
import './Navbar.css';
import logo from '../../assets/nylogo.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
      <div className="logo"><img src={logo} alt="" className='logo'/></div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/why">Why Careership</Link></li>
          {/* <li>
            <a href="#" className="desktop-item">Dropdown Menu</a>
            <input type="checkbox" id="showDrop"/>
            <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
            <ul className="drop-menu">
              <li><a href="#">Drop menu 1</a></li>
              <li><a href="#">Drop menu 2</a></li>
              <li><a href="#">Drop menu 3</a></li>
              <li><a href="#">Drop menu 4</a></li>
            </ul>
          </li> */}
          <li>
            <a href="#" className="desktop-item">Practice Project</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item" styl={{color:"red"}}>Practice Project</label>
            <div className="mega-box">
              <div className="content">
                
                <div className="row">
                  <header><i class="fa-solid fa-laptop-code"></i>AI & DS</header>
                  <ul className="mega-links">
                    <li><Link to="/da">Data Analytics</Link></li>
                    <li><Link to="/ds">Data Science</Link></li>
                    <li><Link to="/de">Data Engineering</Link></li>
                    <li><Link to="/aiml">ML & AI</Link></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Software Engineering</header>
                  <ul className="mega-links">
                    <li><Link to="/software">Software Engineering</Link></li>
                    
                  </ul>
                  <header>Cyber Security</header>
                  <ul className="mega-links">
                    <li><Link to="/cyber">Cyber Security</Link></li>
                    
                  </ul>
                </div>
                <div className="row">
                  <header>Think & Design</header>
                  <ul className="mega-links">
                    <li><Link to="/think">UI/UX Design</Link></li>
                    <li><Link to="/think">UX Design</Link></li>
                    <li><Link to="/think">Introduction to Design</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li><Link to="/login"><button className='loginbtn'>Login</button></Link></li> */}
          <li><Link to="/webinar">Webinar</Link></li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
  );
};

export default Navbar

