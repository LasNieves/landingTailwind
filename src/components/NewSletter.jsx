import React from 'react';
import ButtonPrimary from '../molecules/ButtonPrimary';

const NewSletter = () => {
  return( 
  <div className='flex flex-col items-center gap-3 w-[93.75%] mx-auto mt-10' >
      <input className='w-10/12  p-3 border border-[#9F9F9F] rounded placeholder:text-black placeholder:font-raleway placeholder:font-medium placeholder:text-xs focus:outline-verdeButton' type="text " placeholder='Enter your email' />
      <p className=' font-raleway font-medium text-xs text-verdeButton text-center' >Thanks! Email received</p>
      <ButtonPrimary content="Join our list" estilos="font-raleway font-black text-xs w-28 py-2 " />
  </div>
  );
};

export default NewSletter;
