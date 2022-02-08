import React from 'react';
import ButtonSecundary from '../molecules/ButtonSecundary';


const Get = () => {
  return( 
  <div className='w-full h-[290px] mt-10 p-8 text-center bg-verdeButton'>
    <h5 className='text-white font-playfair font-black text-[42px] leading-[48px] my-3' >Get started today!</h5>
    <ButtonSecundary content="Pick a Plan" estilos="p-2 mt-8 w-2/4" />
  </div>
  );
};

export default Get;
