import { format, fromUnixTime, parse, parseISO } from 'date-fns';
import React from 'react';
import FilaEditarAlimento from './FilaEditarAlimento';

const FilaAlimentos = ({alimentos}) => {
  
  //const formatoMilisegundos = fechaAlimento / 1000;
  //const fechaSinUnix = fromUnixTime(formatoMilisegundos);
  //const fechaFormateada = format(fechaSinUnix, 'dd/MM//yyyy');

  const alimentacionArray = Object.keys(alimentos).reduce((acc, key) => {
    if (key !== "id" && key !== "idDocFirebase") {
      acc.push({ id: key, ...alimentos[key] });
    }
    return acc;
  }, []);
  

  console.log(alimentos.idDocFirebase);
  return ( 
    <>
    <FilaEditarAlimento alimentos={alimentacionArray} id={alimentos.id} idDocFirebase={alimentos.idDocFirebase}/>
    </>
  );
}
 
export default FilaAlimentos;