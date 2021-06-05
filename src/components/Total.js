// Total component
import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ textContent, totalId }) => {
  return (
    <div>
      <p>
        {textContent}: <span id={totalId}>0</span>
      </p>
    </div>
  );
};

Total.propTypes = {
  textContent: PropTypes.string.isRequired,
  totalId: PropTypes.string.isRequired,
};

export default Total;
