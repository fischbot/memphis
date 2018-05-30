import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import JSON from '../assets/events.json'; // event info

class App extends Component {
  state = {
    events : JSON,
    searchField : ""
  };

  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value });
  }
  render() {
    {/* array of events from user search by event title */}
    const filteredEvents = this.state.events.filter(event => {
      return event.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="page">{/* container for all site contents*/}
        <Header /> {/* site name/logo */}
        <Main filteredEvents={filteredEvents} onSearchChange={this.onSearchChange} /> {/* all main site content: video embed, event search, event list, newsletter sign up */}
        <Footer /> {/* links (ex. about, contact, external, etc), company logo, copyright */}
      </div>
    );
  }
}

export default App;
