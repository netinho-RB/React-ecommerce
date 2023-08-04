import React from 'react';

function ProductDetails() {
  // Aqui você pode receber os detalhes da fruta clicada
  // Exemplo de como exibir os detalhes:
  const fruit = {
    id: 1,
    name: 'Banana',
    price: 2.5,
    description: 'Uma fruta deliciosa e nutritiva.',
    image: 'banana.jpg',
  };

  return (
    <div className="product-details">
      <img src={`images/${fruit.image}`} alt={fruit.name} />
      <h2>{fruit.name}</h2>
      <p>Preço: R${fruit.price.toFixed(2)}</p>
      <p>{fruit.description}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;
