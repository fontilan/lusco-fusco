/* eslint-disable react/prop-types */
import React from 'react';

function Songs({ author, title }) {
  return (
    <div className="song">
      <p className="song--author">{author}</p>
      <p className="song--separator">&nbsp;—&nbsp;</p>
      <p className="song--title">{title}</p>
    </div>
  );
}

export default Songs;
