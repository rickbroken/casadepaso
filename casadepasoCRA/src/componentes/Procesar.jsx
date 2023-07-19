import React, { useState } from 'react';
import FilaUsuario from './FilaUsuario';


const Procesar = () => {


  //Simulamos que resivimos los datos firebase
  const [usuarios,setUsuarios] = useState([]);


  //Funcion cuando se da click en btn buscar
  const handleBuscar = () => {
    setUsuarios([
      {
        A_tp: "RC",
        B_documento: "1006690431",
        C_motivoAlojamiento: "Motivo 2",
        D_fechaIngreso: "2023-07-15",
        E_acompanante: true,
        F_priApellido: "QUEBRADA",
        G_segApellido: "RODRIGUEZ",
        H_priNombre: "DAIRON",
        I_segNombre: "RICARDO",
        J_observaciones: "Se trae por motivos de consulta externa",
        K_tpAcompanante: "CC",
        L_documentoAcompanante: "1050918138",
        M_priApellidoAcompanante: "PEPITA",
        N_segApellidoAcompanante: "PEREZ",
        O_priNombreAcompanante: "JULIETA",
        P_segNombreAcompanante: "SOFIA",
        Q_fechaSalida: '',
        R_estadoUsuario: true,
        Z_id: "4c86c92"
      },
      {
        A_tp: "RC",
        B_documento: "1006690431",
        C_motivoAlojamiento: "Motivo 2",
        D_fechaIngreso: "2023-07-06",
        E_acompanante: false,
        F_priApellido: "QUEBRADA",
        G_segApellido: "RODRIGUEZ",
        H_priNombre: "DAIRON",
        I_segNombre: "RICARDO",
        J_observaciones: "Se trae por motivos de consulta externa",
        Q_fechaSalida: '08/07/2023',
        R_estadoUsuario: false,
        Z_id: "ad2s841"
      }
    ]);
  }

  return (
    <div className=' m-4'>
      <div className='flex items-end my-5'>
        <div className='mr-4'>
          <p>Fecha de ingreso</p>
          <input value={''} onChange={(e)=>console.log(e.target.value)} type="date" className='border-inputs h-10 py-2 px-2 border rounded-md' />
        </div>
        
        <div className='mr-4'>
          <p>Fecha de salida</p>
          <input value={''} onChange={(e)=>console.log(e.target.value)} type="date" className='border-inputs h-10 py-2 px-2 border rounded-md' />
        </div>

        <div className='mr-4'>
          <p>Estado del usuario:</p>
          <select value={''} onChange={(e)=>console.log(e.target.value)}
            className='border-inputs py-2 px-2 border rounded-md w-full'>
            <option value="">Seleccione el estado</option>
            <option value="ESTADIA">EN ESTADIA</option>
            <option value="FINALIZADO">FINALIZADO</option>
            <option value="TODOS">TODOS</option>
          </select>
        </div>

        <button 
          className='bg-primario transition h-11 duration-300 text-white py-2 px-10 rounded-md hover:bg-[#143a28]'
          onClick={handleBuscar}
          type='button'
        >
          Buscar
        </button>
      </div>

      <table className='w-full mx-auto'>
        <thead>
          <tr>
            <th>ID Registro</th>
            <th>Tp Doc</th>
            <th>Documento</th>
            <th>Pri Ap</th>
            <th>Seg Ap</th>
            <th>Pri Nom</th>
            <th>Seg Nom</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida</th>
            <th>Estado</th>
            <th>Accion</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios.map((usuario)=>(
            <FilaUsuario 
                key={usuario.Z_id}
                id={usuario.Z_id}
                tp={usuario.A_tp}
                documento={usuario.B_documento}
                priApellido={usuario.F_priApellido}
                segApellido={usuario.G_segApellido}
                priNombre={usuario.H_priNombre}
                segNombre={usuario.I_segNombre}
                fechaIngreso={usuario.D_fechaIngreso}
                fechaSalida={usuario.Q_fechaSalida}
                estadoUsuario={usuario.R_estadoUsuario}
                acompanante={usuario.E_acompanante}
                priApellidoAcompanante={usuario.M_priApellidoAcompanante}
                segApellidoAcompanante={usuario.N_segApellidoAcompanante}
                priNombreAcompanante={usuario.O_priNombreAcompanante}
                segNombreAcompanante={usuario.P_segNombreAcompanante}
            />
            ))
          }
        </tbody>
      </table>
      
    </div>
  );
}
 
export default Procesar;