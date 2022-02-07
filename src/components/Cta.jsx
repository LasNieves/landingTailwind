import React from 'react';
import ButtonPrimary from '../molecules/ButtonPrimary';
import ButtonSecundary from '../molecules/ButtonSecundary';

const Cta = () => {
  return (
    <div className='flex flex-col justify-between w-[93.75%] h-20 mt-[60px] mb-[20px] mx-auto'>    
    <p className='font-raleway font-medium text-sm sm:text-lg' >
    Create and launch email campaigns that captivate your customers in just a few clicks.
    </p>
    <div className='flex justify-around'>       
    <ButtonPrimary content="try now" estilos="max-w-[190px] w-[47.666666%] p-1 font-extrabold text-[11px]"/>
    <ButtonSecundary content="get a demo" estilos="max-w-[190px] w-[47.666666%] p-1 font-extrabold text-[11px] border-[3px] border-[#4BA87D] " />
    </div>
    </div>
  );
};

export default Cta;
