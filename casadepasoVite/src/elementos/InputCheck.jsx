import React, { useState } from 'react';

const InputCheck = ({setAcompanante,acompanante}) => {
  return (
    <>
      <div className='rounded-md border border-primario w-24 h-9 flex'>
        <div className={`w-12 ${acompanante ? 'bg-primario' : 'bg-transparent cursor-pointer'} h-[34px] rounded-s-[4px] flex justify-center items-center`}
        onClick={()=>setAcompanante(true)}
        > 
          <span className={` ${acompanante ? 'text-white' : 'text-black'} select-none`}>SI</span>
        </div>

        <div className={`w-12 ${acompanante ? 'bg-transparent cursor-pointer' : 'bg-primario'} h-[34px] rounded-e-[4px]  flex justify-center items-center`}
          onClick={()=>setAcompanante(false)}
        > 
          <span className={`${acompanante ? 'text-black' : 'text-white'} select-none`}>NO</span>
        </div>
      </div>
    </>
  );
}
 
export default InputCheck;