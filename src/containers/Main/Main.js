import React from 'react';
import EventList from '../../components/EventList';
import SearchBox from '../../components/SearchBox';
import NewsletterForm from '../../components/NewsletterForm';
import Carousel from '../../components/Carousel';

const Main = ({ filteredEvents }) => {
  return(
    <main className="container">

        {/* ================ VIDEO PLAYER  ===============================*/}
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

        {/* ================ FEATURED EVENTS ===============================*/}
        <section className="featured-events">
          <h2 className="section-heading">Featured Events</h2>
          <div className="row">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </section>

        {/* ================ EVENTS LIST ==================================*/}
        <section className="events" id="event-list">
          <h2 className="section-heading">Upcoming Events</h2>
          <div className="row">
            <div className="col">
              <SearchBox searchChange={this.onSearchChange}/>
            </div>
          </div>
          <EventList events={filteredEvents} />
        </section>

        {/* ================ NEWSLETTER SIGN UP ============================*/}
        <section className="newsletter-signup">
          <div className="row">
            <div className="newsletter-contents col-12 col-sm-8 offset-sm-2">
              <p>Get notified of upcoming events</p>
              <NewsletterForm />
            </div>
          </div>
        </section>
    </main>
  );
}

export default Main;
