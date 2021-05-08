import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from '../redux/saga/sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, saga)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// saga.run(rootSaga);
// window.store = store;

// export default store;

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, saga)),
  );
  window.store = store;
  saga.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

// const { store } = configureStore();

export default configureStore;
