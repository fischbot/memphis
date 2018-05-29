import React from 'react';

const Event = ({ title, img, date}) => {
  return (
    <div className="event col-12 col-md-5">
      <h3 className="event-title">{title}</h3>
      <img className="event-img fluid-img" src={require(`../assets/img/${img}`)} alt="Sample Event"/>
      <p className="event-date">{date}</p>
      <button type="submit" className="event-signup-btn btn">Sign Up</button>
    </div>
  );
};

export default Event;
