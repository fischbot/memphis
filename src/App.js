import React, { Component } from 'react';
import './App.css';
import logo from './assets/img/logo.png';
import sampleEvent1 from './assets/img/sample-event1.png';

class App extends Component {
  render() {
    return (
      <div className="page">{/* container for all site contents*/}
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

        <main className="container">
            <section className="video row">
              <div className="col">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item"
                    src="https://www.youtube.com/embed/1nqTnMweTPE"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </section>

            <section className="events">
              <h2>Upcoming Events</h2>
              <div className="row">
                <div className="col-10 offset-1 col-sm-6 col-md-4">
                  <div className="event">
                    <h3 className="event-title">Event Title</h3>
                    <img className="event-img fluid-img" src={sampleEvent1} alt="Sample Event"/>
                    <p className="event-date">June 2</p>
                    <button type="submit" className="event-signup-btn btn">Sign Up</button>
                  </div>
                </div>
                <div className="col-10 offset-1 col-sm-6 col-md-4">
                  <div className="event">
                    <h3 className="event-title">Event Title</h3>
                    <img className="event-img fluid-img" src={sampleEvent1} alt="Sample Event"/>
                    <p className="event-date">June 2</p>
                    <button type="submit" className="event-signup-btn btn">Sign Up</button>
                  </div>
                </div>
                <div className="col-10 offset-1 col-sm-6 col-md-4">
                  <div className="event">
                    <h3 className="event-title">Event Title</h3>
                    <img className="event-img fluid-img" src={sampleEvent1} alt="Sample Event"/>
                    <p className="event-date">June 2</p>
                    <button type="submit" className="event-signup-btn btn">Sign Up</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="newsletter-signup row">
                <div className="newsletter-contents col-12 col-sm-8 offset-sm-2">
                  <p>Sign up to be notified of upcoming events</p>
                  <form>
                    <input className="form-control" type="text" placeholder="email address" />
                    <button type="submit" className="btn">JOIN</button>
                  </form>
                </div>
            </section>
        </main>
        <footer>
          <div className="footer-content row">
            <div className="col">
              <ul>
                <li><a href="">Amet Pellentesque</a></li>
                <li><a href="">Commodo</a></li>
                <li><a href="">Cursus Ultricies</a></li>
                <li><a href="">Bibendum Pellentesque Fermentum</a></li>
              </ul>
            </div>
            <div className="col">
              <img src={logo} alt="Thriving Cities Logo"/>
              <p className="copyright">Copyright &copy; 2018 Thriving Cities</p>
            </div>
            <div className="col">
              <ul>
                <li><a href="">Fusce</a></li>
                <li><a href="">Vehicula</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
