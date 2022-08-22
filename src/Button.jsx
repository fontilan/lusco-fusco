import React from 'react';
import PropTypes from 'prop-types';

function Button({ switchTheme, theme }) {
  return (
    <button className="theme-button" type="button" onClick={switchTheme}>
      {theme === 'dark' ? (
        <span
          aria-label="Switch to light theme"
          className="material-symbols-outlined icon icon__light"
          title="Switch to light theme"
        >
          brightness_7
        </span>
      ) : (
        <span
          aria-label="Switch to dark theme"
          className="material-symbols-outlined icon icon__dark"
          title="Switch to dark theme"
        >
          brightness_4
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Button;
