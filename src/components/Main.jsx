import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Songs from './Songs';
import musicData from '../assets/songsDB';

const songs = musicData.songs.map((song) => (
  <Songs author={song.author} title={song.title} key={nanoid()} />
));

function Main({ altText, cover, coverAuthor, coverTitle }) {
  return (
    <div className="main">
      <div className="main__cover">
        <img src={cover} alt={altText} />
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
  coverTitle: PropTypes.string.isRequired,
};

export default Main;
