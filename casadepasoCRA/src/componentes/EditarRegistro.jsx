import React, { useEffect, useState } from 'react';
import { format, fromUnixTime, getTime, parse } from 'date-fns';
import Alerta from '../elementos/Alerta';
import TpDocumentos from '../elementos/TpDocumentos';
import ContInputText from './ContInputText';
import MotivoAlojamiento from '../elementos/MotivoAlojamiento';
import InputCheck from '../elementos/InputCheck';
import DatosAcompanteEditar from './DatosAcompanteEditar';
import { Icon } from '@iconify/react';
import { db } from '../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const EditarRegistro = ({setMostrarEditarRegistro,id, idDocFirebase, tp,documento, priApellido, segApellido, priNombre, segNombre, fechaSalida, estadoUsuario, acompanante, priApellidoAcompanante, segApellidoAcompanante, priNombreAcompanante, segNombreAcompanante, fechaIngreso, motivoAlojamiento, tpAcompanante, documentoAcompanante, observaciones}) => {
  
  const [nuevosDatos, setNuevosDatos] = useState({});


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
  

  const [Nuevotp, setNuevoTp] = useState(tp);
  const [Nuevodocumento, setNuevoDocumento] = useState(documento);
  const [NuevomotivoAlojamiento, setNuevoMotivoAlojamiento] = useState(motivoAlojamiento);

  const fechaIngresoFormateada = format(fromUnixTime(fechaIngreso) / 1000, 'yyyy-MM-dd');
  const [NuevofechaIngreso, setNuevoFechaIngreso] = useState(fechaIngresoFormateada);
  const fechaIngresoUnix = getTime(parse(NuevofechaIngreso, 'yyyy-MM-dd', new Date()));


  const [Nuevoacompanante, setNuevoAcompanante] = useState(acompanante);
  const [NuevopriApellido, setNuevoPriApellido] = useState(priApellido);
  const [NuevosegApellido, setNuevoSegApellido] = useState(segApellido);
  const [NuevopriNombre, setNuevoPriNombre] = useState(priNombre);
  const [NuevosegNombre, setNuevoSegNombre] = useState(segNombre);
  const [Nuevoobservaciones, setNuevoObservaciones] = useState(observaciones);

  const [NuevotpAcompanante, setNuevoTpAcompanante] = useState(tpAcompanante);
  const [NuevodocumentoAcompanante, setNuevoDocumentoAcompanante] = useState(documentoAcompanante);
  const [NuevopriApellidoAcompanante, setNuevoPriApellidoAcompanante] = useState(priApellidoAcompanante);
  const [NuevosegApellidoAcompanante, setNuevoSegApellidoAcompanante] = useState(segApellidoAcompanante);
  const [NuevopriNombreAcompanante, setNuevoPriNombreAcompanante] = useState(priNombreAcompanante);
  const [NuevosegNombreAcompanante, setNuevoSegNombreAcompanante] = useState(segNombreAcompanante);

  console.log(NuevosegNombreAcompanante);


  const limpiarFormulario = () => {
    setNuevoTp('');
    setNuevoDocumento('');
    setNuevoMotivoAlojamiento('');
    setNuevoFechaIngreso('');
    setNuevoAcompanante(true);
    setNuevoPriApellido('');
    setNuevoSegApellido('');
    setNuevoPriNombre('');
    setNuevoSegNombre('');
    setNuevoObservaciones('');
    setNuevoTpAcompanante('');
    setNuevoDocumentoAcompanante('');
    setNuevoPriApellidoAcompanante('');
    setNuevoSegApellidoAcompanante('');
    setNuevoPriNombreAcompanante('');
    setNuevoSegNombreAcompanante('');
  }

  const limpiarFormularioAcompanante = () => {
    setNuevoTpAcompanante('');
    setNuevoDocumentoAcompanante('');
    setNuevoPriApellidoAcompanante('');
    setNuevoSegApellidoAcompanante('');
    setNuevoPriNombreAcompanante('');
    setNuevoSegNombreAcompanante('');
  }

  
  useEffect(()=>{
    if(Nuevoacompanante){
      setNuevosDatos((prev)=>({
        ...prev,
        tp: Nuevotp,
        documento: Nuevodocumento,
        motivoAlojamiento: NuevomotivoAlojamiento,
        fechaIngreso: fechaIngresoUnix,
        acompanante: Nuevoacompanante,
        priApellido: NuevopriApellido,
        segApellido: NuevosegApellido,
        priNombre: NuevopriNombre,
        segNombre: NuevosegNombre,
        observaciones: Nuevoobservaciones,
        fechaSalida: '',
        estadoUsuario: true,
        id: id
      }));
    } else {
      limpiarFormularioAcompanante();
      setNuevosDatos(
        {
          tp: Nuevotp,
          documento: Nuevodocumento,
          motivoAlojamiento: NuevomotivoAlojamiento,
          fechaIngreso: fechaIngresoUnix,
          acompanante: Nuevoacompanante,
          priApellido: NuevopriApellido,
          segApellido: NuevosegApellido,
          priNombre: NuevopriNombre,
          segNombre: NuevosegNombre,
          observaciones: Nuevoobservaciones,
          fechaSalida: '',
          estadoUsuario: true,
          id: id
        }
      );
    }
  },[setNuevosDatos,Nuevotp,Nuevodocumento,NuevomotivoAlojamiento,Nuevoacompanante,NuevopriApellido,NuevosegApellido,NuevopriNombre,NuevosegNombre,Nuevoobservaciones]);


  const handleSubmit = () => {
    const actualizarRegistro = async() => {
      try {
        await updateDoc(doc(db, 'Registros', idDocFirebase), nuevosDatos)
      } catch (error) {
        console.log(error);
        definirAlerta('No se logro actualizar el registro, reinicie el navegador', 'error');
      }
      setNuevosDatos({});
      definirAlerta('Registro actualizado correctamente','true');
      limpiarFormulario();
      setMostrarEditarRegistro(false)
    }

    if(Nuevoacompanante){
      if(Nuevotp !== '' && Nuevodocumento !== '' && NuevomotivoAlojamiento !== '' && NuevofechaIngreso  !== '' && NuevopriApellido !== '' && NuevopriNombre !== '' && NuevotpAcompanante !== '' && NuevodocumentoAcompanante !== '' && NuevopriApellidoAcompanante !== '' && NuevopriNombreAcompanante !== '' && Nuevoobservaciones !== ''){
        actualizarRegistro();
      } else {
        definirAlerta('Faltan campos por diligenciar', 'error');
        return;
      }
    } else {
      console.log(Nuevoacompanante);
      
      if(Nuevotp !== '' && Nuevodocumento !== '' && NuevomotivoAlojamiento !== '' && NuevofechaIngreso  !== '' && NuevopriApellido !== '' && NuevopriNombre !== '' && Nuevoobservaciones !== ''){
        actualizarRegistro();
      } else {
        definirAlerta('Faltan campos por diligenciar', 'error');
        return;
      }
    }
  }


  return (
    <tr  onClick={(e)=> e.target.id === 'fondo' && setMostrarEditarRegistro(false)} id='fondo' className='fixed w-full h-screen top-0 left-0 bg-[#0000003d] flex justify-center items-center'>
      <td className='bg-white relative text-md max-w-[949px] h-[610px] w-11/12 mx-auto my-6 rounded-lg'>
      <Icon onClick={()=>setMostrarEditarRegistro(false)} className='absolute right-2 top-1' width='30' icon="eva:close-fill" color="#095c51" />
        <form className='w-10/12 mx-auto py-2'>
          <p className='text-center text-2xl font-[500]'>DATOS DEL USUARIO</p>

          <div className='flex justify-between my-1'>
            <div>
              <p>TP Doc:</p>
              <select value={Nuevotp} onChange={(e)=>setNuevoTp(e.target.value)} className='border-inputs py-2 px-2 border rounded-md h-9'>
                <TpDocumentos />
              </select>
            </div>
            <ContInputText
              claseCSS='h-9'
              name='Documento del usuario:'
              onChange={(e)=>setNuevoDocumento(e.target.value)}
              value={Nuevodocumento}
              placeholder='Escribre el documento'
            />
            <div>
              <p>Motivo del alojamiento:</p>
              <select value={NuevomotivoAlojamiento} onChange={(e)=>setNuevoMotivoAlojamiento(e.target.value)} className='border-inputs py-2 px-2 border rounded-md w-full'>
                <MotivoAlojamiento />
              </select>
            </div>
            <div>
              <p>Fecha de ingreso</p>
              <input value={NuevofechaIngreso} onChange={(e)=>setNuevoFechaIngreso(e.target.value)} type="date" className='border-inputs py-2 px-2 border rounded-md h-9' />
            </div>
            <div className='flex flex-col items-center'>
              <p>¿Acompañante?</p>
              <InputCheck 
                setAcompanante={setNuevoAcompanante}
                acompanante={Nuevoacompanante}
              />
            </div>
          </div>

          <div className='flex justify-between my-1'>
            <ContInputText
              claseCSS='h-9'
              name='Primer Apellido:'
              onChange={(e)=>setNuevoPriApellido(e.target.value.toUpperCase())}
              value={NuevopriApellido}
              placeholder='Escribre el apellido'
            />
            <ContInputText
              claseCSS='h-9'
              name='Segundo Apellido:'
              onChange={(e)=>setNuevoSegApellido(e.target.value.toUpperCase())}
              value={NuevosegApellido}
              placeholder='Escribre el apellido'
            />
            <ContInputText
              claseCSS='h-9'
              name='Primer Nombre:'
              onChange={(e)=>setNuevoPriNombre(e.target.value.toUpperCase())}
              value={NuevopriNombre}
              placeholder='Escribre el nombre'
            />
            <ContInputText
              claseCSS='h-9'
              name='Segundo Nombre:'
              onChange={(e)=>setNuevoSegNombre(e.target.value.toUpperCase())}
              value={NuevosegNombre}
              placeholder='Escribre el nombre'
            />
          </div>

          {Nuevoacompanante &&
            <DatosAcompanteEditar
            setNuevosDatos={setNuevosDatos}
            NuevotpAcompanante={NuevotpAcompanante}
            setNuevoTpAcompanante={setNuevoTpAcompanante}
            NuevodocumentoAcompanante={NuevodocumentoAcompanante}
            setNuevoDocumentoAcompanante={setNuevoDocumentoAcompanante}
            NuevopriApellidoAcompanante={NuevopriApellidoAcompanante}
            setNuevoPriApellidoAcompanante={setNuevoPriApellidoAcompanante}
            NuevosegApellidoAcompanante={NuevosegApellidoAcompanante}
            setNuevoSegApellidoAcompanante={setNuevoSegApellidoAcompanante}
            NuevopriNombreAcompanante={NuevopriNombreAcompanante}
            setNuevoPriNombreAcompanante={setNuevoPriNombreAcompanante}
            NuevosegNombreAcompanante={NuevosegNombreAcompanante}
            setNuevoSegNombreAcompanante={setNuevoSegNombreAcompanante} />
          }
          
          <div className='w-full'>
            <p className='my-1'>Observaciones:</p>
            <textarea 
              placeholder='Escriba las observaciones'
              value={Nuevoobservaciones}
              onChange={(e)=>setNuevoObservaciones(e.target.value)}
              className='border-inputs py-2 px-2 border rounded-md min-w-full max-w-full min-h-[90px] max-h-[90px] outline-none leading-normal'>
              </textarea>
          </div>

          <div className='w-full flex justify-center my-2'>
            <button 
              className='bg-primario transition duration-300 text-white px-16 rounded-md hover:bg-[#143a28]'
              onClick={handleSubmit}
              type='button'
            >
              Actualizar Registro
            </button>
          </div>

        </form>
        {mostrarAlerta && 
          <Alerta value={valueAlerta} type={typeAlerta}/>
        }
      </td>
    </tr>
  );
}
 
export default EditarRegistro;