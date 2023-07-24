import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <div className='logo' />
      <div className='desc'>
        <p className='text'>학우와의 소중한 거래</p>
        <p className='text'>생필품, 교재 무엇이든!</p>
      </div>
      <Link className='button'>대학교 선택하기</Link>
    </div>
  );
};

export default App;
