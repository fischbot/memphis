import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <div className="row">
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
