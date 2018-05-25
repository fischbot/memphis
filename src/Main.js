import React, { Component } from 'react';

class Main extends Component {
  render() {
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
            <h2>Upcoming Events</h2>
            <div className="row">
              {/* <EventList events={events} /> */}
            </div>
          </section>

          <section className="newsletter-signup row">
              <div className="newsletter-contents col-12 col-sm-8 offset-sm-2">
                <p>Get notified of upcoming events</p>
                <form>
                  <input className="form-control" type="text" placeholder="email address" />
                  <button type="submit" className="btn">JOIN</button>
                </form>
              </div>
          </section>
      </main>
    );
  }
}

export default Main;
