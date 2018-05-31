import React from 'react';
import Event from './Event';

/* Returns Event data to the Event component for display */

const EventList = ({ events }) => {
  return (
    <div className="row">
      {
        events.map((event) => {
          return (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
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
