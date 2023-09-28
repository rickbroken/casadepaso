import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import EstadoAlojamiento from '../elementos/EstadoAlojamiento';
import BtnAgregar from '../elementos/BtnAgregar';
import AccionAgregar from './AccionAgregar';
import { format, fromUnixTime } from 'date-fns';
import EditarRegistro from './EditarRegistro';
import agregarDocAlimentoFirebase from '../firebase/agregarDocAlimentoFirebase';

const FilaUsuario = ({id, idDocFirebase, tp, documento, motivoAlojamiento, priApellido, segApellido, priNombre, segNombre, fechaIngreso, fechaSalida, estadoUsuario, acompanante, tpAcompanante, documentoAcompanante, priApellidoAcompanante, segApellidoAcompanante, priNombreAcompanante, segNombreAcompanante, observaciones}) => {
  const [mostrarAccionAgregar, setMostrarAccionAgregar] = useState(false);
  const [mostarEditarRegistro, setMostrarEditarRegistro] = useState(false);

  const handleBtnAgregar = () => {
    setMostrarAccionAgregar(true);
    agregarDocAlimentoFirebase(id);
  }
  
  return (
    <>
      {mostarEditarRegistro &&
        <EditarRegistro 
          setMostrarEditarRegistro={setMostrarEditarRegistro}
          idDocFirebase={idDocFirebase}
          tp={tp}
          id={id}
          documento={documento}
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
          fechaIngreso={fechaIngreso}
          motivoAlojamiento={motivoAlojamiento}
          tpAcompanante={tpAcompanante}
          documentoAcompanante={documentoAcompanante}
          observaciones={observaciones}
        />
      }
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
          fechaIngreso={fechaIngreso}
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
        <td>{format(fromUnixTime(fechaIngreso) / 1000, 'dd/MM/yyyy')}</td>
        <td>{!fechaSalida ? '-' : format(fromUnixTime(fechaSalida) / 1000, 'dd/MM/yyyy')}</td>
        <EstadoAlojamiento estadoUsuario={estadoUsuario} />
        <td><BtnAgregar estadoUsuario={estadoUsuario} funcion={()=>handleBtnAgregar()} /></td>
        <td onClick={()=>setMostrarEditarRegistro(true)}><Icon icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
      </tr>
    </>
  );
}
 
export default FilaUsuario;