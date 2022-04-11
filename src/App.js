import React from 'react';
import musicData from './data';
import Songs from './Songs';

function App() {
  const month = musicData[0].date;

  const songs = musicData[0].songs.map((song) => (
    <Songs author={song.author} title={song.title} />
  ));

  return (
    <div className="App">
      <h1 className="title">lusco-fusco</h1>
      <p className="sub-title">
        an eclectic monthly music playlist, curated by Wojciech Gmuzdek
      </p>
      <p className="link">
        Listen{' '}
        <a
          href="https://open.spotify.com/playlist/7Lz7wRpOszolsTFfFe6VmB?si=4354ebb61f40420b"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <h2 className="date">{month}</h2>
      <p className="songs-container">{songs}</p>
    </div>
  );
}

export default App;
