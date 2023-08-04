import React from 'react';
import frutasData from './data/frutas.json';
import Navigation from './components/Navigation';
import SalesList from './components/SalesList';

const App = () => {
  return (
    <div className="app">
      <h1>Minha Empresa de Frutas</h1>
      <Navigation frutas={frutasData} />
      <SalesList salesData={salesData} />
    </div>
  );
};

