import WebFont from 'webfontloader';
import './App.css';
import Header from './componentes/Header';
import { Route, Routes } from 'react-router-dom';
import Ingresar from './componentes/Ingresar';
import Procesar from './componentes/Procesar';
import Exportar from './componentes/Exportar';

WebFont.load({
  google: {
    families: ['Lexend:100,200,300,400,500,600,700,800,900', 'Droid Serif']
  }
});

function App() {
  return (
    <div className='font-primaria font-[300]'>
      <Header />

      <Routes>
        <Route path='/' element={<Ingresar />} />
        <Route path='/procesar' element={<Procesar />} />
        <Route path='/exportar' element={<Exportar />} />
        <Route path='/*' element={<Ingresar />} />
      </Routes>

    </div>
  )
}

export default App
