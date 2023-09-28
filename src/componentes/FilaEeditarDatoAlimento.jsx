import { Icon } from '@iconify/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { getTime, parse } from 'date-fns';
import { uid } from 'uid';

const FilaEeditarDatoAlimento = ({fechaAlimento,idDocFirebase,desayuno,desayunoAcompanante,almuerzo,almuerzoAcompanante,cena,cenaAcompanante}) => {
  const [editarAlimento, setEditarAlimento] = useState(false);

  const [inputDesayuno, setInputDesayuno] = useState(desayuno + desayunoAcompanante);
  const [inputAlmuerzo, setInputAlmuerzo] = useState(almuerzo + almuerzoAcompanante);
  const [inputCena, setInputCena] = useState(cena + cenaAcompanante);


  
  const [alimentosNuevos, setAlimentosNuevos] = useState({
    alimentos: [{
      desayuno: '',
      almuerzo: '',
      cena: '',
      desayunoAcompanante: '',
      almuerzoAcompanante: '',
      cenaAcompanante: ''
    }]
  });

  
  
  
  
  const definiAlimento = (nombreInput, nombreClavEstado, nombreClaveAcompananteEstado, nombrePropClaveMatrix,fechaUnix) => {
    let nombreClaveMatrix = nombrePropClaveMatrix;
    let nombreClave = nombreClavEstado;
    let nombreClaveAcompanante = nombreClaveAcompananteEstado;
    if(nombreInput === 2){
      setAlimentosNuevos((prev)=>({
        [nombreClaveMatrix]: {
          ...prev[nombreClaveMatrix],
            fechaAlimento: fechaUnix,
            [nombreClave]: 1,
            [nombreClaveAcompanante]: 1,
          }
        }
        ));
      } else if(nombreInput === 1){
        setAlimentosNuevos((prev)=>({
          [nombreClaveMatrix]: {
          ...prev[nombreClaveMatrix],
          fechaAlimento: fechaUnix,
          [nombreClave]: 1,
          [nombreClaveAcompanante]: 0,
        }
      }
       ));
      } else {
        setAlimentosNuevos((prev)=>({
          [nombreClaveMatrix]: {
          ...prev[nombreClaveMatrix],
            fechaAlimento: fechaUnix,
            [nombreClave]: 0,
            [nombreClaveAcompanante]: 0,
          }
      }
      ));
    }
  }
  const [fechaConFormato,setFechaConFormato] =useState('');
  const [fechaUnix, setFechaUnix] = useState('')

  //console.log(fechaConFormato);
  
  useEffect(()=>{
    definiAlimento(inputDesayuno,'desayuno','desayunoAcompanante',fechaConFormato,fechaUnix);
    definiAlimento(inputAlmuerzo,'almuerzo','almuerzoAcompanante',fechaConFormato,fechaUnix);
    definiAlimento(inputCena,'cena','cenaAcompanante',fechaConFormato,fechaUnix);
  },[inputDesayuno,inputAlmuerzo,inputCena]);
  

  const handleEditar = async() => {
    setEditarAlimento(false);
    try {
      await updateDoc(doc(db, 'Alimentos', idDocFirebase), alimentosNuevos)
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditarIcon = (fechaAlimento) => {
    console.log(fechaAlimento);
    console.log(getTime(parse(fechaAlimento, 'dd/MM/yyyy', new Date())));
    setFechaUnix(getTime(parse(fechaAlimento, 'dd/MM/yyyy', new Date())));
    setEditarAlimento(true);
    setFechaConFormato(fechaAlimento.replace(/\//g, ''));
  }

  

  return (
    <>
      {editarAlimento ?
        <tr key={uid(7)}>
          <td className='w-[220px]'>{fechaAlimento}</td>
          <td><input value={inputDesayuno} onChange={(e)=>setInputDesayuno(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputAlmuerzo} onChange={(e)=>setInputAlmuerzo(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputCena} onChange={(e)=>setInputCena(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td colSpan='2'><button onClick={()=>handleEditar()} className='bg-green-300 px-2 rounded-md text-green-900 hover:bg-green-400' type='button'>Guardar</button></td>
        </tr>
      :
        <tr key={uid(7)}>
          <td>{fechaAlimento}</td>
          <td>{desayuno + desayunoAcompanante}</td>
          <td>{almuerzo + almuerzoAcompanante}</td>
          <td>{cena + cenaAcompanante}</td>
          <td>{desayuno + desayunoAcompanante + almuerzo + almuerzoAcompanante + cena + cenaAcompanante}</td>
          <td><Icon onClick={()=>handleEditarIcon(fechaAlimento)} icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
        </tr>
      }
    </>
  );
}
 
export default FilaEeditarDatoAlimento;