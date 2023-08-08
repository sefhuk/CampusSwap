import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSiginInResult, writeData } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/userSlice';
import { setParam } from '../redux/slice/urlSlice';
import { campuses } from '../assets/data/campuses';

const Home = () => {
  const { campusId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParam({ param: campusId }));
  });

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
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <div>
      Home<br></br>
      <button onClick={() => {}}>start</button>
    </div>
  );
};

export default Home;
