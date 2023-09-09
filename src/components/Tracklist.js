import React, { useState, useCallback } from 'react';
import './Tracklist.css';
import Track from './Track';

function Tracklist (props){
    return (
        <div class="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        sign={props.sign}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;