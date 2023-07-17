import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import EstadoAlojamiento from '../elementos/EstadoAlojamiento';
import BtnAgregar from '../elementos/BtnAgregar';
import AccionAgregar from './AccionAgregar';

const FilaUsuario = ({id,tp,documento,priApellido,segApellido,priNombre,segNombre,fechaIngreso,fechaSalida,estadoUsuario}) => {
  const [mostrarAccionAgregar, setMostrarAccionAgregar] = useState(false);

  return (
    <>
      {mostrarAccionAgregar &&
        <AccionAgregar
          setMostrarAccionAgregar={setMostrarAccionAgregar}
          id={id}
          tp={tp}
          documento={documento}
          priApellido={priApellido}
          segApellido={segApellido}
          priNombre={priNombre}
          segNombre={segNombre}
          fechaIngreso={fechaIngreso}
          fechaSalida={fechaSalida}
          estadoUsuario={estadoUsuario}
        />
      }

      <tr>
        <td>{id}</td>
        <td>{tp}</td>
        <td>{documento}</td>
        <td>{priApellido}</td>
        <td>{segApellido}</td>
        <td>{priNombre}</td>
        <td>{segNombre}</td>
        <td>{fechaIngreso}</td>
        <td>{!fechaSalida ? '-' : fechaSalida}</td>
        <EstadoAlojamiento estadoUsuario={estadoUsuario} />
        <td><BtnAgregar funcion={()=>setMostrarAccionAgregar(true)} /></td>
        <td><Icon icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
      </tr>
    </>
  );
}
 
export default FilaUsuario;