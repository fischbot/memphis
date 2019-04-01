import React from 'react';
import EventForm from './EventForm';

/*
  Display events in the event section of Main.
  It pulls data from EventList for display
  If the user clicks the "Sign Up" button it triggers a Bootstrap modal
  which shows a event sign up form.
*/

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
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EventForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
