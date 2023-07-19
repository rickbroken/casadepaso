import React, {useContext, useEffect, useState} from 'react';
import ContInputText from './ContInputText';
import TpDocumentos from '../elementos/TpDocumentos';
import { ContextoUsuarios } from '../contextos/ContextoUsuarios';

const DatosAcompante = () => {
  const {setUsuario} = useContext(ContextoUsuarios);

  const [tp, setTp] = useState('');
  const [documento, setDocumento] = useState('');
  const [priApellido, setPriApellido] = useState('');
  const [segApellido, setSegApellido] = useState('');
  const [priNombre, setPriNombre] = useState('');
  const [segNombre, setSegNombre] = useState('');

  useEffect(()=>{
    setUsuario((prev)=>(
      {...prev,
      tpAcompanante: tp,
      documentoAcompanante: documento,
      priApellidoAcompanante: priApellido,
      segApellidoAcompanante: segApellido,
      priNombreAcompanante: priNombre,
      segNombreAcompanante: segNombre
    }));
  },[tp,documento,priApellido,segApellido,priNombre,segNombre,setUsuario])

  return (
    <>
      <hr className='my-8'/>

      <p className='text-center text-2xl font-[500]'>DATOS DEL ACOMPAÑANTE</p>

      <div className='flex my-2'>
        <div className='mr-2'>
          <p>TP Doc:</p>
          <select value={tp} onChange={(e)=>setTp(e.target.value)} className='border-inputs py-2 px-2 border rounded-md'>
            <TpDocumentos />
          </select>
        </div>
        <ContInputText
          name='Documento del usuario:'
          onChange={(e)=>setDocumento(e.target.value)}
          value={documento}
          placeholder='Escribre el documento'
        />
      </div>

      <div className='flex justify-between my-4'>
        <ContInputText
          name='Primer Apellido:'
          onChange={(e)=>setPriApellido(e.target.value.toUpperCase())}
          value={priApellido}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          name='Segundo Apellido:'
          onChange={(e)=>setSegApellido(e.target.value.toUpperCase())}
          value={segApellido}
          placeholder='Escribre el apellido'
        />
        <ContInputText
          name='Primer Nombre:'
          onChange={(e)=>setPriNombre(e.target.value.toUpperCase())}
          value={priNombre}
          placeholder='Escribre el nombre'
        />
        <ContInputText
          name='Segundo Nombre:'
          onChange={(e)=>setSegNombre(e.target.value.toUpperCase())}
          value={segNombre}
          placeholder='Escribre el nombre'
        />
      </div>
    </>
  );
}
 
export default DatosAcompante;