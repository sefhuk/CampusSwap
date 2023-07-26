import Container from '../components/Container';
import { campuses } from '../assets/data/campuses';
import { Link } from 'react-router-dom';

import { convertToHex } from '../utils/convert';

const SelectCampus = () => {
  return (
    <Container col={true} etc={''}>
      <h1 className='text-3xl font-bold mt-[30%]'>대학교를 선택해주세요!</h1>
      <div className='flex flex-col w-[70%] h-[50%] mt-10'>
        <ul className='flex flex-col h-1000%] overflow-y-scroll text-xl font-bold'>
          {campuses.map((e) => (
            <Link
              to={`/u/${convertToHex(e)}`}
              className='text-xl border-b-[1px] border-gray-500 p-1'
              key={convertToHex(e)}
            >
              {e}
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SelectCampus;
