import produce from 'immer';
import { reduce } from 'lodash';
import { TypesCart } from '../actions/cart';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TypesCart.ADD_PRODUCT_TO_CART:
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;
      case TypesCart.PLUS_PRODUCT:
        draft.items[action.payload].push(draft.items[action.payload][0]);
        //console.log(JSON.stringify(draft.items[action.id]));
        break;
      case TypesCart.MINUS_PRODUCT:
        if (draft.items[action.payload].length > 1) {
          draft.items[action.payload].shift();
        }
        break;
      case TypesCart.REMOVE_PRODUCT:
        delete draft.items[action.payload];
        break;
      case TypesCart.CLEAR_ITEMS:
        draft.items = {};
        break;
      default:
    }

    const resultArr = reduce(
      draft.items,
      function (prev, current) {
        return prev.concat(current);
      },
      [],
    );
    // reduce не из lodash
    draft.totalPrice = resultArr.reduce((total, obj) => obj.price + total, 0);
    draft.totalCount = resultArr.length;
  });
};

export default cartReducer;
