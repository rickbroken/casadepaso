import {useState, useEffect} from 'react';
import { db } from './../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { getTime, parse } from 'date-fns';
//import { useAuth } from '../contextos/AuthContext';



const useObtenerRegistros = () => {
    const [registros, setRegistros] = useState([]);
    //const {usuario} = useAuth()
    
    const [fechaInicio, setFechaInicio] = useState('');
    const fechaInicioUnix = (getTime(parse(fechaInicio, 'yyyy-MM-dd', new Date())));

    const [fechaFin, setFechaFin] = useState('');
    const fechaFinUnix = (getTime(parse(fechaFin, 'yyyy-MM-dd', new Date())));

    const [estadoUsuario, setEstadoUsuario] = useState([]);

    //Convertirmos los valores strg de input opcion de Procesar.jsx a valore booleanos
    if(estadoUsuario === 'true'){
      setEstadoUsuario([true]);
    } else if(estadoUsuario === 'false') {
      setEstadoUsuario([false]);
    } else if(estadoUsuario === 'false, true'){
      setEstadoUsuario([false, true]);
    }

    const handleConsultar = () => {
        const consulta = query(
            collection(db, 'Registros'),
            //where('uidUsuario', '==', usuario.uid),
            where('estadoUsuario', 'in' , estadoUsuario),
            where('fechaIngreso', '>=' , fechaInicioUnix),
            where('fechaIngreso', '<=' , fechaFinUnix),
            orderBy('fechaIngreso', 'desc')
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            setRegistros(snapshot.docs.map((registro)=>{
                return {...registro.data(), idDocFirebase: registro.id}
            }));
          });

        return unsuscribe;
    };


    return {registros, handleConsultar, fechaInicio, setFechaInicio, fechaFin, setFechaFin, estadoUsuario, setEstadoUsuario};
}
 
export default useObtenerRegistros;