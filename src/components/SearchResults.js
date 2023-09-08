import React, { useState, useCallback, useEffect } from 'react';
import './SearchResults.css';
import Tracklist from './Tracklist';

function SearchResults (props){
    console.log(props.searchResults);
    return (
        <div class="SearchResults">
            <div class="Title">
                <h1>Results</h1>
            </div>    
            <Tracklist tracks={props.searchResults}/>   
        </div>
    );
}



export default SearchResults;