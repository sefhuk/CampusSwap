import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slice/userSlice';
import { getSiginInResult } from '../firebase';

const LoginLoading = () => {
  const dispatch = useDispatch();

  const param = useSelector((state) => state.url.param);

  const navigate = useNavigate();

  useEffect(() => {
    getSiginInResult()
      .then((user) => {
        dispatch(
          login({
            username: user.displayName,
            imageURL: user.photoURL,
            email: user.email,
          })
        );
        navigate(`/u/${param}`, { replace: true });
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <h1 className='text-2xl font-bold'>로그인 중 입니다..</h1>
    </div>
  );
};

export default LoginLoading;
