import React, { useState, useCallback } from 'react';
import './Playlist.css';
import Tracklist from './Tracklist';

function Playlist (props){
    return (
        <div class="playlist">
            <div class="Title">
                <h1>Playlist</h1>
                <input type="text" placeholder='New Playlist'/>
            </div>    
            <Tracklist tracks={props.playlistTracks} sign="minus" onRemove={props.onRemove}/>  
        </div>
    );
}

export default Playlist;