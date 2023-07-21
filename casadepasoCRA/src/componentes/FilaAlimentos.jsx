import { Icon } from '@iconify/react';
import { format, fromUnixTime } from 'date-fns';
import React from 'react';

const FilaAlimentos = ({id,fechaAlimento,alimentos}) => {
  
  const formatoMilisegundos = fechaAlimento / 1000;
  const fechaSinUnix = fromUnixTime(formatoMilisegundos);
  const fechaFormateada = format(fechaSinUnix, 'dd/MM//yyyy');


  return (
    <tr>
      <td>{fechaFormateada}</td>
      {alimentos.length !== 0 &&
        alimentos.map((alimento)=>(
          <>
            <td>{alimento.desayuno + alimento.desayunoAcompanante}</td>
            <td>{alimento.almuerzo + alimento.almuerzoAcompanante}</td>
            <td>{alimento.cena + alimento.cenaAcompanante}</td>
            <td>{alimento.desayuno + alimento.desayunoAcompanante + alimento.almuerzo + alimento.almuerzoAcompanante +alimento.cena + alimento.cenaAcompanante}</td>
          </>
        ))
      }
      <td><Icon icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
    </tr>
  );
}
 
export default FilaAlimentos;