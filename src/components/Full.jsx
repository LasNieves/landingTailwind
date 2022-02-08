import React from 'react';
import imgcard1 from '../img/card1.png'
import imgcard2 from '../img/card2.png'
import Card from '../molecules/Card';

const Full = () => {
  return (
  <main className='grid grid-cols-1 gap-4 w-[93.75%] mx-auto mt-9'>
      <Card image={imgcard1} content="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end." />
      <Card estilos='justify-self-end' image={imgcard2} content="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools." />
      <div className='w-10/12 justify-self-center' >
          <h3 className='font-playfair font-black text-3xl' >The source for proven, engaging email campaigns</h3>
          <p className='font-raleway font-medium text-xs mt-3' >Whether you’re a startup, small business, e-commerce store, or  want to promote your app, NinjaMail has the feature set tailored for your business. </p>
      </div>
  </main>
  );
};

export default Full;
