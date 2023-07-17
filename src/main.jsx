import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { ProvedorUsuarios } from './contextos/ContextoUsuarios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ProvedorUsuarios>
        <App />
      </ProvedorUsuarios>
    </HashRouter>
  </React.StrictMode>,
)
