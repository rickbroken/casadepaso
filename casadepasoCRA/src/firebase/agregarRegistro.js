import { collection, addDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

const agregarRegistro = (registro) => {
  addDoc(collection(db, "Registros"),registro)
}
 
export default agregarRegistro;