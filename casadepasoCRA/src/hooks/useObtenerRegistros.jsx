import {useState, useEffect} from 'react';
import { db } from './../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
//import { useAuth } from '../contextos/AuthContext';



const useObtenerRegistros = () => {
    const [registros, setRegistros] = useState([]);
    //const {usuario} = useAuth()



    const handleConsultar = () => {
        const consulta = query(
            collection(db, 'Registros'),
            //where('uidUsuario', '==', usuario.uid),
            orderBy('fechaIngreso', 'desc')
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            setRegistros(snapshot.docs.map((registro)=>{
                return {...registro.data(), idDocFirebase: registro.id}
            }));
          });

        return unsuscribe;
    };


    return {registros,handleConsultar};
}
 
export default useObtenerRegistros;