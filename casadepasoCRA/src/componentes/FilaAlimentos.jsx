import { Icon } from '@iconify/react';
import React from 'react';

const FilaAlimentos = ({id,fechaAlimento,alimentos}) => {

  return (
    <tr>
      <td>{fechaAlimento}</td>
      {alimentos.length !== 0 &&
        alimentos.map((alimento)=>(
          <>
            <td>{alimento.desayuno + alimento.desayunoAcompanante}</td>
            <td>{alimento.almuerzo + alimento.almuerzoAcompanante}</td>
            <td>{alimento.cena + alimento.cenaAcompanante}</td>
          </>
        ))
      }
      <td><Icon icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
      <td>5</td>
    </tr>
  );
}
 
export default FilaAlimentos;