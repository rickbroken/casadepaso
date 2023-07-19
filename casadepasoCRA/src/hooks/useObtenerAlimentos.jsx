import {useState, useEffect} from 'react';
import { db } from './../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
//import { useAuth } from '../contextos/AuthContext';



const useObtenerAlimentos = () => {
    const [alimentosUsuarios, setAlimentosUsuarios] = useState([]);
    //const {usuario} = useAuth()
    const id = '092cef0';



    useEffect(()=>{
        const consulta = query(
            collection(db, 'Alimentos'),
            where('id', '==', id)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
          setAlimentosUsuarios(snapshot.docs.map((registro)=>{
                return registro.data();
            }));
          });

        return unsuscribe;
    },[alimentosUsuarios]);


    return {alimentosUsuarios,setAlimentosUsuarios};
}
 
export default useObtenerAlimentos;