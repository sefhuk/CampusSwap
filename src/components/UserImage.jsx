import { Link } from 'react-router-dom';

const UserImage = ({ src }) => {
  return (
    <Link className='w-7 h-7 rounded-full overflow-hidden' to={'my'}>
      <img className='w-full h-full' src={src} alt='user' />
    </Link>
  );
};

export default UserImage;
