import React from 'react';

const BtnAgregar = ({funcion,estadoUsuario}) => {
  return (
    <button onClick={(funcion)} className={`${estadoUsuario ? 'bg-[#1d61ad] hover:bg-[#144a75]': 'bg-[#858484] hover:bg-[#636363]'}  text-white px-3 rounded-md my-px`}>{estadoUsuario ? 'Agregar' : 'Ver más'}</button>
  );
}
 
export default BtnAgregar;