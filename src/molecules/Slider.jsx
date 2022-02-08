import React from 'react';

const Slider = ({image, content, description, estilos}) => {
  return( 
   <div className='relative shrink-0 w-[93.75%] overflow-hidden snap-center'>
       <img className='max-x-full h-auto mr-0' src={image} alt="" />
       <div className='absolute text-left bottom-6 left-6' > 
        <h4 className='font-raleway font-black text-[22px] text-white ' >{content}</h4>
        <p className='font-raleway font-bold text-[12px] text-white ' >{description}</p>
       </div>
   </div>
  );  
};

export default Slider;

Slider.defaultProps = {
    estilos: ""
  }