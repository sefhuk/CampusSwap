import { useState } from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { googleSignIn } from '../../firebase';
import { useSelector } from 'react-redux';

const SignInForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const param = useSelector((state) => state.url.param);

  const handleIdChange = (e) => setId(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    navigate('loading');
    // navigate(`/u/${param}`);
    googleSignIn();
  };

  return (
    <Container col={true} etc={'mt-[20%]'}>
      <div className='bg-logo w-[60%] h-[35%] bg-contain bg-no-repeat' />
      <Input
        etc={'w-[70%] border-[1px] border-first text-2xl p-2 mb-2'}
        type='text'
        value={id}
        placeholder='이메일'
        onChange={handleIdChange}
      />
      <Input
        etc={'w-[70%] border-[1px] border-first text-2xl p-2'}
        type='password'
        value={password}
        placeholder='비밀번호'
        onChange={handlePasswordChange}
      />
      <div className='flex flex-col items-center w-[70%] mt-2 mb-10'>
        <Link to={'/signup'} replace={true}>
          계정이 없으신가요?
        </Link>
        <button
          className='flex justify-center items-center w-[80%] bg-first text-navy rounded-[5px] mt-10 text-base p-2'
          onClick={handleLogin}
        >
          <FcGoogle className='mr-2' />
          Google로 로그인하기
        </button>
      </div>
    </Container>
  );
};

export default SignInForm;
