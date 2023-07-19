import { collection, addDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

const agregarAlimentos = (alimentos) => {
  addDoc(collection(db, "Alimentos"),alimentos)
}
 
export default agregarAlimentos;