import React from 'react';
import EventForm from './EventForm';

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
      <button type="submit"
              className="event-signup-btn btn {id}"
              data-toggle="modal"
              data-target="#exampleModal"
              >
        Sign Up
      </button>

      {/* ======= EVENT SIGN UP MODAL ======= */}
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sign up for {name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <EventForm />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
