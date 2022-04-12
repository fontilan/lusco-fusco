/* eslint-disable react/prop-types */
import React from 'react';

function Songs({ author, title }) {
  return (
    <div className="song">
      <div className="song--author">{author}</div>
      <div className="song--separator">&nbsp;—&nbsp;</div>
      <div className="song--title">{title}</div>
    </div>
  );
}

export default Songs;
