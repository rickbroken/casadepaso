import {useEffect, useState} from 'react';
import { db } from './../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { getTime, parse } from 'date-fns';
import convertirCSV from '../funciones/convertirCSV';
import OrdenarClavesObjetos from '../funciones/OrdenarClavesObjetos';
import cambiarClaveObejtos from '../funciones/cambiarClavesObjetos';
//import { useAuth } from '../contextos/AuthContext';



const useObtenerRegistrosExportar = () => {
    const [registros, setRegistros] = useState([]);
    const [datosListos, setDatosListos] = useState(false);
    //const {usuario} = useAuth()
    
    const [fechaInicio, setFechaInicio] = useState('');
    const fechaInicioUnix = (getTime(parse(fechaInicio, 'yyyy-MM-dd', new Date())));

    const [fechaFin, setFechaFin] = useState('');
    const fechaFinUnix = (getTime(parse(fechaFin, 'yyyy-MM-dd', new Date())));

    const [estadoUsuario, setEstadoUsuario] = useState('');

    //Convertirmos los valores strg de input opcion de Procesar.jsx a valore booleanos
    if(estadoUsuario === 'true'){
      setEstadoUsuario([true]);
    } else if(estadoUsuario === 'false') {
      setEstadoUsuario([false]);
    } else if(estadoUsuario === 'false,true'){
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
            setDatosListos(true);
          });

        return unsuscribe;
    };


    useEffect(()=>{
      if(datosListos){
      //Se renombrar de las claves de cada objeto para poder ordenar luego el objeto segun orden alfabetico
      //de la A-Z, se eleiminan claves y valores que no se necesitan para exportar la inforamcion final}
      //como tambien se combierte el arreglo de objetos resultantes a formato csv y queda descargado.
      convertirCSV(OrdenarClavesObjetos(cambiarClaveObejtos(registros)), 'Data');

      //Se restablece el valor de los datos listos para que no se descargue la informacion en cada cambio de cualquier estado
      setDatosListos(false);
    }
  },[registros])
  
    return {registros, handleConsultar, fechaInicio, setFechaInicio, fechaFin, setFechaFin, estadoUsuario, setEstadoUsuario};
}
 
export default useObtenerRegistrosExportar;