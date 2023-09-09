import React, { useState, useCallback } from 'react';
import './Playlist.css';
import Tracklist from './Tracklist';

function Playlist (props){
    const [playlistName, setPlaylistName] = useState('New Playlist');

    function handleClick(e) {
        props.onSave(playlistName);
    }

    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    return (
        <div class="playlist">
            <div class="Title">
                <h1>Playlist</h1>
                <input type="text" placeholder='New Playlist' onChange={handleChange}/>
                <button class="Playlist-save" onClick={handleClick}>SAVE TO SPOTIFY</button>
            </div>    
            <Tracklist tracks={props.playlistTracks} sign="minus" onRemove={props.onRemove}/>  
        </div>
    );
}

export default Playlist;