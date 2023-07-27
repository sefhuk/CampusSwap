import React from 'react';

const Input = ({ etc, click, ...props }) => {
  return <input className={`bg-navy outline-none ${etc}`} {...props} />;
};

export default Input;
