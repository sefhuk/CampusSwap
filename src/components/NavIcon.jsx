import React from 'react';
import { Link } from 'react-router-dom';

const NavIcon = ({ to, icon, title }) => {
  return (
    <Link
      to={to}
      className='flex justify-center items-center w-[20%] pt-2 text-first'
    >
      <div className='flex flex-col items-center text-xl'>
        {icon()}
        <p className='text-[14px]'>{title}</p>
      </div>
    </Link>
  );
};

export default NavIcon;
