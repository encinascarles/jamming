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
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  function handleSearch (search){
    Spotify.search(search).then((results) => setSearchResults(results));
  }

  return (
    <div class="body">
      <header>
        <h1>Ja<span>mm</span>ing</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch}/>
        <div class="TrackSection">
          <SearchResults searchResults={searchResults}/>
          <Playlist />
        </div>
      </main>
      <footer>
        <h3>©Carles Encinas    2023</h3>
      </footer>
    </div>
  );
}

export default App;
