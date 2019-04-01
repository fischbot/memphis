import React from 'react';
import logo from '../../../assets/img/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content row">
        <div className="col">
          <ul>
            <li><button>About Us</button></li>
            <li><button>Contact</button></li>
            <li><button>Cursus Ultricies</button></li>
            <li><button>Bibendum Pellentesque Fermentum</button></li>
          </ul>
        </div>
        <div className="col">
          <img src={logo} alt="Thriving Cities Logo"/>
          <p className="copyright">&copy; 2018 Thriving Cities</p>
        </div>
        <div className="col">
          <ul>
            <li><button>Fusce</button></li>
            <li><button>Vehicula</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
