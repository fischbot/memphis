import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { events } from './events';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events : events,
      searchField : ""
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value });
  }
  render() {
    {/* array of events from user search by event title */}
    const filteredEvents = this.state.events.filter(event => {
      return event.title.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="page">{/* container for all site contents*/}
        <Header /> {/* site name/logo */}
        <Main filteredEvents={filteredEvents} /> {/* all main site content: video embed, event search, event list, newsletter sign up */}
        <Footer /> {/* links (ex. about, contact, external, etc), company logo, copyright */}
      </div>
    );
  }
}

export default App;
