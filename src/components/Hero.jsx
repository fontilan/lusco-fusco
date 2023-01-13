import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Hero({ month, spotifyLink, switchTheme, theme }) {
  return (
    <div>
      <div>
        <Button switchTheme={switchTheme} theme={theme} />
        <h1 className="title">lusco-fusco</h1>
        <p className="sub-title">
          an eclectic music playlist, curated by fontilan aka sernicze
        </p>
      </div>
      <a className="link" href={spotifyLink} target="_blank" rel="noreferrer">
        Listen on Spotify
      </a>
      <h2 className="date">{month}</h2>
    </div>
  );
}

Hero.propTypes = {
  month: PropTypes.string.isRequired,
  spotifyLink: PropTypes.string.isRequired,
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Hero;
