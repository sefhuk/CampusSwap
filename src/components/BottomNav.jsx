import NavIcon from './NavIcon';
import { FaHome, FaPlusCircle, FaUserCog } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const BottomNav = () => {
  return (
    <nav className='flex justify-evenly items-center w-full h-[10%] '>
      <NavIcon to='' icon={() => <FaHome />} title={'홈'} />
      <NavIcon to='chat' icon={() => <FaMessage />} title={'채팅'} />
      <NavIcon to='sell' icon={() => <FaPlusCircle />} title={'판매'} />
      <NavIcon to='my' icon={() => <FaUserCog />} title={'내정보'} />
    </nav>
  );
};

export default BottomNav;
