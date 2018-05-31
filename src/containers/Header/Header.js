import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <header>
      <div className="row align-items-center">
        <div className="col-12 col-sm-7 ">
          <h1 className="site-name"><span>Memphis</span> Live</h1>
        </div>
        <div className="col-12 col-sm-5">
          <nav>
            <ul>
              <li><a href="#event-list">View Upcoming Events</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
