import React from 'react';
import PropTypes from 'prop-types';

function Songs({ author, title }) {
  return (
    <p className="song">
      <span className="song--author">{author}</span>
      &nbsp;—&nbsp;
      <span className="song--title">{title}</span>
    </p>
  );
}

Songs.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Songs;
