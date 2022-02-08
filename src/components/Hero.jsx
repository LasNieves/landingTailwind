import React from 'react';
import heroimg from '../img/hero.jpg'
import hero375 from '../img/hero375.jpg'


const Hero = () => {
  return (
  <section className='relative mt-5 mb-12 w-[93.75%] mx-auto'>
      <h1 className='absolute font-playfair font-black text-4xl leading-[2.875rem]' >Create Stunning <br /> Email <br /> Campaigns</h1>
      <div className='w-full relative top-12 z-n1'>     
         <picture className='w-full'>
             <source className='w-full' srcset={hero375} media="(min-width: 375px)" />
             <img className='w-full h-auto' src={heroimg} alt="Hero Img"/>
         </picture>
      </div>
  </section>
  );
};

export default Hero;
