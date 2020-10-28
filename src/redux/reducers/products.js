import { TypesProduct } from '../actions/products';

const initialState = {
  products: [],
  isLoaded: false,
  lastItem: false,
  limit: 8,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesProduct.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoaded: true,
      };
    case TypesProduct.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case TypesProduct.IS_LAST_ITEM:
      return {
        ...state,
        lastItem: action.payload,
      };
    case TypesProduct.SET_NEW_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };

    default:
      return state;
  }
};

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
