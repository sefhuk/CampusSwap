import React from 'react';

const Container = ({ col, etc, children }) => {
  return (
    <div className={`flex ${col && 'flex-col items-center'} h-full ${etc}`}>
      {children}
    </div>
  );
};

export default Container;
