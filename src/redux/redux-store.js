import {applyMiddleware, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers"
 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;