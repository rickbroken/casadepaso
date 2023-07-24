import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const FilaEditarAlimento = ({alimentos,fechaFormateada, id}) => {
  const [editarAlimento, setEditarAlimento] = useState(false);

  const [alimentosNuevos, setAlimentosNuevos] = useState({});

  const [nuevoDesayuno, setNuevoDesayuno] = useState('');
  const [nuevoAlmuerzo, setNuevoAlmuerzo] = useState('');
  const [nuevoCena, setNuevoCena] = useState('');

  const [nuevoDesayunoAcompanante, setNuevoDesayunoAcompanante] = useState('');
  const [nuevoAlmuerzoAcompanante, setNuevoAlmuerzoAcompanante] = useState('');
  const [nuevoCenaAcompanante, setNuevoCenaAcompanante] = useState('');



  useEffect(()=>{
    setAlimentosNuevos({
      alimentos: [{
        desayuno: nuevoDesayuno,
        almuerzo: nuevoAlmuerzo,
        cena: nuevoCena,
        desayunoAcompanante: nuevoDesayunoAcompanante,
        almuerzoAcompanante: nuevoAlmuerzoAcompanante,
        cenaAcompanante: nuevoCenaAcompanante
      }]
    })
  },[nuevoDesayuno,nuevoAlmuerzo,nuevoCena,nuevoDesayunoAcompanante,nuevoAlmuerzoAcompanante,nuevoCenaAcompanante])
  
  
  
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

  
  const handleEditar = () => {
    console.log(alimentosNuevos);
    setEditarAlimento(false);
  } 

  return (
    <>
      {editarAlimento ?
        <tr>
          <td className='w-[220px]'>{fechaFormateada}</td>
          <td><input value={inputDesayuno} onChange={(e)=>setInputDesayuno(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputAlmuerzo} onChange={(e)=>setInputAlmuerzo(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
          <td><input value={inputCena} onChange={(e)=>setInputCena(Number(e.target.value) > 2 ? 2 : Number(e.target.value))} className='border border-emerald-600 rounded-md text-center w-[40px]' min='0' max='2' type="number"/></td>
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