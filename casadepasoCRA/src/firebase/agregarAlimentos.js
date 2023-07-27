import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

const agregarAlimentos = (nuevosDatos,idDocFirebase) => {
  updateDoc(doc(db, 'Alimentos', idDocFirebase), nuevosDatos)
}
 
export default agregarAlimentos;