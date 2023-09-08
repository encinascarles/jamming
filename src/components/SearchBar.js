import React, { useState, useCallback } from 'react';
import './SearchBar.css';
import Spotify from '../Spotify';

function SearchBar (props){
  const [searchValue, setSearchValue] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchValue);
    setSearchValue("");
  }
  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  return (
      <div class="search-bar">
          <form onSubmit={handleSubmit}>
            <input value={searchValue} onChange={handleChange} placeholder="Enter A Song, Album, or Artist" />
            <button class="search-button" type="submit">SEARCH</button>
          </form>
      </div>
  );
}

export default SearchBar;