import React from 'react';
import logo1 from '../img/Logo1.png';
import logo2 from '../img/Logo2.png'
import logo3 from '../img/Logo3.png'
import logo4 from '../img/Logo4.png'
import logo5 from '../img/Logo5.png'

const images = [
    {
        src:logo1,
        alt:"Dragon",
        id: 1,
    },
    {
        src:logo2,
        alt:"Game",
        id: 2,
    },
    {
        src:logo3,
        alt:"Last",
        id: 3,
    },
    {
        src:logo4,
        alt:"Radio",
        id: 4,
    },
    {
        src:logo5,
        alt:"Quest AI",
        id: 5,
    },
]

const Brand = () => {    
  return( 
  <div className='flex flex-col gap-5 items-center w-[93.75%] mx-auto mt-10'>
      <h4 className='font-playfair font-black text-[26px] text-center' >All the best brands
    already use us.
    </h4>
    <div className='grid grid-cols-2 justify-items-center gap-8 '>
      {images.map((el) => (
              <img className={el.id === 5 ? `max-x-full h-auto col-span-2 flex justify-self-center ` : `max-x-full h-auto`}
               src={el.src} alt={el.alt} key={el.id} />     
      ))}
          </div>
  </div>
  );
};

export default Brand;
