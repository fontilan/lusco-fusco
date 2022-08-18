import React from 'react';
import { nanoid } from 'nanoid';
import musicData from './assets/songsDB';
import Songs from './Songs';
import cover from './assets/cover.webp';

const altText = "Peter Ilsted's artwork titled En druser";

function App() {
  const month = musicData[0].date;
  const spotifyLink = musicData[0].link;

  const songs = musicData[0].songs.map((song) => (
    <Songs author={song.author} title={song.title} key={nanoid()} />
  ));

  return (
    <div className="App">
      <div>
        <h1 className="title">lusco-fusco</h1>
        <p className="sub-title">
          an eclectic monthly music playlist, curated by Wojciech Gmuzdek
        </p>
      </div>
      <a className="link" href={spotifyLink} target="_blank" rel="noreferrer">
        Listen on Spotify
      </a>
      <h2 className="date">{month}</h2>
      <div className="main">
        <div className="main__cover">
          <img src={cover} alt={altText} />
          <p className="cover-info">
            Peter Ilsted, <span className="cover-info__title">En druser</span>
          </p>
        </div>
        <div className="main__songs">{songs}</div>
      </div>
    </div>
  );
}

export default App;
