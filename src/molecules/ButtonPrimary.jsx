import React from 'react';

const ButtonPrimary = ({content, estilos}) => {
  return <button className={` ${estilos} bg-verdeButton text-white text-sm font-raleway uppercase tracking-wider`}>
    {content}
    </button>;
};

export default ButtonPrimary;

ButtonPrimary.defaultProps = {
  content: "TRY NOW"
}
