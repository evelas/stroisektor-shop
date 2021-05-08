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

export default configureStore;
