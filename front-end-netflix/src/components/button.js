// components/button.js
import React from 'react';

const Button = ({ children, width, onClick, type = 'button' }) => {
  const buttonStyle = {
    width: width || 'auto',
    padding: '0.5rem',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
