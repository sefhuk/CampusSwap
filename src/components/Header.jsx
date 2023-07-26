import React from 'react';

const Header = ({ name }) => {
  return (
    <header className='flex items-center w-[90%] h-[8%]'>
      <h1 className='text-2xl'>{name}</h1>
    </header>
  );
};

export default Header;
