import React from 'react';
import perfil from '../img/perfil.jpeg'
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={perfil} alt="Minha Foto" />
        <h1 className="header-title">Olá, eu sou o Diegho</h1>
        <nav className="header-nav">
          <a href="https://github.com/seu-usuario-github">GitHub</a>
          <a href="https://www.linkedin.com/in/seu-linkedin">LinkedIn</a>
          <a href="mailto:seu-email@example.com">Email</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
