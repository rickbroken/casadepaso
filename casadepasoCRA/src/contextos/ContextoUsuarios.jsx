import React, { useState } from 'react';

//Creamos contexto para guardar el datos de los usuarios del resgirdo que se este diligenciando
const ContextoUsuarios = React.createContext();

const ProvedorUsuarios = ({children}) => {
  const [usuario, setUsuario] = useState({});

  return (
    <ContextoUsuarios.Provider value={{usuario,setUsuario}}>
      {children}
    </ContextoUsuarios.Provider>
  );
}
 
export {ProvedorUsuarios, ContextoUsuarios};