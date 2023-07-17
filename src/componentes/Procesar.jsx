import React, { useState } from 'react';
import FilaUsuario from './FilaUsuario';


const Procesar = () => {


  const usuarios = [
    {
      id: '22s5a15',
      tp: 'CC',
      documento: '1006690431',
      priApellido: 'AMAYA',
      segApellido: 'CHIPIAJE',
      priNombre: 'FABIAN',
      segNombre: 'ESTEBAN',
      fechaIngreso: '15/02/2023',
      fechaSalida: false,
      estadoUsuario: true
    },
    {
      id: '5a1q8e1',
      tp: 'TI',
      documento: '1554887891',
      priApellido: 'GAITAN',
      segApellido: 'ORTIZ',
      priNombre: 'NATALIA',
      segNombre: 'YULI',
      fechaIngreso: '05/06/2023',
      fechaSalida: '08/06/2023',
      estadoUsuario: false
    }
  ];


  const handleBuscar = () => {

  }

  return (
    <div className=' m-4'>
      <div className='flex items-end my-5'>
        <div className='mr-4'>
          <p>Fecha de ingreso</p>
          <input value={''} onChange={(e)=>console.log(e.target.value)} type="date" className='border-inputs h-10 py-2 px-2 border rounded-md' />
        </div>
        
        <div className='mr-4'>
          <p>Fecha de salida</p>
          <input value={''} onChange={(e)=>console.log(e.target.value)} type="date" className='border-inputs h-10 py-2 px-2 border rounded-md' />
        </div>

        <div className='mr-4'>
          <p>Estado del usuario:</p>
          <select value={''} onChange={(e)=>console.log(e.target.value)}
            className='border-inputs py-2 px-2 border rounded-md w-full'>
            <option value="">Seleccione el estado</option>
            <option value="ESTADIA">EN ESTADIA</option>
            <option value="FINALIZADO">FINALIZADO</option>
            <option value="TODOS">TODOS</option>
          </select>
        </div>

        <button 
          className='bg-primario transition h-11 duration-300 text-white py-2 px-10 rounded-md hover:bg-[#143a28]'
          onClick={handleBuscar}
          type='button'
        >
          Buscar
        </button>
      </div>

      <table className='w-full mx-auto'>
        <thead>
          <tr>
            <th>ID Registro</th>
            <th>Tp Doc</th>
            <th>Documento</th>
            <th>Pri Ap</th>
            <th>Seg Ap</th>
            <th>Pri Nom</th>
            <th>Seg Nom</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida</th>
            <th>Estado</th>
            <th>Accion</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios.map((usuario)=>(
            <FilaUsuario 
                key={usuario.id}
                id={usuario.id}
                tp={usuario.tp}
                documento={usuario.documento}
                priApellido={usuario.priApellido}
                segApellido={usuario.segApellido}
                priNombre={usuario.priNombre}
                segNombre={usuario.segNombre}
                fechaIngreso={usuario.fechaIngreso}
                fechaSalida={usuario.fechaSalida}
                estadoUsuario={usuario.estadoUsuario}
            />
            ))
          }
        </tbody>
      </table>
      
    </div>
  );
}
 
export default Procesar;