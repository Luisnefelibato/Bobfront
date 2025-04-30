import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// En src/main.tsx
import './styles/variables.css';  // Primero las variables
import './styles/global.css';     // Luego los estilos globales
import './styles/animations.css'; // Y después los específicos

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)