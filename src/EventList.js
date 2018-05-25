import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <div className="col-10 offset-1 col-sm-6 col-md-4">
      {
        events.map((event) => {
          return (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              img={event.img}
              time={event.time}
              location={event.location}
              about={event.about}
            />
          );
        })
      }
    </div>
  );
}

export default EventList;
