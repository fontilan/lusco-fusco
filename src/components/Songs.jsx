import React from 'react';
import PropTypes from 'prop-types';

function Songs({ artist, title }) {
  // create a string in the form of `artist name song title` as a basis for a Google search. Then encode it to ensure the search query is valid
  const query = encodeURIComponent(artist.concat(' ', title));

  return (
    <a
      href={`https://www.google.com/search?q=${query}`}
      target="_blank"
      rel="noreferrer"
      className="song"
    >
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
