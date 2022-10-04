import React from 'react';
import useLocalStorage from 'use-local-storage';

import Hero from './components/Hero';
import Main from './components/Main';
import cover from './assets/cover.webp';
import coverData from './assets/coverData';
import songsData from './assets/songsData';

function App() {
  const month = songsData.date;
  const spotifyLink = songsData.link;
  const coverAuthor = coverData.author;
  const coverTitle = coverData.title;
  const coverLink = coverData.link;
  const altText = `${coverAuthor}'s artwork titled ${coverTitle}`;

  // Theme - detect
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Theme - set
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'dark',
  );
  // Theme - switch
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
          coverLink={coverLink}
          coverTitle={coverTitle}
        />
      </div>
    </div>
  );
}

export default App;
