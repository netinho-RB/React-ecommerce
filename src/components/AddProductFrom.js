import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const novaFruta = {
      nome,
      preco: parseFloat(preco),
    };
    onAddProduct(novaFruta);
    setNome('');
    setPreco('');
  };

  return (
    <div>
      <h2>Cadastrar Nova Fruta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome da Fruta:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <label htmlFor="preco">Preço da Fruta (R$):</label>
        <input
          type="number"
          id="preco"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default AddProductForm;
