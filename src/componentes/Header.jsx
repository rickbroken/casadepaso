import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Exportar from './Exportar';

const Header = () => {
  const [mostrarProcesar,setMostrarProcesar] = useState(false);


  return ( 
    <div className='w-full h-16 bg-primario flex justify-between items-center px-6'>

      <div>
        <p className='font-[800] text-2xl text-white'>HOSPEDAJE DE PASO</p>
        <p className='text-sm'>Organizacion - Sin animo de lucro</p>
      </div>

      <div className='text-white'>
        <Link className='mx-2 px-6 py-2 transition duration-300 hover:text-[#143a28]' to={'/'}>
          Ingresar
        </Link>

        <span className='font-[100] select-none text-[#030e0b]'>|</span>

        <Link className='mx-2 px-6 py-2 transition duration-300 hover:text-[#143a28]' to={'/procesar'}>
          Procesar
        </Link>

        <span className='font-[100] select-none text-[#030e0b]'>|</span>

        <span
          className='mx-2 px-6 py-2 transition duration-300 cursor-pointer hover:text-[#143a28]'
          onClick={()=>setMostrarProcesar(true)}
        >
          Exportar
        </span>

        <button type='button' className='mx-6 ml-16 font-[200] bg-red-600 text-sm py-1 px-4 rounded-md hover:bg-red-700'>Cerrar Sesion</button>
      </div>
      
      {mostrarProcesar &&
        <Exportar setMostrarProcesar={setMostrarProcesar}/>
      }
    </div>
  );
}
 
export default Header;