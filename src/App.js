import React from 'react';
import { Header } from './components';
import { Home, Cart, Contacts, Product, Order, NotFound } from './pages/';
import { Route, withRouter, Switch } from 'react-router-dom';

const App = withRouter((props) => {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:productId?" component={Product} />
        <Route path="/cart" component={Cart} exact />
        <Route path="/order" component={Order} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
