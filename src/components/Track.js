import React, { useState, useCallback } from 'react';
import './Track.css';

function Track (props){
    function handleAdd(e) {
        props.onAdd(props.track);
    }
    function handleRemove(e) {
        props.onRemove(props.track);
    }
    return (
        <div class="Track">
            <div class="Track-information">
                <h3>{props.track.name}</h3>
                <h4>{props.track.artist + " | " +props.track.album}</h4>
            </div>
            {props.sign === "plus" ? <button class="Track-action" onClick={handleAdd}>+</button> : <button class="Track-action" onClick={handleRemove}>-</button>}
        </div>
    );
}

export default Track;