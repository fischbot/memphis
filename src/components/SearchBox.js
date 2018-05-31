import React from 'react';
import './SearchBox.css';

/*
  The user can search for an event in the search box and the display
  will automatically update to show what the user has searched for, if it exists
*/

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="search">
      <input
        className="form-control"
        type="search"
        placeholder="search upcoming events"
        onChange={(searchField) => onSearchChange(searchField)}
      />
    </div>
  );
};

export default SearchBox;
