import UserImage from './UserImage';
import { useSelector } from 'react-redux';

const Header = ({ name }) => {
  const { isLoggedIn, imageURL } = useSelector((state) => state.user);

  return (
    <header
      className={`flex items-center w-[90%] h-[8%] ${
        isLoggedIn && 'justify-between'
      }`}
    >
      <h1 className='text-2xl'>{name}</h1>
      {isLoggedIn && <UserImage src={imageURL} />}
    </header>
  );
};

export default Header;
