import React, { useState } from 'react';
import TpDocumentos from '../elementos/TpDocumentos';
import ContInputText from './ContInputText';
import MotivoAlojamiento from '../elementos/MotivoAlojamiento';
import DatosAcompante from './DatosAcompante';
import InputCheck from '../elementos/InputCheck'

const Ingresar = () => {
  const [acompanante, setAcompanante] = useState(true);

  return (
    <div className='bg-white text-md w-[70%] mx-auto my-6 rounded-lg'>
      <form className='w-11/12 mx-auto py-5'>
        <p className='text-center text-2xl font-[500]'>DATOS DEL USUARIO</p>

        <div className='flex justify-between my-4'>
          <div>
            <p>TP Doc:</p>
            <select className='border-inputs py-2 px-2 border rounded-md'>
              <TpDocumentos />
            </select>
          </div>
          <ContInputText
            name='Documento del usuario:'
            onChange={(e)=>console.log(e.target.value)}
            value=''
            placeholder='Escribre el documento'
          />
          <div>
            <p>Motivo del alojamiento:</p>
            <select className='border-inputs py-2 px-2 border rounded-md w-full'>
              <MotivoAlojamiento />
            </select>
          </div>
          <div>
            <p>Fecha de ingreso</p>
            <input type="date" className='border-inputs py-2 px-2 border rounded-md' />
          </div>
          <div className='flex flex-col items-center'>
            <p>¿Requiere Acompañante?</p>
            <InputCheck 
              setAcompanante={setAcompanante}
              acompanante={acompanante}
            />
          </div>
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

        {acompanante &&
          <DatosAcompante />
        }
        
        <div className='w-full'>
          <p className='my-1'>Observaciones:</p>
          <textarea 
            placeholder='Escriba las observaciones' 
            className='border-inputs py-2 px-2 border rounded-md min-w-full max-w-full min-h-[120px] max-h-[200px]'>

          </textarea>
        </div>

        <div className='w-full flex justify-center my-2'>
          <button 
            className='bg-primario transition duration-300 text-white py-2 px-16 rounded-md hover:bg-[#143a28]'
          >
            Agregar Registro
          </button>
        </div>

      </form>
    </div>
  );
}
 
export default Ingresar;