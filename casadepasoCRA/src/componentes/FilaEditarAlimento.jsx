import { Icon } from '@iconify/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const FilaEditarAlimento = ({alimentos,fechaFormateada,idDocFirebase}) => {
  const [editarAlimento, setEditarAlimento] = useState(false);

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




  const [inputDesayuno, setInputDesayuno] = useState(alimentos[0].desayuno + alimentos[0].desayunoAcompanante);
  const [inputAlmuerzo, setInputAlmuerzo] = useState(alimentos[0].almuerzo + alimentos[0].almuerzoAcompanante);
  const [inputCena, setInputCena] = useState(alimentos[0].cena + alimentos[0].cenaAcompanante);


  const definiAlimento = (nombreInput, nombreClavEstado, nombreClaveAcompananteEstado) => {
    let nombreClave = nombreClavEstado;
    let nombreClaveAcompanante = nombreClaveAcompananteEstado;
    if(nombreInput === 2){
      setAlimentosNuevos((prev)=>({
          alimentos: [{
            ...prev.alimentos[0],
            [nombreClave]: 1,
            [nombreClaveAcompanante]: 1,
          }]
        }
      ));
    } else if(nombreInput === 1){
      setAlimentosNuevos((prev)=>({
        alimentos: [{
          ...prev.alimentos[0],
          [nombreClave]: 1,
          [nombreClaveAcompanante]: 0,
        }]
        }
       ));
    } else {
      setAlimentosNuevos((prev)=>({
        alimentos: [{
          ...prev.alimentos[0],
          [nombreClave]: 0,
          [nombreClaveAcompanante]: 0,
        }]
      }
      ));
    }
  }

  useEffect(()=>{
    definiAlimento(inputDesayuno,'desayuno','desayunoAcompanante');
    definiAlimento(inputAlmuerzo,'almuerzo','almuerzoAcompanante');
    definiAlimento(inputCena,'cena','cenaAcompanante');
  },[inputDesayuno,inputAlmuerzo,inputCena]);

  
  const handleEditar = async() => {
    console.log(alimentosNuevos);
    setEditarAlimento(false);
    try {
      await updateDoc(doc(db, 'Alimentos', idDocFirebase), alimentosNuevos)
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <>
      {editarAlimento ?
        <tr>
          <td className='w-[220px]'>{fechaFormateada}</td>
          <td><input value={inputDesayuno} onChange={(e)=>setInputDesayuno(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputAlmuerzo} onChange={(e)=>setInputAlmuerzo(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputCena} onChange={(e)=>setInputCena(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 h-[35px] rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td colSpan='2'><button onClick={()=>handleEditar()} className='bg-green-300 px-2 rounded-md text-green-900 hover:bg-green-400' type='button'>Guardar</button></td>
        </tr>
      :
        alimentos.length !== 0 &&
        alimentos.map((alimento)=>(
          <tr>
            <td className='w-[220px]'>{fechaFormateada}</td>
            <td>{alimento.desayuno + alimento.desayunoAcompanante}</td>
            <td>{alimento.almuerzo + alimento.almuerzoAcompanante}</td>
            <td>{alimento.cena + alimento.cenaAcompanante}</td>
            <td>{alimento.desayuno + alimento.desayunoAcompanante + alimento.almuerzo + alimento.almuerzoAcompanante +alimento.cena + alimento.cenaAcompanante}</td>
            <td><Icon onClick={()=>setEditarAlimento(true)} icon="clarity:note-edit-line" color="#095c51" width='25'/></td>
          </tr>
        ))
      }
    </>
  );
}
 
export default FilaEditarAlimento;