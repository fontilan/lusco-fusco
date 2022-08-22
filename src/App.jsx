import React from 'react';
import useLocalStorage from 'use-local-storage';
import { nanoid } from 'nanoid';

import Button from './Button';
import Songs from './Songs';
import cover from './assets/cover.webp';
import musicData from './assets/songsDB';

const altText = "Peter Ilsted's artwork titled En druser";

function App() {
  const month = musicData[0].date;
  const spotifyLink = musicData[0].link;

  const songs = musicData[0].songs.map((song) => (
    <Songs author={song.author} title={song.title} key={nanoid()} />
  ));

  // check if the user prefers dark theme
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // use dark theme if the user prefers it, otherwise use light theme
  // (theme variable is null initially, so instead we use the second, default value. After it's set and saved with the switchTheme function it will be used after refresh / next visit)
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  );

  // switch the theme variable from light to dark and vice versa & save it in Local Storage
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="wrapper" data-theme={theme}>
      <div className="app">
        <div>
          <Button switchTheme={switchTheme} theme={theme} />
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
    </div>
  );
}

export default App;
