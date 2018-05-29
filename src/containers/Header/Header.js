import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 className="site-name"><span>Memphis</span> Live</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
