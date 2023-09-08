import React, { useState, useCallback, useEffect } from 'react';
import './SearchResults.css';
import Tracklist from './Tracklist';

function SearchResults (props){
    return (
        <div class="SearchResults">
            <div class="Title">
                <h1>Results</h1>
            </div>    
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} sign="plus" />   
        </div>
    );
}



export default SearchResults;