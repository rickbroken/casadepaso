import React, { useState, useContext, useEffect } from 'react';
import TpDocumentos from '../elementos/TpDocumentos';
import ContInputText from './ContInputText';
import MotivoAlojamiento from '../elementos/MotivoAlojamiento';
import DatosAcompante from './DatosAcompante';
import InputCheck from '../elementos/InputCheck'
import { ContextoUsuarios } from '../contextos/ContextoUsuarios';
import { uid } from 'uid';
import agregarRegistro from '../firebase/agregarRegistro';
import { getTime } from 'date-fns';



const Ingresar = () => {
  const {usuario, setUsuario} =  useContext(ContextoUsuarios);
  
  const [tp, setTp] = useState('');
  const [documento, setDocumento] = useState('');
  const [motivoAlojamiento, setMotivoAlojamiento] = useState('');

  const fechaHoy = getTime(new Date());
  const [fechaIngreso, setFechaIngreso] = useState(fechaHoy);

  const [acompanante, setAcompanante] = useState(true);
  const [priApellido, setPriApellido] = useState('');
  const [segApellido, setSegApellido] = useState('');
  const [priNombre, setPriNombre] = useState('');
  const [segNombre, setSegNombre] = useState('');
  const [observaciones, setObservaciones] = useState('');

  
  useEffect(()=>{
    if(acompanante){
      setUsuario((prev)=>({
        ...prev,
        tp: tp,
        documento: documento,
        motivoAlojamiento: motivoAlojamiento,
        fechaIngreso: fechaIngreso,
        acompanante: acompanante,
        priApellido: priApellido,
        segApellido: segApellido,
        priNombre: priNombre,
        segNombre: segNombre,
        observaciones: observaciones,
        fechaSalida: '',
        estadoUsuario: true,
        id: uid(7)
      }));
    } else {
      setUsuario(
        {
        tp: tp,
        documento: documento,
        motivoAlojamiento: motivoAlojamiento,
        fechaIngreso: fechaIngreso,
        acompanante: acompanante,
        priApellido: priApellido,
        segApellido: segApellido,
        priNombre: priNombre,
        segNombre: segNombre,
        observaciones: observaciones,
        fechaSalida: '',
        estadoUsuario: true,
        id: uid(7)
      }
    );
    }
  },[setUsuario,tp,documento,motivoAlojamiento,fechaIngreso,acompanante,priApellido,segApellido,priNombre,segNombre,observaciones])
  
  const handleSubmit = () => {
    agregarRegistro(usuario);
    console.log(usuario);
    setUsuario({});
  }

  return (
    <div className='bg-white text-md max-w-[949px] w-12/12 mx-auto my-6 rounded-lg'>
      <form className='w-11/12 mx-auto py-5'>
        <p className='text-center text-2xl font-[500]'>DATOS DEL USUARIO</p>

        <div className='flex justify-between my-4'>
          <div>
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
          <div>
            <p>Motivo del alojamiento:</p>
            <select value={motivoAlojamiento} onChange={(e)=>setMotivoAlojamiento(e.target.value)} className='border-inputs py-2 px-2 border rounded-md w-full'>
              <MotivoAlojamiento />
            </select>
          </div>
          <div>
            <p>Fecha de ingreso</p>
            <input value={fechaIngreso} onChange={(e)=>setFechaIngreso(e.target.value)} type="date" className='border-inputs py-2 px-2 border rounded-md' />
          </div>
          <div className='flex flex-col items-center'>
            <p>¿Acompañante?</p>
            <InputCheck 
              setAcompanante={setAcompanante}
              acompanante={acompanante}
            />
          </div>
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

        {acompanante &&
          <DatosAcompante />
        }
        
        <div className='w-full'>
          <p className='my-1'>Observaciones:</p>
          <textarea 
            placeholder='Escriba las observaciones'
            value={observaciones}
            onChange={(e)=>setObservaciones(e.target.value)}
            className='border-inputs py-2 px-2 border rounded-md min-w-full max-w-full min-h-[120px] max-h-[200px] outline-none'>
            </textarea>
        </div>

        <div className='w-full flex justify-center my-2'>
          <button 
            className='bg-primario transition duration-300 text-white py-2 px-16 rounded-md hover:bg-[#143a28]'
            onClick={handleSubmit}
            type='button'
          >
            Agregar Registro
          </button>
        </div>

      </form>
    </div>
  );
}
 
export default Ingresar;