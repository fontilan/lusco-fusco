import React from 'react';
import { nanoid } from 'nanoid';
import musicData from './june';
import Songs from './Songs';

function App() {
  const month = musicData[0].date;
  const spotifyLink = musicData[0].link;

  const songs = musicData[0].songs.map((song) => (
    <Songs author={song.author} title={song.title} key={nanoid()} />
  ));

  return (
    <div className="App">
      <h1 className="title">lusco-fusco</h1>
      <p className="sub-title">
        an eclectic monthly music playlist, curated by Wojciech Gmuzdek
      </p>
      <p className="link">
        <a href={spotifyLink} target="_blank" rel="noreferrer">
          Listen on Spotify
        </a>
      </p>
      <h2 className="date">{month}</h2>
      <div className="songs-container">{songs}</div>
    </div>
  );
}

export default App;
