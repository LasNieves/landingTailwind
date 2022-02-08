import React from 'react';

const Card = ({image, content, estilos}) => {
  return (
  <div className={`${estilos} w-[69.66666666666667%]`}>
      <img className='max-w-full h-auto' src={image} alt="Persona" />
      <div className='bg-white p-4'>    
      <p className='mb-2 font-raleway font-medium text-xs leading-4 ' >
       {content}
      </p>
      <a className='font-raleway font-extrabold text-xs text-verdeButton leading-4' href='#'>Learn More ➡️ </a>
      </div>
  </div>
  )
};

export default Card;

Card.defaultProps = {
  estilos: ""
}