import React from 'react';

const Wrap = ({ col, etc, children }) => {
  let flexCol = col && 'flex-col';

  return <div className={`flex ${flexCol} ${etc}`}>{children}</div>;
};

export default Wrap;
