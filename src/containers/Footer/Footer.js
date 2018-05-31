import React from 'react';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content row">
        <div className="col">
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Cursus Ultricies</a></li>
            <li><a href="">Bibendum Pellentesque Fermentum</a></li>
          </ul>
        </div>
        <div className="col">
          <img src={logo} alt="Thriving Cities Logo"/>
          <p className="copyright">&copy; 2018 Thriving Cities</p>
        </div>
        <div className="col">
          <ul>
            <li><a href="">Fusce</a></li>
            <li><a href="">Vehicula</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
