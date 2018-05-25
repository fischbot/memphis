import React, { Component } from 'react';
import './App.css';
import sampleEvent1 from './assets/img/sample-event1.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="page">{/* container for all site contents*/}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
