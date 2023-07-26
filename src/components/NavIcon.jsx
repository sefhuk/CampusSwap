import React from 'react';
import { Link } from 'react-router-dom';

const NavIcon = (props) => {
  return (
    <Link
      to={props.to}
      className='flex justify-center items-center w-[20%] pt-2 text-first'
    >
      <div className='flex flex-col items-center text-xl'>
        {props.icon()}
        <p className='text-[14px]'>{props.title}</p>
      </div>
    </Link>
  );
};

export default NavIcon;
