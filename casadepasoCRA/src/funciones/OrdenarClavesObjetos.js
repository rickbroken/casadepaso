const OrdenarClavesObjetos = (arreglo) => {
  function ordenarClavesAlfabeticamente(objeto) {
    const clavesOrdenadas = Object.keys(objeto).sort();
    const objetoOrdenado = {};
    clavesOrdenadas.forEach(clave => {
      objetoOrdenado[clave] = objeto[clave];
    });
    return objetoOrdenado;
  }
  const arregloObjetosOrdenados = arreglo.map(objeto => ordenarClavesAlfabeticamente(objeto));
  
  return arregloObjetosOrdenados;
}
 
export default OrdenarClavesObjetos;

