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

        <section className="featured-events">
          <h2 className="section-heading">Featured Events</h2>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="http://via.placeholder.com/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://via.placeholder.com/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://via.placeholder.com/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="events">
          <div className="row">
            <div className="col">
              <SearchBox searchChange={this.onSearchChange}/>
            </div>
          </div>
          <h2 className="section-heading">Upcoming Events</h2>
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
