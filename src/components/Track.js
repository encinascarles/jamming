import React, { useState, useCallback } from 'react';
import './Track.css';

function Track (props){
    return (
        <div class="Track">
            <h3>{props.track.name}</h3>
            <h4>{props.track.artist + " | " +props.track.album}</h4>
        </div>
    );
}

export default Track;