// import { productsAPI } from '../../api/api';

const SET_PRODUCTS = '/reducers/products/SET_PRODUCTS';
const IS_LOADED = '/reducers/products/IS_LOADED';
const IS_LAST_ITEM = '/reducers/products/IS_LAST_ITEM';
const SET_NEW_LIMIT = '/reducers/products/SET_NEW_LIMIT';
export const LOAD_DATA = '/reducers/products/LOAD_DATA';

const initialState = {
  products: [],
  isLoaded: false,
  lastItem: false,
  limit: 8,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        isLoaded: true,
      };
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded,
      };
    case IS_LAST_ITEM:
      return {
        ...state,
        lastItem: action.lastItem,
      };
    case SET_NEW_LIMIT:
      return {
        ...state,
        limit: action.limit,
      };

    default:
      return state;
  }
};

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const isLoadedAction = (isLoaded) => ({
  type: IS_LOADED,
  isLoaded,
});

export const isLastItem = (lastItem) => ({
  type: IS_LAST_ITEM,
  lastItem,
});
export const setNewLimit = (limit) => ({
  type: SET_NEW_LIMIT,
  limit,
});

export const loadData = (category, sortBy, limit) => ({
  type: LOAD_DATA,
  payload: {
    category,
    sortBy,
    limit,
  },
});

// Thunk Creators
// see sagas.js
// export const getProducts = (category, sortBy, limit = 8) => {
//   return async (dispatch) => {
//     try {
//       dispatch(isLoadedAction(false));
//       const response = await productsAPI.getGoods(category, sortBy, limit);
//       dispatch(setProducts(response.data.items));
//       dispatch(isLastItem(response.data.lastItem));
//       dispatch(isLoadedAction(true));
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };

export default productsReducer;
