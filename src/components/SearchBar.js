import React, { useState, useCallback } from 'react';
import './SearchBar.css';

function SearchBar (){
    return (
        <div class="search-bar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="search-button">SEARCH</button>
        </div>
    );
}

export default SearchBar;