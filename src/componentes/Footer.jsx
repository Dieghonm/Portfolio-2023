import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
      </div>
        <nav className="header-nav">
        <a href="https://github.com/seu-usuario-github">GitHub</a>
        <a href="https://www.linkedin.com/in/seu-linkedin">LinkedIn</a>
        <a href="mailto:seu-email@example.com">Email</a>
        </nav>
    </footer>
  );
}

export default Footer;