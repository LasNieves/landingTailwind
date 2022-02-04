import React from 'react';


const Background = () => {
  return (
<>
    <div className='absolute top-[413px] z-n1 w-full h-[36rem] bg-gris'></div>
    <div className='absolute top-[809px] z-n2 w-full h-[50rem] bg-verde' style={{clipPath: "polygon(0 22%, 100% 0%, 100% 59%, 0 82%)"}}></div>
</>
  );
};

export default Background;
