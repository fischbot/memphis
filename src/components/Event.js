import React from 'react';

const Event = ({ name, img, date, time, location, about }) => {
  return (
    <div className="event col-12 col-md-5">
      <h3 className="event-name">{name}</h3>
      <img className="event-img fluid-img" src={require(`../assets/img/${img}`)} alt="Sample Event"/>
      <div className="event-info">
        <div className="event-time-loc row">
          <div className="col-6">
            <p className="event-time">{time}</p>
          </div>
          <div className="col-6">
            <p className="event-location">{location}</p>
          </div>
        </div>

        <p className="event-about">{about}</p>
        <hr />
        <h4 className="event-date">{date}</h4>
      </div>
      <button type="submit" className="event-signup-btn btn">Sign Up</button>
    </div>
  );
};

export default Event;
