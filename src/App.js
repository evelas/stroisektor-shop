import React from 'react';
import { Header } from './components';
import { Home, Cart, Contacts, Product, Order } from './pages/';
import { Route, withRouter } from 'react-router-dom';

const App = withRouter((props) => {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/product/:productId?" component={Product} />
      <Route path="/cart" component={Cart} exact />
      <Route path="/order" component={Order} exact />
      <Route path="/contacts" component={Contacts} exact />
    </div>
  );
});

export default App;
