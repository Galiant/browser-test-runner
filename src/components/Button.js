// Button component
import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

const Button = ({ handleClick, textContent, buttonId }) => {
  return (
    <button className='button' id={buttonId} onClick={handleClick}>
      {textContent}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  textContent: PropTypes.string.isRequired,
  buttonId: PropTypes.string,
};

export default Button;
