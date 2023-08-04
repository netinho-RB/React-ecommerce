// src/components/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import frutasData from '../data/frutas.json';

const ProductDetails = () => {
  const { id } = useParams();
  const fruta = frutasData.find((fruta) => fruta.id === parseInt(id));

  return (
    <div>
      {fruta ? (
        <div>
          <h2>{fruta.nome}</h2>
          <p>Price: {fruta.preco}</p>
          <p>Description: {fruta.descricao}</p>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default ProductDetails;
