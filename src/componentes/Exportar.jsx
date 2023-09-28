import React from 'react';
import useObtenerRegistrosExportar from './../hooks/useObtenerRegistrosExportar';
import { Icon } from '@iconify/react';



const Exportar = ({setMostrarProcesar}) => {
  const {registros, handleConsultar, fechaInicio, setFechaInicio, fechaFin, setFechaFin, estadoUsuario, setEstadoUsuario} = useObtenerRegistrosExportar();


  return (
    <div onClick={(e)=> e.target.id === 'fondo' && setMostrarProcesar(false)} id='fondo' className='fixed top-0 left-0 w-full h-screen bg-[#00000075] flex justify-center items-center'>
      <div className='relative w-96 bg-white rounded-md flex flex-col items-center justify-center px-6'>
        <Icon onClick={()=>setMostrarProcesar(false)} className='absolute right-2 top-1 cursor-pointer' width='30' icon="eva:close-fill" color="#095c51" />
        <h1 className='my-4 text-center font-[600]'>Exportar a CSV</h1>

        <div className='flex w-full my-4'>
          <div className='w-1/2 px-1'>
            <p>Fecha Inicio</p>
            <input value={fechaInicio} onChange={(e)=>setFechaInicio(e.target.value)} type="date" className='border-inputs w-full h-10 py-2 px-2 border rounded-md' />
          </div>
          
          <div className='w-1/2'>
            <p>Fecha Fin</p>
            <input value={fechaFin} onChange={(e)=>setFechaFin(e.target.value)} type="date" className='border-inputs w-full h-10 py-2 px-2 border rounded-md' />
          </div>
        </div>

        <div className='w-full mb-4'>
          <p>Estado del usuario:</p>
          <select value={estadoUsuario} onChange={(e)=>setEstadoUsuario(e.target.value)}
            className='border-inputs py-2 px-2 border rounded-md w-full'>
            <option value="">Seleccione el estado</option>
            <option value={'true'}>EN ESTADIA</option>
            <option value={'false'}>FINALIZADO</option>
            <option value={'false,true'}>TODOS</option>
          </select>
        </div>

        <button 
          className='bg-primario transition h-11 duration-300 my-4 text-white py-2 w-full rounded-md hover:bg-[#143a28]'
          onClick={handleConsultar}
          type='button'
        >
          Descargar
        </button>
      </div>
    </div>
  );
}
 
export default Exportar;