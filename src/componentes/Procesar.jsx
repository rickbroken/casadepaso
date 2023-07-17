import React, {useContext} from 'react';
import { ContextoUsuarios } from '../contextos/ContextoUsuarios';


const Procesar = () => {
  const {usuario} = useContext(ContextoUsuarios);

  console.log(usuario);
  return (
    <><h1>Procesar</h1></>
  );
}
 
export default Procesar;