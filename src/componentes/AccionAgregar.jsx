import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';



const AccionAgregar = ({setMostrarAccionAgregar,id,priApellido,segApellido,priNombre,segNombre,fechaIngreso,estadoUsuario}) => {

  const [desayuno, setDesayuno] = useState(0);
  const [almuerzo, setAlmuerzo] = useState(0);
  const [cena, setCena] = useState(0);

  const [desayunoAcompanante, setDesayunoAcompanante] = useState(0);
  const [almuerzoAcompanante, setAlmuerzoAcompanante] = useState(0);
  const [cenaAcompanante, setCenaAcompanante] = useState(0);



  console.log(almuerzoAcompanante);

  const handleFinalizarEstadia = () => {
    //tenemos que actualizar el doc en firebase con el estado de usuario finalizado
  }

  //A pesar que no es una fila de la tabla, se agrega como fila y se estiliza para mostrar card de agregar para que la estructura de html de table no quede con error
  return (
    <tr onClick={(e)=> e.target.id === 'fondo' && setMostrarAccionAgregar(false)} id='fondo' className='fixed w-full h-screen top-0 left-0 bg-[#0000003d] flex justify-center items-center'>

      <td className='relative w-8/12 bg-white rounded-xl h-5/6 flex flex-col'>
        <Icon onClick={()=>setMostrarAccionAgregar(false)} className='absolute right-2 top-1' width='30' icon="eva:close-fill" color="#095c51" />

        <div className='px-4 py-2 w-full flex flex-col items-start'>
          <p>Agregar alimentos a usuario: <span className='font-[400]'>{`${priApellido} ${segApellido} ${priNombre} ${segNombre}`}</span></p>

          <div className='w-8/12 flex justify-between mx-auto'>
            <div className='flex cursor-pointer' onClick={()=>desayuno === 0 ? setDesayuno(1) : setDesayuno(0)}>
              <Icon icon={`material-symbols:check-box-outline${desayuno === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Desayuno</span>
            </div>

            <div className='flex cursor-pointer' onClick={()=>almuerzo === 0 ? setAlmuerzo(1) : setAlmuerzo(0)}>
              <Icon icon={`material-symbols:check-box-outline${almuerzo === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Almuerzo</span>
            </div>

            <div className='flex cursor-pointer' onClick={()=>cena === 0 ? setCena(1) : setCena(0)}>
              <Icon icon={`material-symbols:check-box-outline${cena === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Cena</span>
            </div>
          </div>
        </div>

        <div className='px-4 py-2 w-full flex flex-col items-start'>
          <p>Agregar alimentos a acompañante: <span className='font-[400]'>{`${priApellido} ${segApellido} ${priNombre} ${segNombre}`}</span></p>

          <div className='w-8/12 flex justify-between mx-auto'>
            <div className='flex cursor-pointer' onClick={()=>desayunoAcompanante === 0 ? setDesayunoAcompanante(1) : setDesayunoAcompanante(0)}>
              <Icon icon={`material-symbols:check-box-outline${desayunoAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Desayuno</span>
            </div>

            <div className='flex cursor-pointer' onClick={()=>almuerzoAcompanante === 0 ? setAlmuerzoAcompanante(1) : setAlmuerzoAcompanante(0)}>
              <Icon icon={`material-symbols:check-box-outline${almuerzoAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Almuerzo</span>
            </div>

            <div className='flex cursor-pointer' onClick={()=>cenaAcompanante === 0 ? setCenaAcompanante(1) : setCenaAcompanante(0)}>
              <Icon icon={`material-symbols:check-box-outline${cenaAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
              <span className='mx-1 select-none'>Cena</span>
            </div>
          </div>
        </div>

      <button onClick={handleFinalizarEstadia}>Finalizar Estadia</button>
      </td>

    </tr>
  );
}
 
export default AccionAgregar;