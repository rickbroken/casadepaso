import {db} from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

const finalizarEstadoRegistro = async(idDocFirebase,estadoUsuario,fechaSalida) => {
    const documento = doc(db, "Registros", idDocFirebase); 
    return await updateDoc(documento, {
      estadoUsuario: estadoUsuario,
      fechaSalida: fechaSalida
    });
}
 
export default finalizarEstadoRegistro;