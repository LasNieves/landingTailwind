import React from 'react';
import imgportada from '../img/portada.png'
import imgportada425 from '../img/portada425.png'
import ButtonSecundary from '../molecules/ButtonSecundary';

const Portada = () => {
  return (
  <section className='relative w-[93.75%] mx-auto mt-10'>
       <picture>
         <source srcset={imgportada425} media="(min-width: 321px)"/>
        <img className='max-x-full h-auto' src={imgportada} alt="Portada" />
       </picture>
      <div className='absolute text-center inset-0 translate-y-1/3'>
      <h3 className='font-playfair font-black text-[22px] text-white ' >Reach More Customers</h3>
    <ButtonSecundary content="Learn How" estilos="font-raleway font-black text-xs w-28 py-2 mt-3" />
      </div>
  </section>
  );
};

export default Portada;
