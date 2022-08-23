/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function Hero({ month, spotifyLink, switchTheme, theme }) {
  return (
    <div>
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
    </div>
  );
}

export default Hero;
