import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <div className='w-full h-16 bg-primario flex justify-between items-center px-6'>

      <div>
        <p className='font-[800] text-2xl text-white'>PIJAOS SALUD EPSI</p>
        <p className='text-sm'>Puerto Gaitan - Meta</p>
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

        <Link className='mx-2 px-6 py-2 transition duration-300 hover:text-[#143a28]' to={'/exportar'}>
          Exportar
        </Link>

        <button type='button' className='mx-6 ml-16 font-[200] bg-red-600 text-sm py-1 px-4 rounded-md hover:bg-red-700'>Cerrar Sesion</button>
      </div>
    </div>
  );
}
 
export default Header;