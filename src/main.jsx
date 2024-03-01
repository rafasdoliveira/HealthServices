import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
// Routes
import CadastroUsuario from './pages/cadastros/CadastroUsuario/cadastroUsuario.jsx';
import CadastroRealizado from './pages/cadastros/CadastroRealizado/cadastroRealizado.jsx';
import RecuperarSenha from './pages/cadastros/RecuperarSenha/recuperarSenha.jsx';
import ConfirmarToken from './pages/cadastros/RecuperarSenha/confirmarToken.jsx'
import NovaSenha from './pages/cadastros/RecuperarSenha/novaSenha.jsx'
import Menu from './pages/menu/menu.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario/>}/>
        <Route path='/cadastrorealizado' element={<CadastroRealizado/>}/>
        <Route path='/recuperarsenha' element={<RecuperarSenha/>}/>
        <Route path='/confirmartoken' element={<ConfirmarToken/>}/>
        <Route path='/novasenha' element={<NovaSenha/>}/>
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
