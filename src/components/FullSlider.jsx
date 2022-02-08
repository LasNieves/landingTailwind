import React from 'react';
import Slider from '../molecules/Slider';
import slider1 from '../img/slider1.png'
import slider2 from '../img/slider2.png'
import slider3 from '../img/slider3.png'


const FullSlider = () => {
  return( 
  <div className='flex gap-3 w-[93.75%] overflow-x-auto mx-auto mt-10 snap-x'>
   <Slider image={slider1} content="Santi" description="Member since 2016" />
   <Slider image={slider2} content="Camile" description="Member since 2012"/>
   <Slider image={slider3} content="Elayne" description="Member since 2018"/>

  </div>);
    
};

export default FullSlider;
