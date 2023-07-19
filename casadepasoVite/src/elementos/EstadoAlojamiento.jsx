import React from 'react';


const EstadoAlojamiento = ({estadoUsuario}) => {
  return (
    <>
      <td className={`${estadoUsuario ? 'bg-[#b2ffd5] text-primario' : 'bg-[#f58ba2] text-red-800'} select-none`}>{estadoUsuario ? 'EN ESTADIA' : 'FINALIZADO'}</td>
    </>
  );
}
 
export default EstadoAlojamiento;