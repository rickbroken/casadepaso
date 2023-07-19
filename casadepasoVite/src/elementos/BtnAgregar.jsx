import React from 'react';

const BtnAgregar = ({funcion}) => {
  return (
    <button onClick={(funcion)} className='bg-[#1d61ad] hover:bg-[#144a75] text-white px-3 rounded-md my-px'>Agregar</button>
  );
}
 
export default BtnAgregar;