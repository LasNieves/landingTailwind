import React from 'react';
import logo from '../img/mail.svg'
import ButtonPrimary from '../molecules/ButtonPrimary';

const Header = () => {
  return (
  <header className='w-full py-3'>
      <div className='flex justify-around gap-x-2.5 sm:gap-x-8 w-[93.75%] mx-auto '>
          <div className='flex justify-center sm:justify-end items-center w-[53.33333%]'>
            <img className='mr-3' src={logo}/> 
            <p className='font-raleway font-black text-[22px] ' >NinjaMail</p>
          </div>
        <div className='flex justify-end sm:justify-start items-center w-[46.66666%]'>    
        <ButtonPrimary content="sign up free" estilos="max-w-[140px] w-[77.14285714285714%] p-0 font-extrabold text-[11px]"/>
        </div> 
      </div>
  </header>
  );
};

export default Header;
