import React, { Component } from 'react';
import './App.css';
import logo from './assets/img/logo.png';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <h1 className="site-name">Memphis Live</h1>
          <div className="search">
            <input type="text" placeholder="search events" />
            <button>Search</button>
          </div>
        </header>
        <main>
          <section className="video">
            <iframe width={854/2} height={480/2} src="https://www.youtube.com/embed/1nqTnMweTPE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </section>

          <section className="events">

          </section>

          <section className="newsletter-signup">
              <div className="newsletter-form">
                <p>Sign up to be notified of upcoming events</p>
                <input type="text" placeholder="email address" />
                <button>JOIN</button>
              </div>
          </section>
        </main>
        <footer>
          <div className="footer-content">
            <img src={logo} alt="Thriving Cities Logo"/>
            <p>Copyright &copy; 2018 Thriving Cities</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
