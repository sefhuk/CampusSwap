import { Outlet, useParams } from 'react-router-dom';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

import { convertFromHex } from '../utils/convert';

const Root = () => {
  const { campusId } = useParams();

  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <Header name={convertFromHex(campusId)} />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Root;
