import React from 'react';
import ContInputText from './ContInputText';
import TpDocumentos from '../elementos/TpDocumentos';

const DatosAcompante = () => {
  return (
    <>
      <hr className='my-8'/>

      <p className='text-center text-2xl font-[500]'>DATOS DEL ACOMPAÑANTE</p>

      <div className='flex my-2'>
        <div className='mr-6'>
          <p>TP Doc:</p>
          <select className='border-inputs py-2 px-2 border-2 rounded-md'>
            <TpDocumentos />
          </select>
        </div>
        <ContInputText
          name='Documento del usuario:'
          onChange={(e)=>console.log(e.target.value)}
          value=''
          placeholder='Escribre el documento'
        />
      </div>

      <div className='flex justify-between my-4'>
        <ContInputText
          name='Primer Apellido:'
          onChange={(e)=>console.log(e.target.value)}
          value=''
          placeholder='Escribre el apellido'
        />
        <ContInputText
          name='Segundo Apellido:'
          onChange={(e)=>console.log(e.target.value)}
          value=''
          placeholder='Escribre el apellido'
        />
        <ContInputText
          name='Primer Nombre:'
          onChange={(e)=>console.log(e.target.value)}
          value=''
          placeholder='Escribre el nombre'
        />
        <ContInputText
          name='Segundo Nombre:'
          onChange={(e)=>console.log(e.target.value)}
          value=''
          placeholder='Escribre el nombre'
        />
      </div>
    </>
  );
}
 
export default DatosAcompante;