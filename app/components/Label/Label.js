import React from 'react';
import PropTypes from 'prop-types';

function Label({ message }) {
  return (
    <div className="alert-container">
      <i className="fas fa-exclamation-circle alert-icon" />
      <span data-testid="message">{message}</span>
    </div>
  );
}

Label.propTypes = {
  message: PropTypes.string,
};

Label.defaultProps = {
  message: '',
};

export default Label;
