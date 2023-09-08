import React, { useState, useCallback } from 'react';
import './App.css';

import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Track from './Track';
import Tracklist from './Tracklist';



function App() {
  return (
    <div class="body">
      <header>
        <h1>Ja<span>mm</span>ing</h1>
      </header>
      <main>
        <SearchBar />
      </main>
      <footer>
        <h3>©Carles Encinas    2023</h3>
      </footer>
    </div>
  );
}

export default App;
