import React from 'react';

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
