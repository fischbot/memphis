import React from 'react';
import EventList from '../../components/EventList';
import SearchBox from '../../components/SearchBox';

const Main = ({ filteredEvents }) => {
  return(
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
          <div className="row">
            <div className="col">
              <SearchBox searchChange={this.onSearchChange}/>
            </div>
          </div>
          <h2>Upcoming Events</h2>
          <div className="row">
            <EventList events={filteredEvents} />
          </div>
        </section>

        <section className="newsletter-signup">
          <div className="row">
            <div className="newsletter-contents col-12 col-sm-8 offset-sm-2">
              <p>Get notified of upcoming events</p>
              <form>
                <input className="form-control" type="text" placeholder="email address" />
                <button type="submit" className="btn">JOIN</button>
              </form>
            </div>
          </div>
        </section>
    </main>
  );
}

export default Main;
