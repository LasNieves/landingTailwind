import React from 'react';

const ButtonSecundary = ({content, estilos}) => {
  return <button className={` ${estilos} bg-white text-verdeButton text-sm font-raleway font-black uppercase cursor-pointer`}>
    {content}
    </button>;
};

export default ButtonSecundary;

ButtonSecundary.defaultProps = {
  content: "TRY NOW"
}