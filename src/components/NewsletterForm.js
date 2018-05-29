import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class NewsletterForm extends Component {
  render() {
    return (
        <Mailchimp
        action='https://coolwebsite.us18.list-manage.com/subscribe/post?u=a725bf8b85623951c4a8d98d3&amp;id=9e0d915541'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
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
        className='newsletter-form'
        />
    );
  }
}

export default NewsletterForm;
