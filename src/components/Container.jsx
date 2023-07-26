import React from 'react';

const Container = (props) => {
  return (
    <div
      className={`flex ${props.col && 'flex-col items-center'} h-full ${
        props.etc
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
