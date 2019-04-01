import React from 'react';

const EventForm = () => (
      <form className="event-signup-form" onSubmit={(e)=> e.preventDefault()}>
        <input type="text" placeholder="name" />
        <button>Sign up</button>
      </form>
);
export default EventForm;
