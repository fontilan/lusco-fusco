import React from 'react';
import useLocalStorage from 'use-local-storage';

import Hero from './components/Hero';
import Main from './components/Main';
import cover from './assets/cover.webp';
import coverData from './assets/coverData';
import musicData from './assets/songsDB';

function App() {
  const month = musicData.date;
  const spotifyLink = musicData.link;

  const coverAuthor = coverData.author;
  const coverTitle = coverData.title;
  const altText = `${coverAuthor}'s artwork titled ${coverTitle}`;

  // check if the user prefers dark theme
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // use dark theme if the user prefers it, otherwise use dark theme anyway.
  // (theme variable is null initially, so instead we use the second, default value. After it's set and saved with the switchTheme function it will be used after refresh / next visit)
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'dark',
  );

  // switch the theme variable from light to dark and vice versa & save it in Local Storage
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="wrapper" data-theme={theme}>
      <div className="app">
        <Hero
          month={month}
          spotifyLink={spotifyLink}
          switchTheme={switchTheme}
          theme={theme}
        />
        <Main
          altText={altText}
          cover={cover}
          coverAuthor={coverAuthor}
          coverTitle={coverTitle}
        />
      </div>
    </div>
  );
}

export default App;
