import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import EstadoAlojamiento from '../elementos/EstadoAlojamiento';
import BtnAgregar from '../elementos/BtnAgregar';
import AccionAgregar from './AccionAgregar';

const FilaUsuario = ({id,idDocFirebase,tp,documento,priApellido,segApellido,priNombre,segNombre,fechaIngreso,fechaSalida,estadoUsuario,acompanante,priApellidoAcompanante,segApellidoAcompanante,priNombreAcompanante,segNombreAcompanante}) => {
  const [mostrarAccionAgregar, setMostrarAccionAgregar] = useState(false);

  //console.log(idDocFirebase);
  return (
    <>
      {mostrarAccionAgregar &&
        <AccionAgregar
          setMostrarAccionAgregar={setMostrarAccionAgregar}
          id={id}
          idDocFirebase={idDocFirebase}
          priApellido={priApellido}
          segApellido={segApellido}
          priNombre={priNombre}
          segNombre={segNombre}
          fechaSalida={fechaSalida}
          estadoUsuario={estadoUsuario}
          acompanante={acompanante}
          priApellidoAcompanante={priApellidoAcompanante}
          segApellidoAcompanante={segApellidoAcompanante}
          priNombreAcompanante={priNombreAcompanante}
          segNombreAcompanante={segNombreAcompanante}
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
        <td>{estadoUsuario ? <BtnAgregar name='Agregar' funcion={()=>setMostrarAccionAgregar(true)} /> : <BtnAgregar name='Ver más' funcion={()=>setMostrarAccionAgregar(true)} />}</td>
        <td><Icon icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
      </tr>
    </>
  );
}
 
export default FilaUsuario;