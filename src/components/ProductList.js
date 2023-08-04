import React from 'react';
import { useParams } from 'react-router-dom';
import frutas from '../data/frutas.json';

const ProductDetails = () => {
  const { id } = useParams();
  const fruta = frutas.find((fruta) => fruta.id === parseInt(id));

  if (!fruta) {
    return <div>Fruta não encontrada</div>;
  }

  return (
    <div>
      <h2>{fruta.nome}</h2>
      <p>Preço: R$ {fruta.preco}</p>
      <p>{fruta.descricao}</p>
      <img src={fruta.imagem} alt={fruta.nome} />
      {/* Adicione mais detalhes da fruta aqui */}
    </div>
  );
};

export default ProductDetails;
