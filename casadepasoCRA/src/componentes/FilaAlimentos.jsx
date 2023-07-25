import { format, fromUnixTime } from 'date-fns';
import React from 'react';
import FilaEditarAlimento from './FilaEditarAlimento';

const FilaAlimentos = ({id,fechaAlimento,alimentos,idDocFirebase}) => {
  
  const formatoMilisegundos = fechaAlimento / 1000;
  const fechaSinUnix = fromUnixTime(formatoMilisegundos);
  const fechaFormateada = format(fechaSinUnix, 'dd/MM//yyyy');


  return (
    <FilaEditarAlimento alimentos={alimentos} fechaFormateada={fechaFormateada} idDocFirebase={idDocFirebase}/>
  );
}
 
export default FilaAlimentos;