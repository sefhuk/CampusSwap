import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from './components/Container';
import { setScreenSize } from './utils/setScreenSize';

const App = () => {
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Container col={true} bg={'navy'}>
      <div className='bg-logo bg-no-repeat bg-contain w-[300px] h-[300px] mt-[20%]' />
      <div className='flex flex-col text-base font-bold text-second'>
        <p className='mx-0 my-2'>학우와의 소중한 거래</p>
        <p className='mx-0 my-2'>생필품, 교재 무엇이든!</p>
      </div>
      <Link
        to={'/init'}
        className='flex justify-center items-center bg-first w-1/2 h-[40px] text-base font-bold text-navy rounded-[5px] mt-[15%]'
      >
        대학교 선택하기
      </Link>
    </Container>
  );
};

export default App;
