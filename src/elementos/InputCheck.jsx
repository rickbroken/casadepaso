import React, { useState } from 'react';

const InputCheck = ({setAcompanante,acompanante}) => {
  const [colorActivo, setColorActivo] = useState('bg-primario')
  return (
    <>
      <div className='rounded-md border border-primario w-24 h-9 flex cursor-pointer'>
        <div className={`w-12 ${acompanante ? 'bg-primario' : 'bg-transparent'} h-[34px] rounded-s-[4px] flex justify-center items-center`}
        onClick={()=>setAcompanante(true)}
        > 
          <span className={acompanante ? 'text-white' : 'text-black'}>SI</span>
        </div>

        <div className={`w-12 ${acompanante ? 'bg-transparent' : 'bg-primario'} h-[34px] rounded-e-[4px]  flex justify-center items-center`}
          onClick={()=>setAcompanante(false)}
        > 
          <span className={acompanante ? 'text-black' : 'text-white'}>NO</span>
        </div>
      </div>
    </>
  );
}
 
export default InputCheck;