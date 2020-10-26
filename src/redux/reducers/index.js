import { combineReducers } from 'redux';

import products from './products';
import filters from './filters';
import cart from './cart';
import search from './search';
import oneProduct from './oneProduct';

const reducers = combineReducers({
    products,
    filters,
    cart,
    search,
    oneProduct
});

export default reducers;
