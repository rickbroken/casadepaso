import { Icon } from '@iconify/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { format, fromUnixTime } from 'date-fns';
import FilaEeditarDatoAlimento from './FilaEeditarDatoAlimento';

const FilaEditarAlimento = ({alimentos,idDocFirebase}) => {
  console.log(alimentos);

  return (
    <>
      {
        alimentos.length !== 0 &&
        alimentos.map((item) => (
          <FilaEeditarDatoAlimento
            idDocFirebase={idDocFirebase}
            fechaAlimento={format(fromUnixTime(item.fechaAlimento) / 1000, 'dd/MM/yyyy')}
            desayuno={item.desayuno}
            almuerzo={item.almuerzo}
            cena={item.cena}
            desayunoAcompanante={item.desayunoAcompanante}
            almuerzoAcompanante={item.almuerzoAcompanante}
            cenaAcompanante={item.cenaAcompanante}
          />
        ))
      }
    </>
  );
}
 
export default FilaEditarAlimento;