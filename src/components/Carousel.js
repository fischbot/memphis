import React from 'react';

/*
  Returns a Bootstrap carousel to display Featured Events
  Instructions can be found at https://getbootstrap.com/docs/4.1/components/carousel/
*/

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={require(`../assets/img/sample-event4.jpeg?auto=yes&bg=777&fg=555&text=Event 1`)} alt="Event 1" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={require(`../assets/img/sample-event5.jpeg?auto=yes&bg=666&fg=444&text=Event 2`)} alt="Event 2" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={require(`../assets/img/sample-event3.png?auto=yes&bg=555&fg=333&text=Event 3`)} alt="Event 3" />
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
  );
}

export default Carousel;
