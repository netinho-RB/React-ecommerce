import React from 'react';
import './Header.css'; // Importe o arquivo CSS específico para o componente

const Header = () => {
  return (
    <header className="header">
      <h1>Minha Empresa de Frutas</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Carrinho</a></li>
          {/* Adicione mais links de navegação aqui */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
