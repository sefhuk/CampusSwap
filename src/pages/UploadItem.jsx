import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Input from '../components/Input';
import { FaImage } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Wrap from '../components/Wrap';
import axios from 'axios';

const UploadItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState();
  const [itemDesc, setItemDesc] = useState('');
  const [previewImages, setPreviewImages] = useState([]);
  const [postImages, setPostImages] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleNameChanhge = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    if (isNaN(Number(e.target.value.replaceAll(',', '')))) return;

    let value = Number(e.target.value.replaceAll(',', ''));
    value = value.toLocaleString('ko-KR').toString();
    setItemPrice(value);
  };

  const handleDescChange = (e) => {
    setItemDesc(e.target.value);
  };

  const handleCheckChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleRemoveImage = (idx) => {
    let previewList = [...previewImages];
    let postList = [...postImages];
    URL.revokeObjectURL(previewList[idx]);
    previewList.splice(idx, 1);
    postList.splice(idx, 1);

    setPreviewImages(previewList);
    setPostImages(postList);
  };

  const handleImageChange = (e) => {
    let curLength = postImages.length;
    const postList = [...postImages];
    const previewList = [...previewImages];

    for (let i = 0; i < e.target.files.length; i++) {
      if (curLength === 10) break;
      postList.push(e.target.files[i]);
      previewList.push(URL.createObjectURL(e.target.files[i]));
      curLength++;
    }

    setPostImages(postList);
    setPreviewImages(previewList);
  };

  return (
    <Container col={true}>
      <Wrap
        etc={
          'justify-between items-center border-b-[1px] border-gray-500 font-bold w-full h-[10%] px-4'
        }
      >
        <button className='text-xl' onClick={() => navigate(-1)}>
          ←
        </button>
        <p className='text-xl'>물건 스왑 하기</p>
        <button
          onClick={() => {
            const imgData = new FormData();
            imgData.append('image', postImages[0]);
            axios({
              method: 'post',
              url: `http://${process.env.REACT_APP_HTTP_HOST}:${process.env.REACT_APP_HTTP_PORT}/upload`,
              headers: {},
              data: imgData,
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }).then((e) => {
              console.log(e.data);
            });
          }}
        >
          등록
        </button>
      </Wrap>
      <Wrap
        etc={
          'items-center w-full h-[15%] py-[3%] text-2xl px-2  overflow-x-scroll'
        }
      >
        <ul className='flex items-center h-full'>
          <li className='border-[1px] border-b-[1px] border-gray-500 rounded-[10px] w-[70px] py-2'>
            <label htmlFor='input_img' className='flex flex-col items-center'>
              <FaImage />
              <p className='mt-2 text-base'>사진 추가</p>
            </label>
            <Input
              type={'file'}
              id={'input_img'}
              name={'image'}
              etc={'hidden'}
              onChange={handleImageChange}
              accept={'image/*'}
              multiple
            />
          </li>
          {previewImages.map((e, idx) => {
            return (
              <li
                className={`relative flex justify-center items-center rounded-[10px] w-[70px] h-[70px] ml-6 overflow-hidden`}
                key={e}
              >
                <img
                  className='w-full h-full object-cover'
                  src={e}
                  alt={`image${idx}`}
                />
                <div className='absolute flex justify-center items-center bottom-0 bg-gray-400 w-full h-[20%] rounded-b-[8px] opacity-90 text-[12px]'>
                  {idx + 1}
                </div>
                <button
                  className='absolute inline-block bg-gray-600 rounded-[30%] text-base right-0 top-0'
                  onClick={() => {
                    handleRemoveImage(idx);
                  }}
                >
                  <RiDeleteBin5Line />
                </button>
              </li>
            );
          })}
        </ul>
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
          <Input
            type='checkbox'
            value={isChecked}
            etc={'mr-2'}
            onChange={handleCheckChange}
          />
          기부
        </label>
      </Wrap>
      <Wrap
        full={true}
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
