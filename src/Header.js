import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 className="site-name"><span>Memphis</span> Live</h1>
          </div>
          <div className="search col-6 offset-3 col-md-3 offset-md-3">
            <form>
              <input class="form-control" type="search" placeholder="search events" />
            </form>
          </div>
        </div>{/* end row */}
      </header>
    );
  }
}

export default Header;
