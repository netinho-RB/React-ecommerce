import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar uma fruta ao carrinho
  const addToCart = (fruta) => {
    setCartItems([...cartItems, fruta]);
  };

  // Função para calcular o total da compra
  const calcularTotal = () => {
    const total = cartItems.reduce((acc, fruta) => acc + fruta.preco, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((fruta) => (
            <li key={fruta.id}>{fruta.nome} - R$ {fruta.preco}</li>
          ))}
        </ul>
      )}
      <p>Total da compra: R$ {calcularTotal()}</p>
    </div>
  );
};

export default Cart;
