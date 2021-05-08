import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

//import createAppStore from './redux/redux-store';
// import { PersistGate } from 'redux-persist/integration/react';
// const { persistor, store } = createAppStore();

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
