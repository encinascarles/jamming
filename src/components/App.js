import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Track from './Track';
import Tracklist from './Tracklist';
import Spotify from '../Spotify';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setplaylistTracks] = useState([]);
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  function handleSearch (search){
    Spotify.search(search).then((results) => setSearchResults(results));
  }

  function addTrack(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setplaylistTracks([...playlistTracks, track]);
  }

  function deleteTrack(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setplaylistTracks(playlistTracks.filter((savedTrack) => savedTrack.id !== track.id));  
    }
    else {
      return;
    }
    
  }

  return (
    <div class="body">
      <header>
        <h1>Ja<span>mm</span>ing</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch}/>
        <div class="TrackSection">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistTracks={playlistTracks} onRemove={deleteTrack}/>
        </div>
      </main>
      <footer>
        <h3>©Carles Encinas    2023</h3>
      </footer>
    </div>
  );
}

export default App;
