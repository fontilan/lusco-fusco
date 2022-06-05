import React from 'react';
import PropTypes from 'prop-types';

function Songs({ author, title }) {
  return (
    <div className="song">
      <div className="song--author">{author}</div>
      <div className="song--separator">&nbsp;—&nbsp;</div>
      <div className="song--title">{title}</div>
    </div>
  );
}

Songs.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Songs;
