import React from 'react';
import musicData from './data';
import Songs from './Songs';

function App() {
  const month = musicData[0].date;

  const songs = musicData[0].songs.map((song) => (
    <Songs author={song.author} title={song.title} />
  ));

  console.log(songs);
  return (
    <div className="App">
      <h1 className="title">lusco-fusco</h1>
      <p className="sub-title">
        an eclectic monthly music playlist, curated by Wojciech Gmuzdek
        (fontilan)
      </p>
      <h2 className="date">{month}</h2>
      <p className="songs-container">{songs}</p>
    </div>
  );
}

export default App;
