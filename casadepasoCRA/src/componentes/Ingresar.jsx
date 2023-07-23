import React, { useState, useContext, useEffect } from 'react';
import TpDocumentos from '../elementos/TpDocumentos';
import ContInputText from './ContInputText';
import MotivoAlojamiento from '../elementos/MotivoAlojamiento';
import DatosAcompante from './DatosAcompante';
import InputCheck from '../elementos/InputCheck'
import { ContextoUsuarios } from '../contextos/ContextoUsuarios';
import { uid } from 'uid';
import agregarRegistro from '../firebase/agregarRegistro';
import { format, getTime } from 'date-fns';
import { parse } from 'date-fns/esm';
import Alerta from '../elementos/Alerta';



const Ingresar = () => {
  const {usuario, setUsuario} =  useContext(ContextoUsuarios);

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [typeAlerta, setTypeAlerta] = useState('');
  const [valueAlerta, setValueAlerta] = useState('');

  const definirAlerta = (value, type) => {
    setMostrarAlerta(true);
    setValueAlerta(value);
    setTypeAlerta(type);
    setTimeout(()=>{
      setMostrarAlerta(false);
    },4000)
  }
  


  const [tp, setTp] = useState('');
  const [documento, setDocumento] = useState('');
  const [motivoAlojamiento, setMotivoAlojamiento] = useState('');

  const [fechaIngreso, setFechaIngreso] = useState('');
  const fechaIngresoUnix = getTime(parse(fechaIngreso, 'yyyy-MM-dd', new Date()));


  const [acompanante, setAcompanante] = useState(true);
  const [priApellido, setPriApellido] = useState('');
  const [segApellido, setSegApellido] = useState('');
  const [priNombre, setPriNombre] = useState('');
  const [segNombre, setSegNombre] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const [tpAcompanante, setTpAcompanante] = useState('');
  const [documentoAcompanante, setDocumentoAcompanante] = useState('');
  const [priApellidoAcompanante, setPriApellidoAcompanante] = useState('');
  const [segApellidoAcompanante, setSegApellidoAcompanante] = useState('');
  const [priNombreAcompanante, setPriNombreAcompanante] = useState('');
  const [segNombreAcompanante, setSegNombreAcompanante] = useState('');


  const limpiarFormulario = () => {
    setTp('');
    setDocumento('');
    setMotivoAlojamiento('');
    setFechaIngreso('');
    setAcompanante(true);
    setPriApellido('');
    setSegApellido('');
    setPriNombre('');
    setSegNombre('');
    setObservaciones('');
    setTpAcompanante('');
    setDocumentoAcompanante('');
    setPriApellidoAcompanante('');
    setSegApellidoAcompanante('');
    setPriNombreAcompanante('');
    setSegNombreAcompanante('');
  }

  
  useEffect(()=>{
    if(acompanante){
      setUsuario((prev)=>({
        ...prev,
        tp: tp,
        documento: documento,
        motivoAlojamiento: motivoAlojamiento,
        fechaIngreso: fechaIngresoUnix,
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
        fechaIngreso: fechaIngresoUnix,
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
    const enviarRegistro = () => {
      agregarRegistro(usuario);
      setUsuario({});
      definirAlerta('Registro ingresado correctamente','true');
      limpiarFormulario();
    }

    if(acompanante){
      if(tp !== '' && documento !== '' && motivoAlojamiento !== '' && fechaIngreso  !== '' && priApellido !== '' && priNombre !== '' && tpAcompanante !== '' && documentoAcompanante !== '' && priApellidoAcompanante !== '' && priNombreAcompanante !== '' && observaciones !== ''){
        enviarRegistro();
      } else {
        definirAlerta('Faltan campos por diligenciar', 'error');
        return;
      }
    } else {
      if(tp !== '' && documento !== '' && motivoAlojamiento !== '' && fechaIngreso  !== '' && priApellido !== '' && priNombre !== '' && observaciones !== ''){
        enviarRegistro();
      } else {
        definirAlerta('Faltan campos por diligenciar', 'error');
        return;
      }
    }
  }

  console.log(documentoAcompanante);
  return (
    <div className='bg-white text-md max-w-[949px] w-12/12 mx-auto my-6 rounded-lg'>
      {mostrarAlerta && 
        <Alerta value={valueAlerta} type={typeAlerta}/>
      }

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
          <DatosAcompante tpAcompanante={tpAcompanante}
          setTpAcompanante={setTpAcompanante}
          documentoAcompanante={documentoAcompanante}
          setDocumentoAcompanante={setDocumentoAcompanante}
          priApellidoAcompanante={priApellidoAcompanante}
          setPriApellidoAcompanante={setPriApellidoAcompanante}
          segApellidoAcompanante={segApellidoAcompanante}
          setSegApellidoAcompanante={setSegApellidoAcompanante}
          priNombreAcompanante={priNombreAcompanante}
          setPriNombreAcompanante={setPriNombreAcompanante}
          segNombreAcompanante={segNombreAcompanante}
          setSegNombreAcompanante={setSegNombreAcompanante} />
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