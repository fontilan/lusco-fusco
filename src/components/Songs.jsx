import React from 'react';
import PropTypes from 'prop-types';

function Songs({ artist, title }) {
  const searchQuery = `https://www.google.com/search?q=${artist}+${title}`;

  return (
    <a href={searchQuery} target="_blank" rel="noreferrer" className="song">
      <span>{artist}</span>
      &nbsp;—&nbsp;
      <span className="song__title">{title}</span>
    </a>
  );
}

Songs.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Songs;
