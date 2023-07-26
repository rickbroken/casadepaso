import { format, fromUnixTime } from "date-fns";

const cambiarClaveObejtos = (arregloObjetos,) => {
  const nuevoArregloObjetos = [];

  function cambiarNombreClave(objeto, claveAnterior, claveNueva) {
    if (objeto.hasOwnProperty(claveAnterior)) {
      objeto[claveNueva] = objeto[claveAnterior];
      delete objeto[claveAnterior];
    }
  }
  
  const borrarClavesObjetos = (objeto) => {
    delete objeto['idDocFirebase'];
    delete objeto['id'];
    delete objeto['estadoUsuario'];
    delete objeto['acompanante'];
  }

  const formateandoFecha = (objeto, clave) => {
    const fechaIngreso = objeto[clave];
    console.log(fechaIngreso);
    const fechaformateada = format(fromUnixTime(fechaIngreso) / 1000, 'dd/MM/yyyy');
    return fechaformateada;
  }

  arregloObjetos.forEach(objeto => {
    const objetoModificado = { ...objeto }; // Creamos una copia del objeto para evitar modificar el original

    //Borramos claves la cuales no necesitaremos para exportar el csv
    borrarClavesObjetos(objetoModificado);
    
    //Damos formato de unixTime a dd/MM/yyyy a las fechas de ingreso y salida
    objetoModificado['fechaIngreso'] = formateandoFecha(objetoModificado, 'fechaIngreso');
    objetoModificado['fechaSalida'] = objetoModificado['fechaSalida'] !== '' ? formateandoFecha(objetoModificado, 'fechaSalida') : '';
    
    cambiarNombreClave(objetoModificado, 'tp', 'A_tp');
    cambiarNombreClave(objetoModificado, 'documento', 'B_documento');
    cambiarNombreClave(objetoModificado, 'priApellido', 'C_priApellido');
    cambiarNombreClave(objetoModificado, 'segApellido', 'D_segApellido');
    cambiarNombreClave(objetoModificado, 'priNombre', 'E_priNombre');
    cambiarNombreClave(objetoModificado, 'segNombre', 'F_segNombre');
    cambiarNombreClave(objetoModificado, 'tpAcompanante', 'G_tpAcompanante');
    cambiarNombreClave(objetoModificado, 'documentoAcompanante', 'H_documentoAcompanante');
    cambiarNombreClave(objetoModificado, 'priApellidoAcompanante', 'I_priApellidoAcompanante');
    cambiarNombreClave(objetoModificado, 'segApellidoAcompanante', 'J_segApellidoAcompanante');
    cambiarNombreClave(objetoModificado, 'priNombreAcompanante', 'K_priNombreAcompanante');
    cambiarNombreClave(objetoModificado, 'segNombreAcompanante', 'L_segNombreAcompanante');
    cambiarNombreClave(objetoModificado, 'fechaIngreso', 'M_fechaIngreso');
    cambiarNombreClave(objetoModificado, 'fechaSalida', 'N_fechaSalida');
    cambiarNombreClave(objetoModificado, 'motivoAlojamiento', 'O_motivoAlojamiento');
    cambiarNombreClave(objetoModificado, 'observaciones', 'P_observaciones');
    

    nuevoArregloObjetos.push(objetoModificado); // Agregamos el objeto modificado al nuevo arreglo
  });
  
  return nuevoArregloObjetos;
}
 
export default cambiarClaveObejtos;