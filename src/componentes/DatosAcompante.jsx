import React, {useContext, useEffect, useState} from 'react';
import ContInputText from './ContInputText';
import TpDocumentos from '../elementos/TpDocumentos';
import { ContextoUsuarios } from '../contextos/ContextoUsuarios';

const DatosAcompante = ({tpAcompanante, setTpAcompanante, documentoAcompanante, setDocumentoAcompanante, priApellidoAcompanante, setPriApellidoAcompanante, segApellidoAcompanante, setSegApellidoAcompanante, priNombreAcompanante, setPriNombreAcompanante, segNombreAcompanante, setSegNombreAcompanante}) => {
  const {setUsuario} = useContext(ContextoUsuarios);

  useEffect(()=>{
    setUsuario((prev)=>(
      {...prev,
      tpAcompanante: tpAcompanante,
      documentoAcompanante: documentoAcompanante,
      priApellidoAcompanante: priApellidoAcompanante,
      segApellidoAcompanante: segApellidoAcompanante,
      priNombreAcompanante: priNombreAcompanante,
      segNombreAcompanante: segNombreAcompanante
    }));
  },[tpAcompanante,documentoAcompanante,priApellidoAcompanante,segApellidoAcompanante,priNombreAcompanante,segNombreAcompanante,setUsuario])

  return (
    <>
      <hr className='my-4'/>

      <p className='text-center text-lg font-[500]'>DATOS DEL ACOMPAÑANTE</p>

      <div className='flex'>
        <div className='mr-2'>
          <p>TP Doc:</p>
          <select value={tpAcompanante} onChange={(e)=>setTpAcompanante(e.target.value)} className='border-inputs py-2 px-2 border rounded-md h-9'>
            <TpDocumentos />
          </select>
        </div>
        <ContInputText
          claseCSS='h-9'
          name='Documento del usuario:'
          onChange={(e)=>setDocumentoAcompanante(e.target.value)}
          value={documentoAcompanante}
          placeholder='Escribre el documento'
        />
      </div>

      <div className='flex justify-between'>
        <ContInputText
          claseCSS='h-9'
          name='Primer Apellido:'
          onChange={(e)=>setPriApellidoAcompanante(e.target.value.toUpperCase())}
          value={priApellidoAcompanante}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          claseCSS='h-9'
          name='Segundo Apellido:'
          onChange={(e)=>setSegApellidoAcompanante(e.target.value.toUpperCase())}
          value={segApellidoAcompanante}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          claseCSS='h-9'
          name='Primer Nombre:'
          onChange={(e)=>setPriNombreAcompanante(e.target.value.toUpperCase())}
          value={priNombreAcompanante}
          placeholder='Escribre el nombre'
        />
        <ContInputText
          claseCSS='h-9'
          name='Segundo Nombre:'
          onChange={(e)=>setSegNombreAcompanante(e.target.value.toUpperCase())}
          value={segNombreAcompanante}
          placeholder='Escribre el nombre'
        />
      </div>
    </>
  );
}
 
export default DatosAcompante;