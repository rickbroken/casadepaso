import { useState } from 'react';
import { db } from './../firebase/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
//import { useAuth } from '../contextos/AuthContext';



const useObtenerAlimentos = () => {
    const [alimentosUsuarios, setAlimentosUsuarios] = useState([]);
    //const {usuario} = useAuth()
    const [idRegistro, setIdRegistro] = useState('');

    const handleBuscarAlimentos = ()=>{
      const consulta = query(
        collection(db, 'Alimentos'),
        where('id', '==', idRegistro)
        );
        
        const unsuscribe = onSnapshot(consulta, (snapshot) => {
          setAlimentosUsuarios(snapshot.docs.map((registro)=>{
            return {...registro.data(), idDocFirebase: registro.id};
          }));
        });
        
        return unsuscribe;
      };

    return {alimentosUsuarios,handleBuscarAlimentos,setIdRegistro,idRegistro};
}
 
export default useObtenerAlimentos;