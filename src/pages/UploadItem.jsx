import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Input from '../components/Input';
import { FaImage } from 'react-icons/fa';
import Wrap from '../components/Wrap';

const UploadItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState();
  const [itemDesc, setItemDesc] = useState('');

  const navigate = useNavigate();

  const handleNameChanhge = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleDescChange = (e) => {
    setItemDesc(e.target.value);
  };

  return (
    <Container col={true}>
      <Wrap
        full={true}
        etc={
          'justify-between items-center border-b-[1px] border-gray-500 font-bold h-[10%] px-4'
        }
      >
        <button className='text-xl' onClick={() => navigate(-1)}>
          ←
        </button>
        <p className='text-xl'>물건 스왑 하기</p>
        <button className=''>등록</button>
      </Wrap>
      <Wrap
        col={true}
        etc={
          'justify-center items-center w-[5rem] h-[5rem] border-[1px] m-[5%] text-2xl rounded-[10px] border-b-[1px] border-gray-500'
        }
      >
        <label for='input_img' className='flex flex-col items-center'>
          <FaImage />
          <p className='mt-2 text-base'>사진 추가</p>
        </label>
        <Input
          type={'file'}
          id={'input_img'}
          etc={'hidden'}
          accept={'image/*'}
          multiple
        />
      </Wrap>
      <Wrap
        full={true}
        col={true}
        etc={'h-[10%] border-y-[1px] border-gray-500 w-[97%]'}
      >
        <Input
          type='text'
          placeholder='물건 이름'
          etc={'h-full text-2xl pl-2'}
          value={itemName}
          onChange={handleNameChanhge}
        />
      </Wrap>
      <Wrap
        full={true}
        etc={'justify-between h-[10%] border-b-[1px] border-gray-500 w-[97%]'}
      >
        <Input
          type='text'
          placeholder='금액'
          etc={'h-full text-2xl pl-2'}
          value={itemPrice}
          onChange={handlePriceChange}
        />
        <label className='flex items-center text-base'>
          <Input type='checkbox' value={'share'} etc={'mr-2'} />
          기부
        </label>
      </Wrap>
      <Wrap
        full={true}
        q
        col={true}
        etc={'h-[50%] border-b-[1px] border-gray-500 w-[97%] p-2'}
      >
        <textarea
          className='bg-navy outline-none text-2xl h-full'
          placeholder='물건을 소개해주세요!'
          onChange={handleDescChange}
          value={itemDesc}
          maxLength={300}
        />
      </Wrap>
    </Container>
  );
};

export default UploadItem;
