import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { format, getDate, getMonth, getTime, getYear, parse } from 'date-fns';
import agregarAlimentos from './../firebase/agregarAlimentos';
import Alerta from '../elementos/Alerta';
import finalizarEstadoRegistro from '../firebase/finalizarEstadoRegistro';
import useObtenerAlimentos from '../hooks/useObtenerAlimentos';
import FilaAlimentos from './FilaAlimentos';
import { uid } from 'uid';



const AccionAgregar = ({setMostrarAccionAgregar,id,idDocFirebase,fechaIngreso,priApellido,segApellido,priNombre,segNombre,estadoUsuario,acompanante,priApellidoAcompanante,segApellidoAcompanante,priNombreAcompanante,segNombreAcompanante}) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [typeAlerta, setTypeAlerta] = useState('');
  const [valueAlerta, setValueAlerta] = useState('');


  const [alimentos, setAlimentos] = useState([]);

  const [fechaIngresarAlimento, setFechaIngresarAlimento] = useState('');
  const fechaUnixIngresoAliemto = getTime(parse(fechaIngresarAlimento, 'yyyy-MM-dd', new Date()));
  
  
  const [desayuno, setDesayuno] = useState(0);
  const [almuerzo, setAlmuerzo] = useState(0);
  const [cena, setCena] = useState(0);
  
  const [desayunoAcompanante, setDesayunoAcompanante] = useState(0);
  const [almuerzoAcompanante, setAlmuerzoAcompanante] = useState(0);
  const [cenaAcompanante, setCenaAcompanante] = useState(0);
  
  const {alimentosUsuarios, handleBuscarAlimentos, setIdRegistro,idRegistro} = useObtenerAlimentos();

  const definirAlerta = (value, type) => {
    setMostrarAlerta(true);
    setValueAlerta(value);
    setTypeAlerta(type);
    setTimeout(()=>{
      setMostrarAlerta(false);
    },4000)
  }

  const limpiarCheckeds = () => {
    setDesayuno(0);
    setAlmuerzo(0);
    setCena(0);
    setDesayunoAcompanante(0);
    setAlmuerzoAcompanante(0);
    setCenaAcompanante(0);
    setFechaIngresarAlimento('');
  }

  const diaMesInput = getDate(parse(fechaIngresarAlimento, 'yyyy-MM-dd', new Date()));
  const mesAnioInput = getMonth(parse(fechaIngresarAlimento, 'yyyy-MM-dd', new Date())) + 1;
  const AnioInput = getYear(parse(fechaIngresarAlimento, 'yyyy-MM-dd', new Date()));

  const claveFechaAlimento = `${diaMesInput > 9 ? diaMesInput : '0'+diaMesInput}${mesAnioInput > 9 ? mesAnioInput : '0'+mesAnioInput}${AnioInput}`;


  useEffect(()=>{
    setIdRegistro(id);
    if(alimentosUsuarios.length !== 0){
      alimentosUsuarios.map((alimentoUsuario)=>{
        setAlimentos({
          idDocFirebase: alimentoUsuario.idDocFirebase,
          [claveFechaAlimento]: {
            fechaAlimento: fechaUnixIngresoAliemto,
            desayuno: desayuno,
            almuerzo: almuerzo,
            cena: cena,
            desayunoAcompanante: desayunoAcompanante,
            almuerzoAcompanante: almuerzoAcompanante,
            cenaAcompanante: cenaAcompanante
          }
        });
      })
    }
  },[alimentosUsuarios,desayuno,almuerzo,cena,desayunoAcompanante,almuerzoAcompanante,cenaAcompanante,acompanante,id,fechaIngresarAlimento,setFechaIngresarAlimento])


  const [fechaSalida, setFechaSalida] = useState('');
  const fechaUnixSalida = getTime(parse(fechaSalida, 'yyyy-MM-dd', new Date()));

  const handleFinalizarEstadia = () => {
    if(fechaSalida === '' || fechaSalida === null || fechaSalida === undefined){
      definirAlerta('Ingrese una fecha de salida valida', 'error');
      return;
    } else {
      if(fechaIngreso > fechaUnixSalida) {
        definirAlerta('La de salida no puede ser menor a la fecha que el usuario ingreso','error')
        return;
      }
      //tenemos que actualizar el doc en firebase con el estado de usuario finalizado
      finalizarEstadoRegistro(idDocFirebase,false,fechaUnixSalida);
      setMostrarAccionAgregar(false);
    }
  }

  const handleAgregarAlimentos = () => {
    if(fechaIngresarAlimento === '' || fechaIngresarAlimento === null || fechaIngresarAlimento === undefined){
      definirAlerta('Ingresa una fecha valida de suministro de alimento', 'error');
      return;
    } else {
      if(fechaIngreso > fechaUnixIngresoAliemto){
        definirAlerta('La fecha que ingresaste, es menor a la fecha de ingreso del usuario','error')
        return;
      }
  
      if(alimentosUsuarios.length === 0){
        agregarAlimentos(alimentos, alimentos.idDocFirebase);
    
          definirAlerta('Alimentos Agregados', 'true');
    
          limpiarCheckeds();
          return;
      }
  
      let fechaRepetida = false;
      alimentosUsuarios.map((alimento)=>{
        if(alimento.fechaAlimento === fechaUnixIngresoAliemto){
          definirAlerta('Ya ingresaste alimentos para la fecha que proporsionaste', 'error');
          fechaRepetida = true;
          return;
        }
      });
  
      //Si hay una fecha repetida en la lista de alimentos entonces detendra la ejecucion de la funcion padre
      if(fechaRepetida){
        return;
      }

      try {
        //llamamos funcion para agregar alimentos a firebase cloud
        agregarAlimentos(alimentos, alimentos.idDocFirebase);
  
  
        definirAlerta('Alimentos Agregados', 'true');
  
        limpiarCheckeds();
      } catch (error) {
        definirAlerta('No se agregaron alimentos, Reinicie el navegador', 'error');
      }
    }
  }

  useEffect(()=>{
    if(idRegistro){
      handleBuscarAlimentos();
    }
  },[idRegistro])


  //A pesar que no es una fila de la tabla, se agrega como fila y se estiliza para mostrar card de agregar para que la estructura de html de table no quede con error
  return (
    <tr onClick={(e)=> e.target.id === 'fondo' && setMostrarAccionAgregar(false)} id='fondo' className='fixed w-full h-screen top-0 left-0 bg-[#0000003d] flex justify-center items-center'>

      <td className='relative w-8/12 bg-white rounded-xl h-5/6 flex flex-col items-start'>
          <Icon onClick={()=>setMostrarAccionAgregar(false)} className='absolute right-2 top-1' width='30' icon="eva:close-fill" color="#095c51" />
        
        {!estadoUsuario && <><h1 className='font-[400] text-lg my-2 mx-4'>Detalles de alimentos sumisnitrados</h1></>}
        {estadoUsuario &&
          <>
          <div className='mr-4 mx-4'>
            <p className='font-[600]'>Fecha suministro de alimento:</p>
            <input value={fechaIngresarAlimento} onChange={(e)=>setFechaIngresarAlimento(e.target.value)} type="date" className='border-inputs h-10 py-2 px-2 border rounded-md' />
          </div>
          <div className='px-6 py-2 w-full flex flex-col items-start'>
            <p>Agregar alimentos a usuario: <span className='font-[400]'>{`${priApellido} ${segApellido} ${priNombre} ${segNombre}`}</span></p>

            <div className='w-8/12 flex justify-between mx-auto'>
              <div className='flex cursor-pointer' onClick={()=>desayuno === 0 ? setDesayuno(1) : setDesayuno(0)}>
                <Icon width='18' icon={`material-symbols:check-box-outline${desayuno === 0 ? '-blank' : ''}`} color="#095c51" />
                <span className='mx-1 select-none'>Desayuno</span>
              </div>

              <div className='flex cursor-pointer' onClick={()=>almuerzo === 0 ? setAlmuerzo(1) : setAlmuerzo(0)}>
                <Icon width='18' icon={`material-symbols:check-box-outline${almuerzo === 0 ? '-blank' : ''}`} color="#095c51" />
                <span className='mx-1 select-none'>Almuerzo</span>
              </div>

              <div className='flex cursor-pointer' onClick={()=>cena === 0 ? setCena(1) : setCena(0)}>
                <Icon width='18' icon={`material-symbols:check-box-outline${cena === 0 ? '-blank' : ''}`} color="#095c51" />
                <span className='mx-1 select-none'>Cena</span>
              </div>
            </div>
          </div>

          {acompanante &&
            <div className='px-6 py-2 w-full flex flex-col items-start'>
              <p>Agregar alimentos a acompañante: <span className='font-[400]'>{`${priApellidoAcompanante} ${segApellidoAcompanante} ${priNombreAcompanante} ${segNombreAcompanante}`}</span></p>

              <div className='w-8/12 flex justify-between mx-auto'>
                <div className='flex cursor-pointer' onClick={()=>desayunoAcompanante === 0 ? setDesayunoAcompanante(1) : setDesayunoAcompanante(0)}>
                  <Icon width='18' icon={`material-symbols:check-box-outline${desayunoAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
                  <span className='mx-1 select-none'>Desayuno</span>
                </div>

                <div className='flex cursor-pointer' onClick={()=>almuerzoAcompanante === 0 ? setAlmuerzoAcompanante(1) : setAlmuerzoAcompanante(0)}>
                  <Icon width='18' icon={`material-symbols:check-box-outline${almuerzoAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
                  <span className='mx-1 select-none'>Almuerzo</span>
                </div>

                <div className='flex cursor-pointer' onClick={()=>cenaAcompanante === 0 ? setCenaAcompanante(1) : setCenaAcompanante(0)}>
                  <Icon width='18' icon={`material-symbols:check-box-outline${cenaAcompanante === 0 ? '-blank' : ''}`} color="#095c51" />
                  <span className='mx-1 select-none'>Cena</span>
                </div>
              </div>
            </div>}

            <div className='w-full'>
              <button onClick={handleAgregarAlimentos} className='rounded-md px-12 mx-2 bg-[#1d61ad] hover:bg-[#143f70] text-white'>Agregar Alimentos</button>
            </div>
          </>
        }

        
        <hr className='my-4'/>

        <div className='w-11/12 mx-auto h-96 overflow-x-hidden overflow-scroll'>
          <table className='w-full mx-auto'>
            <thead>
              <tr>
                <th>Fecha Alimento</th>
                <th>Desayuno</th>
                <th>Almuerzo</th>
                <th>Cena</th>
                <th>Total</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {alimentosUsuarios.length !== 0 &&
                alimentosUsuarios.map((alimento)=>(
                  <FilaAlimentos 
                    key={uid(7)}
                    alimentos={alimento}
                  />
                ))
                }
            </tbody>
          </table>
        </div>

        <hr className='my-4 w-full mx-auto'/>

        {estadoUsuario &&
          <div className='flex items-center justify-center w-full py-4'>
            <div className=' flex mr-4 mx-4'>
              <p className='font-[600] mx-2'>Fecha de salida:</p>
              <input value={fechaSalida} onChange={(e)=>setFechaSalida(e.target.value)} type="date" 
               className='border-inputs px-2 h-9 border rounded-md' />
            </div>
            <div className=''>
              <button onClick={()=>handleFinalizarEstadia()} className='rounded-md px-12 bg-red-500 hover:bg-red-700 text-white'>Finalizar Estadia</button>
            </div>
          </div>
        }

        {mostrarAlerta &&
          <Alerta type={typeAlerta} value={valueAlerta}/>
        }

      </td>

    </tr>
  );
}
 
export default AccionAgregar;