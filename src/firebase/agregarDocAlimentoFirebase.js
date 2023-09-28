import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { db } from './firebaseConfig';

const agregarDocAlimentoFirebase = async (idRegistro) => {
  const consulta = query(
    collection(db, 'Alimentos'),
    where('id', '==', idRegistro)
  );

  const snapshot = await getDocs(consulta);
  const alimentos = snapshot.docs.map((registro) => { return { ...registro.data(), idDocfirebase: registro.id }; });

  if (alimentos.length !== 0) {
    alimentos.map((alimento) => {
      if (alimento.id !== idRegistro) {
        addDoc(collection(db, "Alimentos"), { id: idRegistro })
        console.log('no hay registros con ese id');
      }
    })
  } else {
    addDoc(collection(db, "Alimentos"), { id: idRegistro })
  }
}

export default agregarDocAlimentoFirebase;