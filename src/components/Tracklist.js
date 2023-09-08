import React, { useState, useCallback } from 'react';
import './Tracklist.css';
import Track from './Track';

function Tracklist (searchResults){
    return (
        <div class="Tracklist">
            {searchResults.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;