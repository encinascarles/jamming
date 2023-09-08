import React, { useState, useCallback } from 'react';
import './SearchBar.css';

function SearchBar (){
    return (
        <div class="search-bar">
            <form>
              <input placeholder="Enter A Song, Album, or Artist" />
              <button class="search-button">SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;