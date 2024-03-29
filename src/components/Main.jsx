import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Songs from './Songs';
import songsData from '../assets/songsData';

const songs = songsData.songs.map((song) => (
  <Songs artist={song.artist} title={song.title} key={nanoid()} />
));

function Main({ altText, cover, coverAuthor, coverLink, coverTitle }) {
  return (
    <div className="main">
      <div className="main__cover">
        <a href={coverLink} target="_blank" rel="noreferrer">
          <img src={cover} alt={altText} />
        </a>
        <p className="cover-info">
          {coverAuthor}, <span className="cover-info__title">{coverTitle}</span>
        </p>
      </div>
      <div className="main__songs">{songs}</div>
    </div>
  );
}

Main.propTypes = {
  altText: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  coverAuthor: PropTypes.string.isRequired,
  coverLink: PropTypes.string.isRequired,
  coverTitle: PropTypes.string.isRequired,
};

export default Main;
