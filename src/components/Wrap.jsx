import React from 'react';

const Wrap = ({ col, full, etc, children }) => {
  return (
    <div className={`flex ${col && 'flex-col'} ${full && 'w-full'} ${etc}`}>
      {children}
    </div>
  );
};

export default Wrap;
