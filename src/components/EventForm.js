import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class EventForm extends Component {
  render() {
    return (
        <Mailchimp
        action='https://coolwebsite.us18.list-manage.com/subscribe/post?u=a725bf8b85623951c4a8d98d3&amp;id=5bf8e6f8e6'
        fields={[
          {
            name: 'NAME',
            placeholder: 'NAME',
            type: 'text',
            required: true
          },
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
          {
            name: 'EVENT',
            placeholder: 'Event You Want To Attend',
            type: 'text',
            required: true
          }
        ]}
        // Change predetermined language
        message={
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        // Add a personalized class
        className='event-signup-form'
        />
    );
  }
}

export default EventForm;
