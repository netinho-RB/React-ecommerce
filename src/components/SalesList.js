import React from 'react';

const SalesList = ({ salesData }) => {
  return (
    <div>
      <h2>Lista de Vendas</h2>
      <table>
        <thead>
          <tr>
            <th>Fruta</th>
            <th>Quantidade</th>
            <th>Valor Unitário (R$)</th>
            <th>Valor Total (R$)</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.nome}</td>
              <td>{sale.quantidade}</td>
              <td>{sale.valorUnitario.toFixed(2)}</td>
              <td>{sale.valorTotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
