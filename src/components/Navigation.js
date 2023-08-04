import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const Navigation = ({ frutas }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductList frutas={frutas} />
        </Route>
        <Route path="/frutas/:id">
          <ProductDetails frutas={frutas} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
