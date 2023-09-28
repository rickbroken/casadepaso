import React, {useContext, useEffect, useState} from 'react';
import ContInputText from './ContInputText';
import TpDocumentos from '../elementos/TpDocumentos';

const DatosAcompante = ({setNuevosDatos,NuevotpAcompanante, setNuevoTpAcompanante, NuevodocumentoAcompanante, setNuevoDocumentoAcompanante, NuevopriApellidoAcompanante, setNuevoPriApellidoAcompanante, NuevosegApellidoAcompanante, setNuevoSegApellidoAcompanante, NuevopriNombreAcompanante, setNuevoPriNombreAcompanante, NuevosegNombreAcompanante, setNuevoSegNombreAcompanante}) => {
  //console.log(NuevotpAcompanante);
  useEffect(()=>{
    setNuevosDatos((prev)=>(
      {...prev,
      tpAcompanante: NuevotpAcompanante,
      documentoAcompanante: NuevodocumentoAcompanante,
      priApellidoAcompanante: NuevopriApellidoAcompanante,
      segApellidoAcompanante: NuevosegApellidoAcompanante,
      priNombreAcompanante: NuevopriNombreAcompanante,
      segNombreAcompanante: NuevosegNombreAcompanante
    }));
  },[NuevotpAcompanante,NuevodocumentoAcompanante,NuevopriApellidoAcompanante,NuevosegApellidoAcompanante,NuevopriNombreAcompanante,NuevosegNombreAcompanante])

  return (
    <>
      <hr className='my-4'/>

      <p className='text-center text-lg font-[500]'>DATOS DEL ACOMPAÑANTE</p>

      <div className='flex'>
        <div className='mr-2'>
          <p>TP Doc:</p>
          <select value={NuevotpAcompanante} onChange={(e)=>setNuevoTpAcompanante(e.target.value)} className='border-inputs py-2 px-2 border rounded-md h-9'>
            <TpDocumentos />
          </select>
        </div>
        <ContInputText
          claseCSS='h-9'
          name='Documento del usuario:'
          onChange={(e)=>setNuevoDocumentoAcompanante(e.target.value)}
          value={NuevodocumentoAcompanante}
          placeholder='Escribre el documento'
        />
      </div>

      <div className='flex justify-between'>
        <ContInputText
          claseCSS='h-9'
          name='Primer Apellido:'
          onChange={(e)=>setNuevoPriApellidoAcompanante(e.target.value.toUpperCase())}
          value={NuevopriApellidoAcompanante}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          claseCSS='h-9'
          name='Segundo Apellido:'
          onChange={(e)=>setNuevoSegApellidoAcompanante(e.target.value.toUpperCase())}
          value={NuevosegApellidoAcompanante}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          claseCSS='h-9'
          name='Primer Nombre:'
          onChange={(e)=>setNuevoPriNombreAcompanante(e.target.value.toUpperCase())}
          value={NuevopriNombreAcompanante}
          placeholder='Escribre el nombre'
        />
        <ContInputText
          claseCSS='h-9'
          name='Segundo Nombre:'
          onChange={(e)=>setNuevoSegNombreAcompanante(e.target.value.toUpperCase())}
          value={NuevosegNombreAcompanante}
          placeholder='Escribre el nombre'
        />
      </div>
    </>
  );
}
 
export default DatosAcompante;